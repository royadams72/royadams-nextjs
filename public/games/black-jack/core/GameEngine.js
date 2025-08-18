import {
  buildCardManifests,
  buildStaticManifests,
  buildPlatformManifests,
  SUITS,
} from "./assets.js";
import { randInt, shadowFilter, rankToCard } from "./utils.js";
import { flipFaceUp, pulseGlow, stopTweens } from "./animations.js";
import {
  buildButtons,
  buildScoreLabels,
  buildChips,
  buildMsgText,
} from "./ui.js";

import gameCopy from "./gameCopy.js";

export default class GameEngine {
  constructor({ config, clientlibUrl, mountOverlay }) {
    this.config = config;
    this.base = clientlibUrl;
    this.gameCopy = gameCopy;
    this.mountOverlay = mountOverlay;

    this.dealerCards = [];
    this.playerCards = [];
    this.dealtContainers = [];
    this.tweens = [];
    this.standTweens = [];
    this.playerScore = 0;
    this.dealerScore = 0;
    this.betCount = 0;
    this.bets = 0;
    this.betMade = false;
    this.standingClicked = false;
    this.hitClicked = false;
    this.gameStarted = false;
    this.standCount = 0;
    this.btnArray = [];
    this.chips = [];
  }

  load(onProgress) {
    const loader = new PIXI.Loader();
    this.loader = loader;

    if (!this._assetsAdded) {
      for (const a of [
        ...buildCardManifests(this.base),
        ...buildStaticManifests(this.base),
        ...buildPlatformManifests(this.base, this.config.isMobile),
      ]) {
        if (!loader.resources[a.name]) loader.add(a.name, a.url);
      }
      this._assetsAdded = true;
    }

    onProgress &&
      loader.onProgress.add((e) => onProgress(Math.round(e.progress)));
    return new Promise((res) => loader.load(() => res(loader.resources)));
  }

  initStage() {
    this.stage = new PIXI.Container();
    this.stage.interactive = true;

    const { w, h, viewId, mountId } = this.config.renderer;
    const mountEl = document.getElementById(mountId);
    const viewEl = document.getElementById(viewId) || undefined;

    this.renderer = PIXI.autoDetectRenderer({
      width: w,
      height: h,
      view: viewEl,
      backgroundAlpha: 0,
      antialias: true,
    });

    if (!viewEl && mountEl) {
      console.warn(
        `[GameEngine] Canvas #${viewId} not found. Created a new one.`
      );
      mountEl.appendChild(this.renderer.view);
    }

    this.clickThrough = document.createElement("button");
    Object.assign(this.clickThrough.style, {
      display: "none",
      width: "100%",
      height: "100%",
      position: "absolute",
      opacity: 0,
      cursor: "pointer",
    });

    this.mountOverlay?.appendChild(this.clickThrough);
    this.clickThrough.addEventListener("click", () => {
      if (this.gameCopy.clickThroughURL)
        window.location = this.gameCopy.clickThroughURL;
    });

    this.gameContainer = new PIXI.Container();
    this.msgContainer = new PIXI.Container();

    const R = this.loader.resources;

    this.bg = new PIXI.Sprite(R[this.config.assets.bg].texture);
    this.bg.width = 800;
    this.msgBG = new PIXI.Sprite(R[this.config.assets.msgBG].texture);
    this.cta = new PIXI.Sprite(R[this.config.assets.cta].texture);
    this.winScreen = new PIXI.Container();
    this.logo = new PIXI.Sprite(R.logo.texture);
    const sh = shadowFilter();

    this.stage.addChild(this.bg);
    this.stage.addChild(this.gameContainer);
    this.stage.addChild(this.logo);

    const lp = this.config.positions.logo;
    if (lp.xCenter) {
      this.logo.x = this.renderer.width / 2;
    } else {
      this.logo.x = lp.x ?? 0;
      this.logo.y = lp.y ?? 0;
      this.logo.scale.set(lp.scale ?? 1);
    }
    this.logo.anchor.set(0.5);

    this.msgContainer.addChild(this.msgBG);
    const mp = this.config.positions.msg;
    this.msgContainer.pivot.set(this.msgContainer.width / 2, 0);
    this.msgContainer.x = this.renderer.width / 2 + (mp.xFromCenter || 0);
    this.msgContainer.y = mp.y;
    this.msgContainer.filters = [sh];

    this._buildHUD();

    this._raf = requestAnimationFrame(this._tick);
  }

