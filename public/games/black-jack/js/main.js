//Global assets
var deskTop = function () {
  //loading images
  var fontObj = {},
    dTopAssetsLoaded = false,
    stage,
    requestId,
    suit,
    stringArray,
    cardX,
    dealerCardX,
    playerCardX,
    msgBG,
    playerTxt,
    dealerTxt,
    playerScore,
    msgtxt,
    dealerScore,
    bets,
    gameStarted,
    cardStartX,
    updateCardX,
    gameSettings = window.gameSettings,
    mloader;

  var initDeskTop = function () {
    if (dTopAssetsLoaded) return; // <-- hard guard

    mloader = new PIXI.loaders.Loader();
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

    mloader.add("ctaImg", clientlibUrl + "img/cta.png");
    mloader.add("gameBG", clientlibUrl + "img/backGround.jpg");
    mloader.add("msgBG", clientlibUrl + "img/msgBG.png");
    mloader.add("star", clientlibUrl + "img/star.png");

    //listen for progress
    dTopAssetsLoaded = true;
    const loadingTxt = document.createElement("div");
    TweenMax.set(loadingTxt, {
      display: "block",
      width: "100%",
      // marginTop: 100, // number, not string
      height: "100%",
      fontSize: 30,
      color: "#fff", // white text
      textAlign: "center",
    });

    sContainer.appendChild(loadingTxt);
    mloader.on("progress", function (e) {
      var percnt = Math.round(e.progress);
      loadingTxt.innerHTML = percnt + "% of game loaded";
      percnt >= 100 && TweenMax.set(loadingTxt, { display: "none" });
      console.log(percnt);
    });
    // load resources
    mloader
      .load(function (loader, resources) {
        stage = new PIXI.Container();
        stage.interactive = true;
        clickThrough = document.createElement("button");
        clickThrough.setAttribute("id", "spin");
        TweenMax.set(clickThrough, {
          display: "none",
          width: "100%",
          position: "absolute",
          height: "100%",
          opacity: 0,
          cursor: "pointer",
        });

        sContainer.appendChild(clickThrough);

        renderer = new PIXI.autoDetectRenderer(800, 500, {
          transparent: true,
          view: document.getElementById("game"),
        });

        document.getElementById("sContainer").appendChild(renderer.view);
        dealerCardArr = [];
        playerCardArr = [];
        cardsDealtArr = [];
        chipArray = [];
        btnArray = [];
        tweenArray = [];
        standArr = [];
        playerScore = 0;
        dealerScore = 0;
        cardX = 610;
        bets = 0;
        betCount = 0;
        playerCardX = cardX;
        dealerCardX = cardX;
        cardStartX = 1000;
        updateCardX = 17;
        betMade = false;
        standingClicked = false;
        hitClicked = false;
        gameStarted = false;
        standCount = 0;
        setSprites();
      })
      .on("complete", function (e) {
        setup();
      });
  };

  initDeskTop();

  var setSprites = function () {
    //sets up sprites and containers

    gameContainer = new PIXI.Container();
    msgContainer = new PIXI.Container();
    winMsg = new PIXI.Container();
    msgBG = new PIXI.Sprite(mloader.resources.msgBG.texture);
    cta = new PIXI.Sprite(mloader.resources.ctaImg.texture);
    gameBG = new PIXI.Sprite(mloader.resources.gameBG.texture);
    logo = new PIXI.Sprite(mloader.resources.logo.texture);
    star = new PIXI.Sprite(mloader.resources.star.texture);
    standImg = new PIXI.Sprite(mloader.resources.standImg.texture);
    hitImg = new PIXI.Sprite(mloader.resources.hitImg.texture);
    console.log(msgContainer);

    stage.addChild(gameBG);
    stage.addChild(gameContainer);
    logo.anchor.set(0.5, 0);
    logo.scale.x = logo.scale.y = 0.5;
    stage.addChild(logo);
    stage.addChild(winMsg);
  };

  function setup() {
    editSprites();
    buildHUD();
    btnInActive(chipArray[0]);
    btnInActive(chipArray[1]);
    firstDeal();
    buildWinMsg();
    //addListeners();
    if (!requestId) {
      requestId = requestAnimationFrame(animate);
    }
  }

  var editSprites = function () {
    /*****EDIT PROPERTIES FOR THIS GAME**********************************************************/
    var shadow = shadowFilter();
    gameBG.width = 800;
    logo.x = 260; //renderer.width/2;
    logo.y = 10;
    msgContainer.addChild(msgBG);
    msgContainer.pivot.set(msgContainer.width / 2, msgContainer.height / 2);
    msgContainer.x = renderer.width / 2;
    msgContainer.y = 430;
    msgContainer.filters = [shadow];
    msgtxtX = 220; //Centre win message to the reelContainer
    msgtxtY = 40;
    winMsgY = 90;
    //Object for font
    fontObj = {
      ds: true,
      dsColor: "#262626",
      dsDistance: 3,
      fill: 0xffffff,
      align: "left",
      clickFont: "italic 22px Arial",
      tryAgainFont: "italic 23px Arial",
      small: "italic 24px Arial",
      winTxtL: "italic 40px Arial",
      winTxtS: "italic 35px Arial",
    };
  };

  var buildHUD = function () {
    console.log("gameSettings", window.gameSettings);

    actionBtns();
    playersDisplay();
    createChips();
    gameContainer.addChild(msgContainer);
    addText();
  };

  var actionBtns = function () {
    //Sets up stand and hit buttons
    var container;
    var containerY = 130;
    standImg.scale.x = standImg.scale.y = 0.5;
    hitImg.scale.x = hitImg.scale.y = 0.5;
    for (i = 0; i < 2; i++) {
      var btnGlow = new PIXI.Sprite(mloader.resources.btnGlow.texture);
      var shadow = shadowFilter();
      container = new PIXI.Container();
      container.filters = [shadow];
      btnGlow.scale.x = btnGlow.scale.y = 0.52;
      btnGlow.x = -18;
      btnGlow.y = -14;
      btnGlow.alpha = 0;
      container.addChild(btnGlow);
      if (i == 0) {
        container.addChild(standImg);
      } else {
        container.addChild(hitImg);
      }
      container.y = containerY;
      containerY += 130;
      container.x = 125;
      gameContainer.addChild(container);
      btnArray.push(container);
    }
  };

  var dealCard = function (player) {
    //Generate the suit and call function to generate card
    console.log("dealCard", player);

    var n = getRandomNum(1, 4, false, false);
    suit = "";
    if (n == 1) {
      suit = "clubs";
    } else if (n == 2) {
      suit = "spades";
    } else if (n == 3) {
      suit = "hearts";
    } else if (n == 4) {
      suit = "diamonds";
    }
    if (player == "player") {
      getPlayerCard(player);
    } else {
      getDealerCard(player);
    }
  };

  var getDealerCard = function (player) {
    var isInUse = "";
    var cardContainer = new PIXI.Container();
    var cardName;
    var card = "";
    var _player = player;
    var count = 0;
    var cardBack;
    var cardEndWidth;
    var objScale = 0.6;
    var n = 0,
      a = 0,
      b = 0;
    var shadow = shadowFilter();
    var firstCardNum = 0;

    if (betCount < 2) {
      //first bet
      if (!standingClicked && betCount == 0) {
        //first 2 cards dealt
        n = getRandomNum(2, 5, false, false);
        firstCardNum++;
      } else if (standCount < 2) {
        //When stand button clicked, update standCount on each iteration
        n = getRandomNum(2, 7, false, false);
        if (n + dealerScore == 21) {
          n = getRandomNum(2, 7, false, false);
        }
        standCount++;
      } else {
        //on final iteration
        n = 21 - dealerScore;
        standCount++;
      }
    }

    if (betCount == 2) {
      //Second bet
      if (!standingClicked && betCount == 2) {
        //First 2 cards dealt for second bet
        n = getRandomNum(6, 8, false, false); //Between 12 - 16
      } else {
        n = getRandomNum(10, 13, false, false);
      }
    }

    cardInfo = getCard(n);
    card = cardInfo[0];
    n = cardInfo[1];
    cardName = card + "_" + suit;
    //Ad card to array, then check to see if duplictate elements
    //exist, if so, call the dealCard function again and remove from array
    dealerCardArr.push(cardName);
    for (i = 0; i < dealerCardArr.length; i++) {
      if (cardName == dealerCardArr[i]) {
        count++;
        if (count == 2) {
          //Then duplicate found
          console.log("already dealt = " + cardName + " - " + dealerCardArr);
          dealerCardArr.splice(dealerCardArr.indexOf(cardName), 1);
          if (standCount > 0) {
            standCount--;
          }
          console.log("already dealt = " + cardName + " - " + dealerCardArr);
          dealCard("dealer");
          return;
        }
      }
    }
    //Check in playerCard array also, to see if this card exists
    for (i = 0; i < playerCardArr.length; i++) {
      if (cardName == playerCardArr[i]) {
        dealerCardArr.splice(dealerCardArr.indexOf(cardName), 1);
        if (standCount > 0) {
          standCount--;
        }
        dealCard("dealer");
        return;
      }
    }

    /*if(n > 10){
			n = 10;
		}*/

    dealerScore += n;
    //console.log(dealerScore)
    card = new PIXI.Sprite(mloader.resources[cardName].texture);
    cardBack = new PIXI.Sprite(mloader.resources.cardBack.texture);
    card.anchor.set(0.5, 0.5);
    cardBack.anchor.set(0.5, 0.5);
    card.scale.x = card.scale.y = objScale;
    cardBack.scale.x = cardBack.scale.y = objScale;
    cardEndWidth = card.width;
    card.alpha = 0;
    card.width = 0.1;
    cardContainer.cardGroup = "dealer";
    cardContainer.addChild(card);
    cardContainer.addChild(cardBack);
    cardContainer.pivot.set(cardContainer.width / 2, cardContainer.height / 2);
    cardContainer.x = cardStartX;
    cardContainer.y = 190;
    cardContainer.filters = [shadow];
    cardsDealtArr.push(cardContainer);
    gameContainer.addChild(cardContainer);

    if (!standingClicked && dealerCardArr.length == 2) {
      cardContainer.name = "cardToFlip";
      cardContainer.endX = dealerCardX += updateCardX;
      console.log(cardContainer.endX);
      var t = TweenMax.to(cardContainer, 1.3, { x: dealerCardX + 90 });
    } else {
      TweenMax.to(cardContainer, 0.9, {
        x: dealerCardX,
        onComplete: function () {
          //console.log(dealerCardX)
          TweenMax.to(cardBack, 0.3, {
            width: 0,
            onComplete: function () {
              TweenMax.set(cardBack, { alpha: 0 });
              TweenMax.set(card, { alpha: 1 });
              TweenMax.to(card, 0.3, { width: cardEndWidth });
              updateScore("dealer");
            },
          });
        },
      });
      dealerCardX += updateCardX;
    }
  };

  var getPlayerCard = function (player) {
    var cardContainer = new PIXI.Container();
    var cardName;
    var card = "";
    var isInUse = "";
    var _player = player;
    var count = 0;
    var cardBack;
    var n = 0;
    var objScale = 0.6;
    var cardEndWidth;
    var shadow = shadowFilter();

    if (betCount < 2) {
      //first bet
      if (cardsDealtArr.length < 5) {
        n = getRandomNum(2, 8, false, false);
        console.log(n + playerScore);
        if (n + playerScore == 11 || n + playerScore == 21) {
          n += getRandomNum(1, 5, false, false);
          if (n > 13) {
            n = getRandomNum(10, 13, false, false);
          }
          console.log(n + playerScore);
        }
      } else {
        n = getRandomNum(10, 13, false, false);
      }
    }
    if (betCount == 2) {
      //second bet
      if (cardsDealtArr.length < 4) {
        n = getRandomNum(8, 13, false, false);
      } else {
        n = 21 - playerScore;
        if (n > 13) {
          n = getRandomNum(10, 13, false, false);
        }
      }
    }
    cardInfo = getCard(n);
    //console.log(cardInfo[0]);
    card = cardInfo[0];
    n = cardInfo[1];
    cardName = card + "_" + suit;
    playerCardArr.push(cardName);

    for (i = 0; i < playerCardArr.length; i++) {
      if (cardName == playerCardArr[i]) {
        count++;
        if (count == 2) {
          //console.log(cardName+" already dealt by player");
          playerCardArr.splice(playerCardArr.indexOf(cardName), 1);
          dealCard("player");
          return;
        }
      }
    }

    for (i = 0; i < dealerCardArr.length; i++) {
      if (cardName == dealerCardArr[i]) {
        playerCardArr.splice(playerCardArr.indexOf(cardName), 1);
        dealCard("player");
        return;
      }
    }
    /*if(n > 10){
			n = 10;
		   }*/
    playerScore += n;
    //console.log(n)
    card = new PIXI.Sprite(mloader.resources[cardName].texture);
    cardBack = new PIXI.Sprite(mloader.resources.cardBack.texture);
    card.anchor.set(0.5, 0.5);
    cardBack.anchor.set(0.5, 0.5);
    card.scale.x = card.scale.y = objScale;
    cardEndWidth = card.width;
    cardBack.scale.x = cardBack.scale.y = objScale;
    card.alpha = 0;
    card.width = 0.1;
    cardContainer.addChild(card);
    cardContainer.addChild(cardBack);
    cardContainer.pivot.set(cardContainer.width / 2, cardContainer.height / 2);
    cardContainer.x = cardStartX;
    cardContainer.y = 360;
    cardContainer.filters = [shadow];
    gameContainer.addChild(cardContainer);
    cardsDealtArr.push(cardContainer);
    TweenMax.to(cardContainer, 0.9, {
      x: playerCardX,
      onComplete: function () {
        updateScore("player");
        TweenMax.to(cardBack, 0.3, {
          width: 0,
          onComplete: function () {
            TweenMax.set(cardBack, { alpha: 0 });
            TweenMax.set(card, { alpha: 1 });
            TweenMax.to(card, 0.3, { width: cardEndWidth });
          },
        });

        if (playerCardArr.length == 2) {
          TweenMax.delayedCall(0.3, startGame);
          gameStarted = true;
        }
      },
    });
    playerCardX += updateCardX;
  };

  var getCard = function (num) {
    var n = num;
    var card;

    if (n === 1) {
      card = "ace"; // if you want blackjack-logic later, you can treat Ace as 11/1 elsewhere
      n = 1;
    } else if (n === 11) {
      card = "j";
      n = 10;
    } else if (n === 12) {
      card = "q";
      n = 10;
    } else if (n === 13) {
      card = "k"; // <- fix
      n = 10;
    } else {
      // 2..10
      var cardStringArray = [
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
      card = cardStringArray[n - 2];
    }

    return [card, n];
  };

  var shadowFilter = function () {
    var shadow = new PIXI.filters.DropShadowFilter();
    shadow.color = 0x000000;
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
    var starY = 90;
    for (i = 0; i < 2; i++) {
      var amountContainer = new PIXI.Container();
      var star = new PIXI.Sprite(mloader.resources.star.texture);
      var shadow = shadowFilter();
      star.scale.x = star.scale.y = 0.45;
      amountContainer.addChild(star);
      amountContainer.filters = [shadow];
      if (i == 0) {
        var txt = new PIXI.Text("Dealer", {
          font: "bold 16px Arial",
          fill: 0x000000,
          align: "center",
        });
        txt.anchor.set(0.5, 0.5);
        txt.x = star.width / 2 - 7; //Centre win message to the reelContainer
        txt.y = 45;
        dealerTxt = new PIXI.Text(dealerScore, {
          font: "bold 28px Arial",
          fill: 0x000000,
          align: "center",
        });
        dealerTxt.anchor.set(0.5, 0.5);
        dealerTxt.x = star.width / 2 - 5;
        dealerTxt.y = 70;
        amountContainer.addChild(dealerTxt);
      } else {
        //text for dealer
        var txt = new PIXI.Text("You", {
          font: "bold 18px Arial",
          fill: 0x000000,
          align: "center",
        });
        txt.anchor.set(0.5, 0.5);
        txt.x = star.width / 2 - 5; //Centre win message to the reelContainer
        txt.y = 45;
        playerTxt = new PIXI.Text(playerScore, {
          font: "bold 28px Arial",
          fill: 0x000000,
          align: "center",
        });
        playerTxt.anchor.set(0.5, 0.5);
        playerTxt.x = star.width / 2 - 5;
        playerTxt.y = 70;
        amountContainer.addChild(playerTxt);
      }
      amountContainer.addChild(txt);
      amountContainer.y = starY;
      starY += 140;
      amountContainer.x = 300;
      gameContainer.addChild(amountContainer);
    }
  };

  var buildWinMsg = function () {
    var f = fontObj;
    var topPadding = 190;
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

    winMsg.addChild(cta);
    // winMsg.addChild(fourthTxt);
    winMsg.addChild(thirdTxt);
    winMsg.addChild(SecondTxt);
    winMsg.addChild(firstTxt);
    winMsg.pivot.set(winMsg.width / 2, winMsg.height / 2); //only has width after children added
    winMsg.x = renderer.width / 2; //Centre win message to the reelContainer
    winMsg.y = winMsgY;
    winMsg.alpha = 0;

    centerNum = winMsg.width / 2;

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

    /* fourthTxt.anchor.set(0.5, 0.5);
         topPadding += 35;
         fourthTxt.x = centerNum;
         fourthTxt.y = topPadding;*/

    topPadding += 65;
    cta.anchor.set(0.5, 0.5);
    cta.x = centerNum;
    cta.y = topPadding;
    // winMsg.scale.x = winMsg.scale.y = winMsgScale;
    stage.addChild(winMsg);
  };
  var firstDeal = function () {
    TweenMax.delayedCall(0.32, dealCard, ["dealer"]);
    dealCard("player");
    TweenMax.delayedCall(1.5, dealCard, ["player"]);
    TweenMax.delayedCall(1.7, dealCard, ["dealer"]);
  };

  var addListeners = function () {
    stand = btnArray[0];
    hit = btnArray[1];

    msgContainer.interactive = true;
    msgContainer.buttonMode = true;

    var onMakeBet = function () {
      console.log("onMakebet");

      if (!betMade) makeBet();
    };

    msgContainer.on("click", onMakeBet);

    // STAND
    stand.interactive = true;
    stand.buttonMode = true;
    stand.on("click", function () {
      if (betMade && !standingClicked && !hitClicked) {
        standingClicked = true;
        standCards();
      }
    });

    // HIT
    hit.interactive = true;
    hit.buttonMode = true;
    hit.on("click", function () {
      if (betMade && !hitClicked && !standingClicked) {
        hitClicked = true;
        hitCards();
      }
    });

    clickThrough.addEventListener("click", gotoURL);
    clickThrough.addEventListener("touchstart", gotoURL);
  };

  var btnActive = function (c, removeFilter) {
    var container = c;
    //removeFilter = true;
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
    stopTweens(tweenArray);
  };
  var makeBet = function () {
    betCount++;
    msgtxt.x = msgtxtX;
    msgtxt.y = msgtxtY;

    btnInActive(msgContainer, false);
    if (betCount < 2) {
      betMade = true;
      TweenMax.delayedCall(0.5, btnAnim);

      if (bets == 0) {
        bets = getRandomNum(1, 2, false, false);
      }
      if (bets == 1) {
        msgtxt.text = "You have £100 remaining";
        btnInActive(chipArray[0]);
        bets = 2;
      } else {
        msgtxt.text = "You have £50 remaining";
        btnInActive(chipArray[1]);
        bets = 1;
      }
    } else if (betCount == 2) {
      //betMade = true;
      TweenMax.delayedCall(4, function () {
        TweenMax.delayedCall(0.5, btnAnim);
      });
      btnInActive(chipArray[0]);
      btnInActive(chipArray[1]);
      msgtxt.y = msgtxtY;
      msgtxt.text = "You have £0 remaining";
      resetCards();
    }
  };

  // var resetCards = function () {
  //   var card,
  //     duration = 1.5;
  //   for (var i = 0; i < cardsDealtArr.length; i++) {
  //     card = cardsDealtArr[i];
  //     if (card.y > renderer.height / 2) {
  //       duration = 2;
  //     } else {
  //       duration = 1.2;
  //     }

  //     TweenMax.to(card, duration, {
  //       y: -200,
  //       onComplete: function () {
  //         if (i == cardsDealtArr.length) {
  //           resetVars();
  //           TweenMax.delayedCall(0.7, firstDeal);
  //         }
  //       },
  //     });
  //   }
  // };

  var resetCards = function () {
    var completionCount = 0;
    var total = cardsDealtArr.length;

    for (var i = 0; i < total; i++) {
      var card = cardsDealtArr[i];
      var duration = card.y > renderer.height / 2 ? 2 : 1.2;

      TweenMax.to(card, duration, {
        y: -200,
        onComplete: function () {
          completionCount++;
          if (completionCount === total) {
            resetVars();
            TweenMax.delayedCall(0.7, firstDeal);
          }
        },
      });
    }
  };

  var resetVars = function () {
    dealerCardArr = [];
    playerCardArr = [];
    cardsDealtArr = [];
    playerScore = 0;
    dealerScore = 0;
    playerCardX = cardX;
    dealerCardX = cardX;
    standingClicked = false;
    hitClicked = false;
    gameStarted = false;
    standCount = 0;
    // stopVar = 0;
    updateScore("dealer");
    updateScore("player");
    removeContainers(gameContainer);
  };

  var standCards = function () {
    var cardContainer, current, duration;
    for (var i = gameContainer.children.length - 1; i >= 0; i--) {
      if (gameContainer.children[i].name == "cardToFlip") {
        cardContainer = gameContainer.children[i];
        flipDealerCards(cardContainer);
      }
    }
    (current = 1.3), (duration = 1.3);
    var t = TweenMax.delayedCall(current, dealCard, ["dealer"]);
    standArr.push(t);
    current += duration;
    var t1 = TweenMax.delayedCall(current, dealCard, ["dealer"]);
    standArr.push(t1);
    current += duration;
    var t2 = TweenMax.delayedCall(current, dealCard, ["dealer"]);
    standArr.push(t2);
    stopTweens(tweenArray);
    updateScore("dealer");
  };

  var flipDealerCards = function (c) {
    var cardContainer = c;
    var face = cardContainer.getChildAt(0);
    var back = cardContainer.getChildAt(1);
    var targetWidth = face.texture.width * face.scale.x;

    TweenMax.to(cardContainer, 0.3, { x: cardContainer.endX - 17 });
    TweenMax.to(back, 0.3, {
      width: 0,
      onComplete: function () {
        TweenMax.set(back, { alpha: 0 });
        TweenMax.set(face, { alpha: 1 });
        TweenMax.to(face, 0.3, { width: targetWidth });
      },
    });
  };

  var hitCards = function () {
    dealCard("player");
    stopTweens(tweenArray);
  };

  var btnAnim = function () {
    pulse(btnArray[0]);
    pulse(btnArray[1]);
  };

  var stopTweens = function (arr) {
    var a = arr;
    for (var i = 0; i < a.length; i++) {
      a[i].pause(0);
    }
  };

  var updateScore = function (player) {
    if (player == "player") {
      playerTxt.text = playerScore;
    } else {
      dealerTxt.text = dealerScore;
      checkScore(player);
    }

    if (gameStarted) {
      checkScore(player);
    }
  };

  var checkScore = function (player) {
    if (player == "player") {
      if (playerScore < 21) {
        btnAnim();
        hitClicked = false;
        standingClicked = false;
      } else if (playerScore > 21) {
        //Busted
        playerBusted();
      } else {
        playerWins();
      }
    } else if (player == "dealer") {
      if (dealerScore == 21) {
        dealerWins();
      } else if (dealerScore >= 22) {
        stopTweens(standArr);
        playerWins();
      } else if (
        betCount == 1 &&
        dealerScore > playerScore &&
        dealerScore >= 17
      ) {
        stopTweens(standArr);
        dealerWins();
      }
    }
  };

  var playerWins = function () {
    TweenMax.delayedCall(2, function () {
      TweenMax.to(logo, 0.3, {
        x: renderer.width / 2,
        y: logo.y + 60,
      });
      TweenMax.to(winMsg, 0.3, {
        alpha: 1,
      });
      TweenMax.to(gameContainer, 0.3, {
        alpha: 0,
      });
      TweenMax.set(clickThrough, {
        display: "block",
      });
    });
  };

  var removeContainers = function (c) {
    var gameContainer = c;
    for (var i = gameContainer.children.length - 1; i >= 0; i--) {
      if (gameContainer.children[i].cardGroup == "dealer") {
        gameContainer.removeChild(gameContainer.children[i]);
      }
    }
  };

  var dealerWins = function () {
    betMade = false;
    msgtxt.y = 20;
    msgtxt.x += 10;
    msgtxt.style = {
      font: "italic 26px Arial",
      fill: 0xffffff,
      align: "left",
    };
    msgtxt.text = "Bad luck Dealer wins \nClick to make another bet. ";
    if (bets == 1) {
      //Then chipArray[1] is inActive so...
      pulse(chipArray[0]);
    } else {
      //Then chipArray[0] is inActive so...
      pulse(chipArray[1]);
    }
    btnActive(msgContainer, false);
  };

  var playerBusted = function () {
    betMade = false;
    msgtxt.y = 20;
    msgtxt.x += 20;
    msgtxt.style = {
      font: "italic 26px Arial",
      fill: 0xffffff,
      align: "left",
    };
    msgtxt.text = "Bad luck you have busted \nClick to make another bet. ";
    if (bets == 1) {
      //Then chipArray[1] is inActive so...
      pulse(chipArray[0]);
    } else {
      //Then chipArray[0] is inActive so...
      pulse(chipArray[1]);
    }
    btnActive(msgContainer, false);
  };

  var createChips = function () {
    chipX = 60;
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
      chipContainer.y = msgContainer.height / 2;
      msgContainer.addChild(chipContainer);
      chipArray.push(chipContainer);
    }
  };

  var addText = function () {
    var f = fontObj;
    var topPadding = 0;
    var centerNum;
    msgtxt = new PIXI.Text(
      gameSettings.click +
        " " +
        gameSettings.bet +
        " " +
        gameSettings.getStarted,
      {
        font: f.small,
        fill: f.fill,
        align: f.align,
      }
    );
    msgtxt.x = msgtxtX;
    msgtxt.y = msgtxtY;
    msgContainer.addChild(msgtxt);
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
        tweenArray.push(t1);
      },
    });
    tweenArray.push(t);
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
    if (betCount != 2) {
      btnActive(chipArray[0]);
      btnActive(chipArray[1]);
      pulse(chipArray[0]);
      pulse(chipArray[1]);
      addListeners();
    } else if (betCount == 2) {
      betMade = true;
    }
  };

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(stage);
  }
};
