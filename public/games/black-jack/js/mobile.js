var mobile = function () {
  //Global assets
  var mobileAssetsLoaded = false,
    m_fontObj = {},
    m_stage,
    m_requestId,
    m_suit,
    m_stringArray,
    m_cardX,
    m_dealerCardX,
    m_playerCardX,
    m_msgBG,
    m_playerTxt,
    m_gameBG,
    m_dealerTxt,
    m_playerScore,
    m_msgtxt,
    m_dealerScore,
    m_bets,
    m_gameStarted,
    m_cardStartX,
    m_objScale,
    centerStage;

  var initMobile = function () {
    if (!mobileAssetsLoaded) return;
    //if commonn assets not loaded create loader object, else, just add to loader
    mloader = new PIXI.loaders.Loader();
    // add resources
    mloader.add("ace_hearts", clientlibUrl + "img/cards/ace_hearts.png");
    mloader.add("two_hearts", clientlibUrl + "img/cards/two_hearts.png");
    mloader.add("three_hearts", clientlibUrl + "img/cards/three_hearts.png");
    mloader.add("four_hearts", clientlibUrl + "img/cards/four_hearts.png");
    mloader.add("five_hearts", clientlibUrl + "img/cards/five_hearts.png");
    mloader.add("six_hearts", clientlibUrl + "img/cards/six_hearts.png");
    mloader.add("seven_hearts", clientlibUrl + "img/cards/seven_hearts.png");
    mloader.add("eight_hearts", clientlibUrl + "img/cards/eight_hearts.png");
    mloader.add("nine_hearts", clientlibUrl + "img/cards/nine_hearts.png");
    mloader.add("ten_hearts", clientlibUrl + "img/cards/ten_hearts.png");
    mloader.add("j_hearts", clientlibUrl + "img/cards/j_hearts.png");
    mloader.add("k_hearts", clientlibUrl + "img/cards/k_hearts.png");
    mloader.add("q_hearts", clientlibUrl + "img/cards/q_hearts.png");

    mloader.add("ace_spades", clientlibUrl + "img/cards/ace_spades.png");
    mloader.add("two_spades", clientlibUrl + "img/cards/two_spades.png");
    mloader.add("three_spades", clientlibUrl + "img/cards/three_spades.png");
    mloader.add("four_spades", clientlibUrl + "img/cards/four_spades.png");
    mloader.add("five_spades", clientlibUrl + "img/cards/five_spades.png");
    mloader.add("six_spades", clientlibUrl + "img/cards/six_spades.png");
    mloader.add("seven_spades", clientlibUrl + "img/cards/seven_spades.png");
    mloader.add("eight_spades", clientlibUrl + "img/cards/eight_spades.png");
    mloader.add("nine_spades", clientlibUrl + "img/cards/nine_spades.png");
    mloader.add("ten_spades", clientlibUrl + "img/cards/ten_spades.png");
    mloader.add("j_spades", clientlibUrl + "img/cards/j_spades.png");
    mloader.add("k_spades", clientlibUrl + "img/cards/k_spades.png");
    mloader.add("q_spades", clientlibUrl + "img/cards/q_spades.png");

    mloader.add("ace_clubs", clientlibUrl + "img/cards/ace_clubs.png");
    mloader.add("two_clubs", clientlibUrl + "img/cards/two_clubs.png");
    mloader.add("three_clubs", clientlibUrl + "img/cards/three_clubs.png");
    mloader.add("four_clubs", clientlibUrl + "img/cards/four_clubs.png");
    mloader.add("five_clubs", clientlibUrl + "img/cards/five_clubs.png");
    mloader.add("six_clubs", clientlibUrl + "img/cards/six_clubs.png");
    mloader.add("seven_clubs", clientlibUrl + "img/cards/seven_clubs.png");
    mloader.add("eight_clubs", clientlibUrl + "img/cards/eight_clubs.png");
    mloader.add("nine_clubs", clientlibUrl + "img/cards/nine_clubs.png");
    mloader.add("ten_clubs", clientlibUrl + "img/cards/ten_clubs.png");
    mloader.add("j_clubs", clientlibUrl + "img/cards/j_clubs.png");
    mloader.add("k_clubs", clientlibUrl + "img/cards/k_clubs.png");
    mloader.add("q_clubs", clientlibUrl + "img/cards/q_clubs.png");

    mloader.add("ace_diamonds", clientlibUrl + "img/cards/ace_diamonds.png");
    mloader.add("two_diamonds", clientlibUrl + "img/cards/two_diamonds.png");
    mloader.add(
      "three_diamonds",
      clientlibUrl + "img/cards/three_diamonds.png"
    );
    mloader.add("four_diamonds", clientlibUrl + "img/cards/four_diamonds.png");
    mloader.add("five_diamonds", clientlibUrl + "img/cards/five_diamonds.png");
    mloader.add("six_diamonds", clientlibUrl + "img/cards/six_diamonds.png");
    mloader.add(
      "seven_diamonds",
      clientlibUrl + "img/cards/seven_diamonds.png"
    );
    mloader.add(
      "eight_diamonds",
      clientlibUrl + "img/cards/eight_diamonds.png"
    );
    mloader.add("nine_diamonds", clientlibUrl + "img/cards/nine_diamonds.png");
    mloader.add("ten_diamonds", clientlibUrl + "img/cards/ten_diamonds.png");
    mloader.add("j_diamonds", clientlibUrl + "img/cards/j_diamonds.png");
    mloader.add("k_diamonds", clientlibUrl + "img/cards/k_diamonds.png");
    mloader.add("q_diamonds", clientlibUrl + "img/cards/q_diamonds.png");

    mloader.add("chip_100", clientlibUrl + "img/100chip.png");
    mloader.add("chip_50", clientlibUrl + "img/50chip.png");
    mloader.add("chipGlow", clientlibUrl + "img/chipGlow.png");
    mloader.add("logo", clientlibUrl + "img/logo.png");
    mloader.add("cardBack", clientlibUrl + "img/card_back.png");

    mloader.add("standImg", clientlibUrl + "img/stand.png");
    mloader.add("hitImg", clientlibUrl + "img/hit.png");
    mloader.add("btnGlow", clientlibUrl + "img/btnGlow.png");

    mloader.add("m_ctaImg", clientlibUrl + "img/mobile/cta.png");
    mloader.add("m_gameBG", clientlibUrl + "img/mobile/mobileBG.jpg");
    mloader.add("m_msgBG", clientlibUrl + "img/mobile/m_msgBG.png");
    mobileAssetsLoaded = true;

    //listen for progress
    mloader.on("progress", function (e) {
      var percnt = Math.round(e.progress);
      loadingTxt.innerHTML = percnt + "% of game loaded";
      console.log(percnt);
    });
    // load resources
    mloader.load(function (loader, resources) {
      m_stage = new PIXI.Container();
      m_stage.interactive = true;
      m_clickThrough = document.createElement("m_button");
      m_clickThrough.setAttribute("id", "spin");
      TweenMax.set(m_clickThrough, {
        display: "none",
        width: "100%",
        position: "absolute",
        height: "100%",
        opacity: 0,
        cursor: "pointer",
      });
      mContainer.appendChild(m_clickThrough);
      m_renderer = new PIXI.autoDetectRenderer(450, 450, {
        transparent: true,
        view: mobile_game,
      });
      document.getElementById("mContainer").appendChild(m_renderer.view);

      cardStringArray = [
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
      ];
      m_dealerCardArr = [];
      m_playerCardArr = [];
      m_cardsDealtArr = [];
      m_chipArray = [];
      m_btnArray = [];
      m_tweenArray = [];
      m_standArr = [];
      m_playerScore = 0;
      m_dealerScore = 0;
      //stopVar = 0;
      m_updateCardX = 17;
      m_bets = 0;
      m_betCount = 0;
      m_cardStartX = 600;
      m_betMade = false;
      m_standingClicked = false;
      m_hitClicked = false;
      m_gameStarted = false;
      m_standCount = 0;
      setSprites();
    });
    mloader.on("complete", function (e) {
      if (!mobileLoaded) {
        setup();
        mobileLoaded = true;
      }
    });
  };

  initMobile();
  var setSprites = function () {
    //sets up sprites and containers
    m_msgBG = new PIXI.Sprite(mloader.resources.m_msgBG.texture);
    m_gameContainer = new PIXI.Container();
    m_msgContainer = new PIXI.Container();
    m_winMsg = new PIXI.Container();

    m_cta = new PIXI.Sprite(mloader.resources.m_ctaImg.texture);
    m_gameBG = new PIXI.Sprite(mloader.resources.m_gameBG.texture);
    m_logo = new PIXI.Sprite(mloader.resources.logo.texture);
    //m_star = new PIXI.Sprite(mloader.resources.star.texture);
    m_standImg = new PIXI.Sprite(mloader.resources.standImg.texture);
    m_hitImg = new PIXI.Sprite(mloader.resources.hitImg.texture);

    m_gameContainer.alpha = 0;

    m_stage.addChild(m_gameBG);
    m_msgContainer.addChild(m_msgBG);
    m_msgContainer.pivot.set(m_msgContainer.width / 2, 0);
    m_stage.addChild(m_gameContainer);
    m_logo.anchor.set(0.5, 0);
    m_stage.addChild(m_logo);
    m_stage.addChild(m_winMsg);
  };
  function setup() {
    editSprites();
    buildHUD();
    buildWinMsg();
    startGame();
    if (!m_requestId) {
      m_requestId = requestAnimationFrame(animate);
    }
  }
  var editSprites = function () {
    /*****EDIT PROPERTIES FOR THIS GAME**********************************************************/
    var shadow = shadowFilter();
    centerStage = m_renderer.width / 2;
    m_logo.scale.x = m_logo.scale.y = 0.5;
    m_logo.x = centerStage;
    m_logo.y = 6;
    m_msgContainer.x = centerStage;
    m_msgContainer.y = 90;
    // m_msgContainer.filters = [shadow];
    m_msgtxtX = m_msgContainer.width / 2; //Centre win message to the reelContainer
    m_msgtxtY = 30;
    m_winMsgY = 120;
    m_cardX = 260;
    m_playerCardX = m_cardX;
    m_dealerCardX = m_cardX;
    m_objScale = 0.5;
    //Object for font
    m_fontObj = {
      ds: true,
      dsColor: "#262626",
      dsDistance: 3,
      fill: 0xffffff,
      align: "center",
      clickFont: "italic 50px Arial",
      tryAgainFont: "italic 23px Arial",
      larger: "italic 65px Arial",
      winTxtL: "italic 40px Arial",
      winTxtS: "italic 35px Arial",
      lineH: 45,
      ww: false,
      padding: 20,
    };
  };

  var buildHUD = function () {
    actionBtns();
    playersDisplay();
    createChips();
    m_stage.addChild(m_msgContainer);
    addText();
  };

  var actionBtns = function () {
    //Sets up stand and hit buttons
    var container;
    var containerY = 124;
    m_standImg.scale.x = m_standImg.scale.y = 0.5;
    m_hitImg.scale.x = m_hitImg.scale.y = 0.5;
    for (i = 0; i < 2; i++) {
      var btnGlow = new PIXI.Sprite(mloader.resources.btnGlow.texture);
      var shadow = shadowFilter();
      container = new PIXI.Container();
      //container.alpha = 0;
      //container.visible = false;
      container.filters = [shadow];
      btnGlow.scale.x = btnGlow.scale.y = 0.52;
      btnGlow.x = -18;
      btnGlow.y = -14;
      btnGlow.alpha = 0;
      container.addChild(btnGlow);
      if (i == 0) {
        //Top
        container.addChild(m_standImg);
      } else {
        container.addChild(m_hitImg);
      }
      container.y = containerY;
      containerY += 170;
      container.x = 20;
      m_gameContainer.addChild(container);
      m_btnArray.push(container);
    }
  };

  var dealCard = function (player) {
    //Generate the suit and call function to generate card
    var n = getRandomNum(1, 4, false, false);
    m_suit = "";
    if (n == 1) {
      m_suit = "clubs";
    } else if (n == 2) {
      m_suit = "spades";
    } else if (n == 3) {
      m_suit = "hearts";
    } else if (n == 4) {
      m_suit = "diamonds";
    }

    if (player == "player") {
      getPlayerCard(player);
    } else {
      getDealerCard(player);
    }
  };

  var getDealerCard = function (player) {
    var cardContainer = new PIXI.Container();
    var cardName;
    var card = "";
    var _player = player;
    var count = 0;
    var cardBack;

    var n = 0,
      a = 0,
      b = 0;
    var shadow = shadowFilter();
    if (m_betCount < 2) {
      //first bet

      if (!m_standingClicked && m_betCount == 1) {
        //first 2 cards dealt
        n = getRandomNum(2, 5, false, false);
        //console.log(m_standCount);
      } else if (m_standCount < 2) {
        //When stand button clicked, update m_standCount on each iteration
        //console.log(m_standCount);
        n = getRandomNum(2, 7, false, false);
        if (n + m_dealerScore == 21) {
          n = getRandomNum(2, 7, false, false);
        }
        //console.log(n);
        m_standCount++;
      } else {
        //on final iteration
        n = 21 - m_dealerScore;
        //console.log(n);
        m_standCount++;
      }
    }

    if (m_betCount == 2) {
      //Second bet
      if (!m_standingClicked && m_betCount == 2) {
        //First 2 cards dealt for second bet
        n = getRandomNum(6, 8, false, false); //Between 12 - 16
      } else {
        n = getRandomNum(10, 13, false, false);
      }
    }

    card = getCard(n);
    cardInfo = getCard(n);
    card = cardInfo[0];
    n = cardInfo[1];
    cardName = card + "_" + m_suit;
    //Ad card to array, then check to see if duplictate elements
    //exist, if so, call the dealCard function again and remove from array
    m_dealerCardArr.push(cardName);
    for (i = 0; i < m_dealerCardArr.length; i++) {
      if (cardName == m_dealerCardArr[i]) {
        count++;
        if (count == 2) {
          //Then duplicate found
          console.log("already dealt = " + cardName + " - " + m_dealerCardArr);
          m_dealerCardArr.splice(m_dealerCardArr.indexOf(cardName), 1);
          if (m_standCount > 0) {
            m_standCount--;
          }
          console.log("already dealt = " + cardName + " - " + m_dealerCardArr);
          dealCard("dealer");
          return;
        }
      }
    }
    //Check in playerCard array also, to see if this card exists
    for (i = 0; i < m_playerCardArr.length; i++) {
      if (cardName == m_playerCardArr[i]) {
        m_playerCardArr.splice(m_playerCardArr.indexOf(cardName), 1);
        if (m_standCount > 0) {
          m_standCount--;
        }
        dealCard("dealer");
        return;
      }
    }

    /*if(n > 10){
			n = 10;
		}*/
    m_dealerScore += n;
    card = PIXI.Sprite.fromImage(
      clientlibUrl + "img/cards/" + cardName + ".png"
    );
    cardBack = new PIXI.Sprite(mloader.resources.cardBack.texture);
    card.anchor.set(0.5, 0.5);
    cardBack.anchor.set(0.5, 0.5);
    card.scale.x = card.scale.y = m_objScale;
    card.endWidth = card.width;
    cardBack.scale.x = cardBack.scale.y = m_objScale;
    card.alpha = 0;
    card.width = 0.1;
    cardEndWidth = card.width;
    card.alpha = 0;
    card.width = 0.1;
    cardContainer.cardGroup = "dealer";
    cardContainer.addChild(card);
    cardContainer.addChild(cardBack);
    cardContainer.pivot.set(cardContainer.width / 2, cardContainer.height / 2);
    cardContainer.x = m_cardStartX;
    cardContainer.y = 250;
    cardContainer.filters = [shadow];
    m_cardsDealtArr.push(cardContainer);
    m_gameContainer.addChild(cardContainer);
    if (!m_standingClicked && m_dealerCardArr.length == 2) {
      cardContainer.name = "cardToFlip";
      cardContainer.endX = m_dealerCardX += m_updateCardX;

      var t = TweenMax.to(cardContainer, 1.3, { x: m_dealerCardX + 70 });
    } else {
      TweenMax.to(cardContainer, 0.9, {
        x: m_dealerCardX,
        onComplete: function () {
          TweenMax.to(cardBack, 0.3, {
            width: 0,
            onComplete: function () {
              TweenMax.set(cardBack, { alpha: 0 });
              TweenMax.set(card, { alpha: 1 });
              TweenMax.to(card, 0.3, { width: card.endWidth });
              updateScore("dealer");
            },
          });
        },
      });

      m_dealerCardX += 21;
    }
  };

  var getPlayerCard = function (player) {
    var cardContainer = new PIXI.Container();
    var cardName;
    var card = "";
    var _player = player;
    var count = 0;
    var cardBack;
    var n = 0;
    var shadow = shadowFilter();
    var stand = m_btnArray[0];
    var hit = m_btnArray[1];

    if (m_betCount < 2) {
      //first bet
      if (m_cardsDealtArr.length < 5) {
        n = getRandomNum(2, 8, false, false);
        console.log(n + m_playerScore);
        if (n + m_playerScore == 11 || n + m_playerScore == 21) {
          n += getRandomNum(1, 5, false, false);
          if (n > 13) {
            n = getRandomNum(10, 13, false, false);
          }
          console.log(n + m_playerScore);
        }
      } else {
        n = getRandomNum(10, 13, false, false);
      }
    }

    if (m_betCount == 2) {
      //second bet
      if (m_cardsDealtArr.length < 4) {
        n = getRandomNum(8, 13, false, false);
      } else {
        n = 21 - m_playerScore;
        if (n > 13) {
          n = getRandomNum(10, 13, false, false);
        }
      }
    }
    card = getCard(n);
    cardInfo = getCard(n);
    card = cardInfo[0];
    n = cardInfo[1];
    cardName = card + "_" + m_suit;
    m_playerCardArr.push(cardName);
    for (i = 0; i < m_playerCardArr.length; i++) {
      if (cardName == m_playerCardArr[i]) {
        count++;
        if (count == 2) {
          m_playerCardArr.splice(m_playerCardArr.indexOf(cardName), 1);
          dealCard("player");
          return;
        }
      }
    }

    for (i = 0; i < m_dealerCardArr.length; i++) {
      if (cardName == m_dealerCardArr[i]) {
        m_playerCardArr.splice(m_playerCardArr.indexOf(cardName), 1);
        dealCard("player");
        return;
      }
    }
    // console.log(n)
    /*if(n > 10){
			n = 10;
		   }*/
    m_playerScore += n;
    card = PIXI.Sprite.fromImage(
      clientlibUrl + "img/cards/" + cardName + ".png"
    );
    cardBack = new PIXI.Sprite(mloader.resources.cardBack.texture);
    card.anchor.set(0.5, 0.5);
    cardBack.anchor.set(0.5, 0.5);
    card.scale.x = card.scale.y = m_objScale;
    card.endWidth = card.width;
    cardBack.scale.x = cardBack.scale.y = m_objScale;
    card.alpha = 0;
    card.width = 0.1;
    cardContainer.addChild(card);
    cardContainer.addChild(cardBack);
    cardContainer.pivot.set(cardContainer.width / 2, cardContainer.height / 2);
    cardContainer.x = m_cardStartX;
    cardContainer.y = 420;
    cardContainer.filters = [shadow];
    m_gameContainer.addChild(cardContainer);
    m_cardsDealtArr.push(cardContainer);

    TweenMax.to(cardContainer, 0.9, {
      x: m_playerCardX,
      onComplete: function () {
        updateScore("player");
        TweenMax.to(cardBack, 0.3, {
          width: 0,
          onComplete: function () {
            TweenMax.set(cardBack, { alpha: 0 });
            TweenMax.set(card, { alpha: 1 });
            TweenMax.to(card, 0.3, { width: card.endWidth });
          },
        });

        if (m_playerCardArr.length == 2) {
          TweenMax.delayedCall(0.3, function () {
            btnAnim();
            btnActive(stand, false);
            btnActive(hit, false);
          });
          m_gameStarted = true;
        }
      },
    });
    m_playerCardX += 21;
  };

  var getCard = function (num) {
    var card,
      n = num;
    if (n == 1) {
      card = "ace";
      n = 1;
    } else if (n == 11) {
      card = "j";
      n = 10; //amount of points
    } else if (n == 12) {
      card = "q";
      n = 10; //amount of points
    } else if (n == 13) {
      card = "j";
      n = 10; //amount of points
    } else {
      for (var i = 0; i < cardStringArray.length; i++) {
        card = cardStringArray[n - 2];
      }
    }
    return [card, n];
  };

  var shadowFilter = function () {
    var shadow = new PIXI.filters.DropShadowFilter();
    shadow.color = 0x0000;
    shadow.distance = 5;
    //shadow.alpha 	= 0.8;
    shadow.angle = 70;
    shadow.blur = 10;
    return shadow;
  };

  var gotoURL = function () {
    if (gameSettings.clickThroughURL !== "") {
      window.location = gameSettings.clickThroughURL;
    } else {
      console.log("gameSettings.clickThroughURL");
    }
  };

  var playersDisplay = function () {
    var starY = 40;
    for (i = 0; i < 2; i++) {
      var amountContainer = new PIXI.Container();

      if (i == 0) {
        m_dealerTxt = new PIXI.Text("Dealer: " + m_dealerScore, {
          font: "bold 19px Arial",
          fill: 0x000000,
          align: "center",
        });
        m_dealerTxt.anchor.set(0.5, 0.5);
        m_dealerTxt.x = 40; //star.width / 2 - 5;
        m_dealerTxt.y = 70;
        amountContainer.addChild(m_dealerTxt);
      } else {
        m_playerTxt = new PIXI.Text("You: " + m_playerScore, {
          font: "bold 18px Arial",
          fill: 0x000000,
          align: "center",
        });
        m_playerTxt.anchor.set(0.5, 0.5);
        m_playerTxt.x = 40; //star.width / 2 - 5;
        m_playerTxt.y = 70;
        amountContainer.addChild(m_playerTxt);
      }
      //amountContainer.addChild(txt);
      amountContainer.y = starY;
      starY += 170;
      amountContainer.x = 200;
      m_gameContainer.addChild(amountContainer);
    }
  };

  var buildWinMsg = function () {
    var f = m_fontObj;
    var topPadding = 40;
    var centerNum;
    var firstTxt = new PIXI.Text(
      gameSettings.youWon + "\n" + gameSettings.signUp + "\n",
      {
        font: f.winTxtS,
        dropShadow: f.ds,
        dropShadowColor: f.dsColor,
        dropShadowDistance: f.dsDistance,
        fill: f.fill,
        align: f.align,
      }
    );
    var SecondTxt = new PIXI.Text(gameSettings.toReceive, {
      font: f.winTxtS,
      dropShadow: f.ds,
      dropShadowColor: f.dsColor,
      dropShadowDistance: f.dsDistance,
      fill: f.fill,
      align: f.align,
    });
    var thirdTxt = new PIXI.Text(gameSettings.bonus, {
      font: f.winTxtL,
      dropShadow: f.ds,
      dropShadowColor: f.dsColor,
      dropShadowDistance: f.dsDistance,
      fill: f.fill,
      align: f.align,
    });
    // var fourthTxt = new PIXI.Text( gameSettings.welcome, { font: f.small, fill: f.fill, align: f.align });
    m_winMsg.addChild(m_cta);
    // m_winMsg.addChild(fourthTxt);
    m_winMsg.addChild(thirdTxt);
    m_winMsg.addChild(SecondTxt);
    m_winMsg.addChild(firstTxt);
    m_winMsg.pivot.set(m_winMsg.width / 2, m_winMsg.height / 2); //only has width after children added
    m_winMsg.x = m_msgContainer.width / 2; //Centre win message to the reelContainer
    m_winMsg.y = m_winMsgY;
    m_winMsg.alpha = 0;
    m_winMsg.visible = false;
    centerNum = m_winMsg.width / 2;

    firstTxt.anchor.set(0.5, 0.5);
    firstTxt.x = centerNum;
    firstTxt.y = topPadding;

    SecondTxt.anchor.set(0.5, 0.5);
    topPadding += 35;
    SecondTxt.x = centerNum;
    SecondTxt.y = topPadding;

    thirdTxt.anchor.set(0.5, 0.5);
    topPadding += 40;
    thirdTxt.y = topPadding;
    thirdTxt.x = centerNum;

    topPadding += 65;
    m_cta.anchor.set(0.5, 0.5);
    m_cta.x = centerNum;
    m_cta.y = topPadding;
    m_msgContainer.addChild(m_winMsg);
  };

  var firstDeal = function () {
    TweenMax.to(m_gameContainer, 1, {
      alpha: 1,
      onComplete: function () {
        dealCard("dealer");
        dealCard("player");
        TweenMax.delayedCall(1.5, dealCard, ["player"]);
        TweenMax.delayedCall(1.5, dealCard, ["dealer"]);
      },
    });
  };

  var addListeners = function () {
    var stand = m_btnArray[0];
    var hit = m_btnArray[1];

    m_msgContainer.interactive = true;
    m_msgContainer.buttonMode = true;
    m_msgContainer.touchstart = function (touchData) {
      if (!m_betMade) {
        makeBet();
      }
    };
    m_msgContainer.click = function (mouseData) {
      if (!m_betMade) {
        makeBet();
      }
    };
    stand.buttonMode = true;
    stand.click = function (mouseData) {
      if (m_betMade && !m_standingClicked && !m_hitClicked) {
        m_standingClicked = true;
        standCards();
      }
    };

    stand.touchstart = function (touchData) {
      if (m_betMade && !m_standingClicked && !m_hitClicked) {
        m_standingClicked = true;
        standCards();
      }
    };

    hit.buttonMode = true;
    hit.click = function (mouseData) {
      if (m_betMade && !m_hitClicked && !m_standingClicked) {
        m_hitClicked = true;
        hitCards();
      }
    };

    hit.touchstart = function (touchData) {
      if (m_betMade && !m_hitClicked && !m_standingClicked) {
        m_hitClicked = true;
        hitCards();
      }
    };

    m_clickThrough.addEventListener("click", gotoURL);
    m_clickThrough.addEventListener("touchstart", gotoURL);
  };
  var btnActive = function (c, removeFilter) {
    var container = c;
    if (removeFilter == undefined) {
      container.filters = null;
    } else {
      container.interactive = true;
      container.buttonMode = true;
    }
  };
  var btnInActive = function (c, addFilter) {
    var container = c;
    //addFilter = true;
    if (addFilter == undefined) {
      var greyFilter = new PIXI.filters.GrayFilter();
      container.filters = [greyFilter];
    }
    container.interactive = false;
    container.buttonMode = false;
    stopTweens(m_tweenArray);
  };
  var makeBet = function () {
    m_betCount++;

    m_msgtxt.x = m_msgtxtX;
    m_msgtxt.y = m_msgtxtY;

    btnInActive(m_msgContainer, false);
    if (m_betCount < 2) {
      m_betMade = true;

      if (m_bets == 0) {
        m_bets = getRandomNum(1, 2, false, false);
      }
      if (m_bets == 1) {
        m_msgtxt.text =
          gameSettings.youHave +
          " \n" +
          gameSettings.onehundred +
          " \n" +
          gameSettings.remaining;
        btnInActive(m_chipArray[0]);
        m_bets = 2;
      } else {
        m_msgtxt.text =
          gameSettings.youHave +
          " \n" +
          gameSettings.fifty +
          " \n" +
          gameSettings.remaining;
        btnInActive(m_chipArray[1]);
        m_bets = 1;
      }
    } else if (m_betCount == 2) {
      m_betMade = true;
      //TweenMax.delayedCall(4, function() {  TweenMax.delayedCall(0.5, btnAnim); });
      btnInActive(m_chipArray[0]);
      btnInActive(m_chipArray[1]);
      m_msgtxt.y = m_msgtxtY;
      m_msgtxt.text =
        gameSettings.youHave +
        " \n" +
        gameSettings.zero +
        " \n" +
        gameSettings.remaining;
      resetCards();
    }
    TweenMax.delayedCall(1, msgTween, ["out"]);
  };

  var resetCards = function () {
    var card,
      duration = 1.5;
    for (var i = 0; i < m_cardsDealtArr.length; i++) {
      card = m_cardsDealtArr[i];
      //console.log(renderer.height /2);
      //
      if (card.y > 350) {
        //console.log(card.y);
        duration = 2.3;
      } else {
        duration = 1.2;
      }
      //
      TweenMax.to(card, duration, {
        y: -200,
        onComplete: function () {
          //console.log(i,m_cardsDealtArr.length)
          if (i == m_cardsDealtArr.length) {
            resetVars();
            //TweenMax.delayedCall(.7, firstDeal);
          }
        },
      });
    }
  };

  var resetVars = function () {
    var stand = m_btnArray[0];
    var hit = m_btnArray[1];
    m_dealerCardArr = [];
    m_playerCardArr = [];
    m_cardsDealtArr = [];
    m_playerScore = 0;
    m_dealerScore = 0;
    m_playerCardX = m_cardX;
    m_dealerCardX = m_cardX;
    m_standingClicked = false;
    m_hitClicked = false;
    m_gameStarted = false;
    m_standCount = 0;
    // stopVar = 0;
    updateScore("dealer");
    updateScore("player");
    removeContainers(m_gameContainer);
    btnInActive(stand, false);
    btnInActive(hit, false);
  };

  var standCards = function () {
    var cardContainer, current, duration;
    for (var i = m_gameContainer.children.length - 1; i >= 0; i--) {
      if (m_gameContainer.children[i].name == "cardToFlip") {
        cardContainer = m_gameContainer.children[i];
        flipDealerCards(cardContainer);
      }
    }
    (current = 1.3), (duration = 1.3);
    var t = TweenMax.delayedCall(current, dealCard, ["dealer"]);
    m_standArr.push(t);
    current += duration;
    var t1 = TweenMax.delayedCall(current, dealCard, ["dealer"]);
    m_standArr.push(t1);
    current += duration;
    var t2 = TweenMax.delayedCall(current, dealCard, ["dealer"]);
    m_standArr.push(t2);
    stopTweens(m_tweenArray);
    updateScore("dealer");
  };

  var flipDealerCards = function (c) {
    var cardContainer = c;
    var card = cardContainer.getChildAt(0);
    TweenMax.to(cardContainer, 0.3, { x: cardContainer.endX - 17 });
    TweenMax.to(cardContainer.getChildAt(1), 0.3, {
      width: 0,
      onComplete: function () {
        TweenMax.set(cardContainer.getChildAt(1), { alpha: 0 });
        TweenMax.set(cardContainer.getChildAt(0), { alpha: 1 });
        TweenMax.to(card, 0.3, { width: card.endWidth });
      },
    });
  };
  var hitCards = function () {
    dealCard("player");
    stopTweens(m_tweenArray);
  };
  var btnAnim = function () {
    pulse(m_btnArray[0]);
    pulse(m_btnArray[1]);
  };

  var stopTweens = function (arr) {
    a = arr;
    for (var i = 0; i < a.length; i++) {
      a[i].pause(0);
    }
  };

  var updateScore = function (player) {
    if (player == "player") {
      m_playerTxt.text = "You " + m_playerScore;
    } else {
      m_dealerTxt.text = "Dealer " + m_dealerScore;
      checkScore(player);
    }

    if (m_gameStarted) {
      checkScore(player);
    }
  };

  var checkScore = function (player) {
    // console.log(m_betCount);
    if (player == "player") {
      if (m_playerScore < 21) {
        btnAnim();
        m_hitClicked = false;
        m_standingClicked = false;
      } else if (m_playerScore > 21) {
        //Busted
        dealerWins("busted");
      } else {
        playerWins();
      }
    } else if (player == "dealer") {
      if (m_dealerScore == 21) {
        stopTweens(m_standArr);
        dealerWins("blackjack");
      } else if (m_dealerScore >= 22) {
        stopTweens(m_standArr);
        playerWins();
      } else if (
        m_betCount == 1 &&
        m_dealerScore > m_playerScore &&
        m_dealerScore >= 17
      ) {
        stopTweens(m_standArr);
        dealerWins("blackjack");
      }
    }
  };

  var playerWins = function () {
    //console.log("dealerWins");
    m_winMsg.visible = true;
    m_winMsg.alpha = 1;
    m_msgtxt.alpha = 0;
    m_chipArray[0].alpha = 0;
    m_chipArray[1].alpha = 0;
    TweenMax.delayedCall(2, function () {
      msgTween("in");
      TweenMax.to(m_gameContainer, 0.3, { alpha: 0 });
      TweenMax.set(m_clickThrough, { display: "block" });
    });
  };

  var removeContainers = function (c) {
    var m_gameContainer = c;
    for (var i = m_gameContainer.children.length - 1; i >= 0; i--) {
      if (m_gameContainer.children[i].cardGroup == "dealer") {
        m_gameContainer.removeChild(m_gameContainer.children[i]);
      }
    }
  };

  var dealerWins = function (e) {
    var f = m_fontObj;
    m_betMade = false;
    m_msgtxt.y = 20;

    m_msgtxt.style = {
      font: f.clickFont,
      fill: f.fill,
      align: f.align,
      lineHeight: f.lineH,
      wordWrap: f.ww,
      padding: f.padding,
    };
    if (e == "busted") {
      m_msgtxt.text =
        gameSettings.badLuck +
        " \n" +
        gameSettings.youBusted +
        " \n" +
        gameSettings.click +
        " \n" +
        gameSettings.AnotherBet;
    } else {
      m_msgtxt.text =
        gameSettings.badLuck +
        " \n" +
        gameSettings.dealerWins +
        " \n" +
        gameSettings.click +
        " \n" +
        gameSettings.AnotherBet;
    }

    if (m_bets == 1) {
      //Then m_chipArray[1] is inActive so...
      pulse(m_chipArray[0]);
    } else {
      //Then m_chipArray[0] is inActive so...
      pulse(m_chipArray[1]);
    }
    btnActive(m_msgContainer, false);
    msgTween("in");
  };
  var msgTween = function (e) {
    if (e == "in") {
      TweenMax.delayedCall(0.8, function () {
        TweenMax.to(m_msgContainer, 0.8, { x: centerStage });
      });
    } else {
      TweenMax.to(m_msgContainer, 0.9, { x: 680, onComplete: firstDeal });
    }
  };
  var createChips = function () {
    chipX = 160;
    for (i = 0; i < 2; i++) {
      var chipContainer = new PIXI.Container();
      var chipGlow = new PIXI.Sprite(mloader.resources.chipGlow.texture);
      var chip;
      chipGlow.alpha = 0;

      if (i == 0) {
        chip = new PIXI.Sprite(mloader.resources.chip_50.texture);
      } else {
        chip = new PIXI.Sprite(mloader.resources.chip_100.texture);
      }

      chip.anchor.set(0.5, 0.5);
      chipGlow.anchor.set(0.5, 0.5);
      chipContainer.addChild(chipGlow);
      chipContainer.addChild(chip);
      chipContainer.x = chipX;
      chipX += 100;
      chipContainer.y = 250;
      m_msgContainer.addChild(chipContainer);
      m_chipArray.push(chipContainer);
    }
  };

  var addText = function () {
    var f = m_fontObj;
    var topPadding = 0;
    var centerNum;
    m_msgtxt = new PIXI.Text(
      gameSettings.click +
        "\n" +
        gameSettings.bet +
        "\n" +
        gameSettings.getStarted,
      {
        font: f.clickFont,
        fill: f.fill,
        align: "center",
      }
    );
    m_msgtxt.anchor.set(0.5, 0);
    m_msgtxt.x = m_msgtxtX;
    m_msgtxt.y = m_msgtxtY;
    m_msgContainer.addChild(m_msgtxt);
  };

  var getRandomNum = function (min, max, hasDecimal, belowOne) {
    if (hasDecimal) {
      return Math.floor(Math.random() * 100) / 100 + 1;
    } else if (belowOne) {
      return Math.random() * (max - min) + min;
    } else {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  };

  var startGame = function () {
    if (m_betCount != 2) {
      btnActive(m_chipArray[0]);
      btnActive(m_chipArray[1]);
      pulse(m_chipArray[0]);
      pulse(m_chipArray[1]);
      addListeners();
    } else if (m_betCount == 2) {
      m_betMade = true;
    }
  };
  var pulse = function (c) {
    var t, t1;
    var glow = c.getChildAt(0);
    t = TweenMax.to(glow, 1, {
      alpha: 1,
      onComplete: function () {
        t.reverse();
        t1 = TweenMax.delayedCall(1, function () {
          t.play();
        });
        m_tweenArray.push(t1);
      },
    });
    m_tweenArray.push(t);
  };
  function animate() {
    // console.log(m_betCount)
    requestAnimationFrame(animate);
    m_renderer.render(m_stage);
  }
};