  start() {
    for (const c of this.chips) pulseGlow(c, this.tweens);
    this._addListeners();
    this._firstDeal();
  }

  _buildHUD() {
    this.btnArray = [];
    this.chips = [];
    const R = this.loader.resources;

    buildButtons(R, this.config, this.gameContainer, this.btnArray);

    const { dealerScoreTxt, playerScoreTxt } = buildScoreLabels(
      R,
      this.config,
      this.gameContainer
    );
    this.dealerScoreTxt = dealerScoreTxt;
    this.playerScoreTxt = playerScoreTxt;

    buildChips(R, this.config, this.msgContainer, this.chips);
    this.msgTxt = buildMsgText(this.gameCopy, this.config, this.msgContainer);

    this.gameContainer.addChild(this.msgContainer);

    this.playerScoreTxt.text = String(this.playerScore);
    this.dealerScoreTxt.text = String(this.dealerScore);

    this._buildWinScreen();
  }

  _buildWinScreen() {
    const copyStyle = {
      fontFamily: "Arial",
      fontStyle: "italic",
      fill: 0xffffff,
      dropShadow: true,
      dropShadowColor: "#262626",
      dropShadowDistance: 3,
      align: "center",
    };
    let topPadding = 190;
    const firstTxt = new PIXI.Text(
      this.gameCopy.youWon + "\n" + this.gameCopy.signUp + "\n",
      { ...copyStyle, fontSize: 35 }
    );
    const SecondTxt = new PIXI.Text(this.gameCopy.toReceive, {
      ...copyStyle,
      fontSize: 35,
    });
    const thirdTxt = new PIXI.Text(this.gameCopy.bonus, {
      ...copyStyle,
      fontSize: 40,
    });

    this.winScreen.addChild(this.cta);
    this.winScreen.addChild(thirdTxt);
    this.winScreen.addChild(SecondTxt);
    this.winScreen.addChild(firstTxt);
    this.winScreen.pivot.set(
      this.winScreen.width / 2,
      this.winScreen.height / 2
    );
    this.winScreen.x = this.renderer.width / 2;
    this.winScreen.y = 90;
    this.winScreen.alpha = 0;

    const centerNum = this.winScreen.width / 2;

    firstTxt.anchor.set(0.5);
    firstTxt.x = centerNum;
    firstTxt.y = topPadding;

    SecondTxt.anchor.set(0.5);
    topPadding += 35;
    SecondTxt.x = centerNum;
    SecondTxt.y = topPadding;

    thirdTxt.anchor.set(0.5);
    topPadding += 40;
    thirdTxt.y = topPadding;
    thirdTxt.x = centerNum;

    topPadding += 65;
    this.cta.anchor.set(0.5);
    this.cta.x = centerNum;
    this.cta.y = topPadding;

    this.stage.addChild(this.winScreen);
  }

  _addListeners() {
    const [stand, hit] = this.btnArray;

    const onMakeBet = () => {
      if (this.betMade) return;
      this._makeBet();
    };

    this.msgContainer.interactive = true;
    this.msgContainer.buttonMode = true;
    this.msgContainer.on("click", onMakeBet).on("touchstart", onMakeBet);

    stand.interactive = true;
    stand.buttonMode = true;
    stand.on("click", () => {
      if (this.betMade && !this.standingClicked && !this.hitClicked) {
        this.standingClicked = true;
        this._standCards();
        stopTweens(this.tweens);
      }
    });

    hit.interactive = true;
    hit.buttonMode = true;
    hit.on("click", () => {
      if (this.betMade && !this.hitClicked && !this.standingClicked) {
        this.hitClicked = true;
        this._hit();
        stopTweens(this.tweens);
      }
    });

    this.clickThrough.addEventListener("touchstart", () => {
      if (this.gameCopy.clickThroughURL)
        window.location = this.gameCopy.clickThroughURL;
    });
  }

  _firstDeal() {
    TweenMax.delayedCall(0.32, () => this._deal("dealer"));
    this._deal("player");
    TweenMax.delayedCall(1.5, () => this._deal("player"));
    TweenMax.delayedCall(1.7, () => this._deal("dealer"));
  }

  _deal(who) {
    const suit = SUITS[randInt(1, 4) - 1];

    if (who === "player") this._dealToPlayer(suit);
    else this._dealToDealer(suit);
  }

  _dealToDealer(suit) {
    const configP = this.config.positions;
    let n = this._dealerNextValue();
    let [rank, points] = rankToCard(n);
    const cardName = `${rank}_${suit}`;

    // Calls again if duplicate
    if (this._isDuplicate(cardName, this.dealerCards, this.playerCards)) {
      return this._deal("dealer");
    }

    this.dealerCards.push(cardName);
    this.dealerScore += points;

    const cont = new PIXI.Container();
    const face = new PIXI.Sprite(this.loader.resources[cardName].texture);
    const back = new PIXI.Sprite(this.loader.resources.cardBack.texture);
    face.anchor.set(0.5);
    back.anchor.set(0.5);

    face.scale.set(configP.cardScale);

    back.width = face.width;
    back.height = face.height;

    cont.cardGroup = "dealer";
    const endW = face.width;
    cont._targetWidth = endW;
    face.alpha = 0;
    face.width = 0.1;
    cont.addChild(face, back);
    cont.pivot.set(cont.width / 2, cont.height / 2);
    cont.x = configP.cardStartX;
    cont.y = configP.dealerY;
    cont.filters = [shadowFilter()];
    this.dealtContainers.push(cont);
    this.gameContainer.addChild(cont);

    // On first deal set the second card at a particular point
    if (!this.standingClicked && this.dealerCards.length === 2) {
      cont.name = "cardToFlip";
      cont.endX = this.dealerCardX =
        (this.dealerCardX ?? configP.cardX) + configP.updateCardX;
      TweenMax.to(cont, 1.3, {
        x: this.dealerCardX + (this.config.isMobile ? 70 : 90),
      });
    } else {
      TweenMax.to(cont, 0.9, {
        x: this.dealerCardX ?? configP.cardX,
        onComplete: () => {
          flipFaceUp(cont, face, back, endW);
          this._updateScore("dealer");
        },
      });
      this.dealerCardX =
        (this.dealerCardX ?? configP.cardX) + configP.updateCardX;
    }
  }

  _dealToPlayer(suit) {
    const configP = this.config.positions;
    let n = this._playerNextValue();
    let [rank, points] = rankToCard(n);
    const cardName = `${rank}_${suit}`;

    if (this._isDuplicate(cardName, this.playerCards, this.dealerCards)) {
      return this._deal("player");
    }

    this.playerCards.push(cardName);
    this.playerScore += points;

    const cont = new PIXI.Container();
    const face = new PIXI.Sprite(this.loader.resources[cardName].texture);
    const back = new PIXI.Sprite(this.loader.resources.cardBack.texture);

    face.anchor.set(0.5);
    back.anchor.set(0.5);

    const cardScale = this.config.isMobile ? 0.4 : configP.cardScale;
    face.scale.set(cardScale);

    back.width = face.width;
    back.height = face.height;

    const endW = face.width;
    face.alpha = 0;
    face.width = 0.1;

    cont.addChild(face, back);
    cont.pivot.set(cont.width / 2, cont.height / 2);
    cont.x = configP.cardStartX;
    cont.y = configP.playerY;
    cont.filters = [shadowFilter()];
    this.gameContainer.addChild(cont);
    this.dealtContainers.push(cont);

    TweenMax.to(cont, 0.9, {
      x: this.playerCardX ?? configP.cardX,
      onComplete: () => {
        this._updateScore("player");
        flipFaceUp(cont, face, back, endW);
        if (this.playerCards.length === 2) {
          this.gameStarted = true;
        }
      },
    });
    this.playerCardX =
      (this.playerCardX ?? configP.cardX) + configP.updateCardX;
  }

  _isDuplicate(name, a, b) {
    if (a.includes(name)) {
      a.splice(a.indexOf(name), 1);
      return true;
    }
    if (b.includes(name)) {
      return true;
    }
    return false;
  }

  _playerNextValue() {
    if (this.betCount < 2) {
      if (this.dealtContainers.length < 5) {
        let n = randInt(2, 8);
        if (n + this.playerScore === 11 || n + this.playerScore === 21) {
          n += randInt(1, 5);
          if (n > 13) n = randInt(10, 13);
        }
        return n;
      }
      return randInt(10, 13);
    }
    // second bet
    if (this.dealtContainers.length < 4) return randInt(8, 13);
    let n = 21 - this.playerScore;
    if (n > 13) n = randInt(10, 13);
    return n;
  }

  _dealerNextValue() {
    if (this.betCount < 2) {
      if (!this.standingClicked && this.betCount === 0) return randInt(2, 5);
      if (this.standCount < 2) {
        let n = randInt(2, 7);
        if (n + this.dealerScore === 21) n = randInt(2, 7);
        this.standCount++;
        return n;
      }
      this.standCount++;
      return 21 - this.dealerScore;
    }
    // second bet
    if (!this.standingClicked && this.betCount === 2) return randInt(6, 8);
    return randInt(10, 13);
  }

  _updateScore(who) {
    if (who === "player") this.playerScoreTxt.text = String(this.playerScore);
    else this.dealerScoreTxt.text = String(this.dealerScore);

    if (this.gameStarted || who === "dealer") this._checkScore(who);
  }

  _checkScore(who) {
    if (who === "player") {
      if (this.playerScore < 21) {
        // if (this.betMade) this._pulseBtns(); // <- only when a bet exists
        this.hitClicked = false;
        this.standingClicked = false;
      } else if (this.playerScore > 21) {
        this._playerBusted();
      } else {
        this._playerWins();
      }
    } else {
      if (this.dealerScore === 21) {
        this._dealerWins();
      } else if (this.dealerScore >= 22) {
        stopTweens(this.standTweens);
        this._playerWins();
      } else if (
        this.betCount === 1 &&
        this.dealerScore > this.playerScore &&
        this.dealerScore >= 17
      ) {
        stopTweens(this.standTweens);
        this._dealerWins();
      }
    }
  }

  _pulseBtns(btns) {
    for (let btn of btns) {
      pulseGlow(btn, this.tweens);
    }
  }

  _btnActive(container, interactive) {
    if (!interactive) container.filters = null;

    container.interactive = !!interactive;
    container.buttonMode = !!interactive;
  }

  _btnInactive(container, gray = true) {
    if (gray) {
      const cm = new PIXI.filters.ColorMatrixFilter();
      cm.desaturate();
      container.filters = [cm];
    }
    container.interactive = false;
    container.buttonMode = false;
    stopTweens(this.tweens);
  }

  _makeBet() {
    this.betCount++;

    // For the first TWO bets, we are playing a hand
    if (this.betCount <= 2) {
      this.betMade = true;
      const delay = this.betCount === 1 ? 0.5 : 4;
      TweenMax.delayedCall(delay, () => this._pulseBtns(this.btnArray));
      // block re-clicking the banner during the hand
      this.msgContainer.interactive = false;
      this.msgContainer.buttonMode = false;

      if (this.bets === 0) this.bets = randInt(1, 2);
      if (this.betCount === 1) {
        // after first bet
        if (this.bets === 1) {
          this.msgTxt.text = this.gameCopy.youHave100;
          this._btnInactive(this.chips[0]);
          this.bets = 2;
        } else {
          this.msgTxt.text = this.gameCopy.youHave50;
          this._btnInactive(this.chips[1]);
          this.bets = 1;
        }
      } else {
        // after second bet – no reset yet, still playing this hand
        this.msgTxt.y = this.msgTxt.y + 10;
        this.msgTxt.text = this.gameCopy.youHave0;
        // disable the remaining chip as well
        this._btnInactive(this.chips[0]);
        this._btnInactive(this.chips[1]);
        this._resetCards();
      }

      return;
    }
  }

  // let _resetCards optionally skip auto deal
  _resetCards(autoDeal = true) {
    const total = this.dealtContainers.length;
    let done = 0;
    for (const card of this.dealtContainers) {
      const duration = card.y > this.renderer.height / 2 ? 2 : 1.2;
      TweenMax.to(card, duration, {
        y: -200,
        onComplete: () => {
          if (++done === total) {
            this._resetVars();
            if (autoDeal) {
              TweenMax.delayedCall(0.7, () => this._firstDeal());
            }
          }
        },
      });
    }
  }

  _resetVars() {
    this.dealerCards = [];
    this.playerCards = [];
    this.dealtContainers = [];
    this.playerScore = 0;
    this.dealerScore = 0;
    this.playerCardX = this.config.positions.cardX;
    this.dealerCardX = this.config.positions.cardX;
    this.standingClicked = false;
    this.hitClicked = false;
    this.gameStarted = false;
    this.standCount = 0;

    this._updateScore("dealer");
    this._updateScore("player");

    // clean dealer-only children if needed
    for (let i = this.gameContainer.children.length - 1; i >= 0; i--) {
      const ch = this.gameContainer.children[i];
      if (ch.cardGroup === "dealer") this.gameContainer.removeChild(ch);
    }
  }

  _standCards() {
    // flip hidden dealer card
    for (let i = this.gameContainer.children.length - 1; i >= 0; i--) {
      const ch = this.gameContainer.children[i];
      if (ch.name === "cardToFlip") {
        const face = ch.getChildAt(0),
          back = ch.getChildAt(1);
        flipFaceUp(ch, face, back, ch._targetWidth);
      }
    }
    let t = 1.3,
      d = 1.3;
    this.standTweens.push(TweenMax.delayedCall(t, () => this._deal("dealer")));
    t += d;
    this.standTweens.push(TweenMax.delayedCall(t, () => this._deal("dealer")));
    t += d;
    this.standTweens.push(TweenMax.delayedCall(t, () => this._deal("dealer")));
    stopTweens(this.tweens);
    this._updateScore("dealer");
  }

  _hit() {
    this._deal("player");
    stopTweens(this.tweens);
  }

  _playerWins() {
    for (const c of this.chips) c.alpha = 0;

    TweenMax.delayedCall(2, () => {
      TweenMax.set(this.msgContainer, { visible: true, alpha: 0 });
      TweenMax.to(this.gameContainer, 0.3, { alpha: 0 });
      TweenMax.to(this.logo, 0.3, {
        x: this.renderer.width / 2,
        y: this.logo.y + 60,
      });
      TweenMax.to(this.winScreen, 0.3, {
        alpha: 1,
      });
      this.clickThrough.style.display = "block";
    });
  }
  _dealerWins() {
    this._loseCopy(this.gameCopy.dealerWins);
  }
  _playerBusted() {
    this._loseCopy(this.gameCopy.youBusted);
  }

  _loseCopy(line) {
    this.betMade = false;

    this.msgTxt.y = this.msgTxt.y - 15;
    this.msgTxt.x = this.msgTxt.x + 40;
    this.msgTxt.text = `Bad luck ${line}\nClick to make another bet.`;

    // re-enable banner to accept next bet click
    this.msgContainer.interactive = true;
    this.msgContainer.buttonMode = true;

    // pulse whichever chip is still active (if any)
    if (this.bets === 1) pulseGlow(this.chips[0], this.tweens);
    else pulseGlow(this.chips[1], this.tweens);
  }

  _tick = () => {
    this.renderer.render(this.stage);
    this._raf = requestAnimationFrame(this._tick);
  };
}
