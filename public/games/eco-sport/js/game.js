/*jslint white: true, bitwise: true, closure: true, continue: true, debug: true, eqeq: true, plusplus: true, sloppy: true, sub: true, todo: true, vars: true*/
var renderer, stage, carImg, car, requestId, carSpeed, carEasing, hub1, hub2, gameScreen, spawnCounter, wheelArray, bgArray, bg, carHit, score, oldSpriteId, amountOfwheels, endScreen, tweenArray, mTxtStartPos, mTxtEndPos, wheelSuccess, WheelHit, gameStarted, gameLength; //DECLARE GLOBALS HERE

var gameTimer = {
	gTime: 0
};

var stage = new PIXI.Container();

    loadingTxt = document.createElement("div");
    loadingTxt.setAttribute("id", "loadingTxt");
    TweenLite.set(loadingTxt, {position:"absolute", width:200, height:350, zIndex:1000, top:"160px", left:"50%", marginLeft:"-100px", textAlign:"center", color:"#00457f"})//
    loadingTxtImg = document.createElement("img");
    loadingTxtImg.setAttribute("src", "img/script_blue.png");
    TweenLite.set(loadingTxtImg, {position:"absolute", width:"110px", height:"43px", top:"110px", left:"50%", marginLeft:"-55px", textAlign:"center"})//
    console.log(loadingTxtImg)
    expand_content_dc.appendChild(loadingTxt);   
    expand_content_dc.appendChild(loadingTxtImg);

var initGame = function(){
    PIXI.loader
    // add resources
    .add('car', 'img/car.png')
    .add('hub', 'img/hub.png')
    .add('wheel', 'img/wheel.png')
    .add('skyScape', 'img/skyScape.png')
    .add('bg', 'img/bg.png')
    .add('carHit', 'img/carHit.png')
    //listen for progress
    .on('progress', function(e){
	var percnt = Math.round(e.progress);
	loadingTxt.innerHTML  = percnt + "% of game loaded";
    console.log(percnt);
    })
    // load resources
    .load(function (loader, resources) {
        renderer = PIXI.autoDetectRenderer(598, 348,{ backgroundColor : 0xffffff});
        document.getElementById("game_container").appendChild(renderer.view);
       
        car = new PIXI.Container();
        hub1 = new PIXI.Sprite(resources.hub.texture, true);
        hub2 = new PIXI.Sprite(resources.hub.texture, true);
        carImg = new PIXI.Sprite(resources.car.texture, true);
        bg = new PIXI.Sprite(resources.bg.texture, true);
        carHit = new PIXI.Sprite(resources.carHit.texture, true);
    })
	 .on('complete', function(e){
		//initPixi() will only fire when assetsLoaded set to true
        assetsLoaded = true;
        if(document.getElementById("loadingTxt")){
            expand_content_dc.removeChild(document.getElementById("loadingTxt"));
            expand_content_dc.removeChild(loadingTxtImg);
		   }
		//If user clicked the expand button call initPixi()   
            initVars();
            buildGameScreens();
            buildCar();
          //  playScript();
            wheelPool();
             if (!requestId) {
              requestId = requestAnimationFrame( animate );  
            }
            addEventListeners();
		    //startTimer();
            showInfoScreen();
	  });
};

initGame();

var buildGameScreens = function(){
    buildInfoScreen();
    buildMainScreen();
    
}

var showInfoScreen = function(){
    if(!gameStarted){//then hide replay and find out more CTA's
        TweenLite.set(findOutCTA,{visibility:"hidden", display: "none"});
        TweenLite.set(replay,{visibility:"hidden", display: "none"});
        TweenLite.set(startGame,{visibility:"visible", display: "block"});
         TweenLite.set(toolTip,{visibility:"visible", display: "block"});
    }else{
       TweenLite.set(findOutCTA,{visibility:"visible", display: "block"});
       TweenLite.set(replay,{visibility:"visible", display: "block"});
       TweenLite.set(startGame,{visibility:"hidden", display: "none"});
       TweenLite.set(toolTip,{visibility:"hidden", display: "none"}); 
     }
    
       TweenLite.to(infoScreenDiv,0.5,{alpha:1, onStart:function(){}});
       TweenLite.delayedCall(1, function(){initAssets();}); 
}; 
var startTimer = function(){ 
    gameTime = TweenLite.to(gameTimer, gameLength, { gTime: "+=" + gameLength, onUpdate: gameTimeHandler, ease: Linear.easeNone});
    
};
var gameTimeHandler = function () {
	var t = Math.round(gameTimer.gTime * 10) / 10; //format number to one decimal place
    var tMinus =  Math.round(gameLength - t);//Countdown for display
    upTimeDisp(tMinus);
	
   if(tMinus<=0){
      gameTime.pause(0);
      TweenLite.delayedCall(2, endGame);
    }

}

var upTimeDisp = function(newNum){
    
   if(oldNum != newNum){
       console.log(newNum);
       oldNum = newNum;
       cTimer.innerHTML = newNum;  
   }
    if(newNum == 10 ){
      TweenLite.to([cTimer,timerTxt], 0.2, {color:"#ec9a9e", ease:Linear.easeIn, onComplete:function(){
         TweenLite.to([cTimer, timerTxt], 0.2, {color:"#e40000", ease:Linear.easeOut}); 
    }})
 }
};

var endGame = function(){
    //fade out game screen
    TweenLite.to([scriptSprite, gameScreen, cTimer, timerTxt], 0.5, {alpha:0, onComplete: function(){
        gameStarted = false;
        TweenLite.set(scriptSprite, {backgroundPosition:"0px 0px"});
        for(var i=0; i < wheelArray.length; i++){
            wheel = wheelArray[i];
            wheel.y = wheel.startY;
            initCarPos();
            generateScore();
            TweenLite.set([cTimer, timerTxt], {color:"#1d4485"});
            }
        }
    });
    showInfoScreen();
}


var initVars = function(){
    carSpeed = 5;
    spawnCounterAmount = 100;
    spawnCounter = spawnCounterAmount;
    wheelArray = [];
    bgArray = [];
    tweenArray = [];
    score = 0;
    amountOfwheels = 2;//amount of wheels on stage at once
    WheelHit = 0;
    wheelSuccess = 0;
    gameLength = 45;
    oldNum = gameLength;//for game display countdown
    gameStarted = false;
    mTxtStartPos = "top:40px; left: 285px; width: 300px; height: 84px; opacity: 0;";//start position of model name
    mTxtEndPos = {cWidth:"100px", cHeight: "26px",topPos:"42px", leftPos:"390px"};//end position of model name
};

var buildInfoScreen = function(){
    infoScreenDiv = document.createElement("div");
    infoScreenDiv.setAttribute("id", "infoScreenDiv");
    TweenLite.set(infoScreenDiv, {position:"absolute", width:renderer.width, height:renderer.height, top:"0px", left:"0px", color:"#00457f", opacity:0, backgroundColor:"#fff", overflow: "hidden"})//
    
    var findOutCTA = document.createElement("div");
	findOutCTA.setAttribute("id", "findOutCTA");
	infoScreenDiv.appendChild(findOutCTA);
    
    var replay = document.createElement("div");
	replay.setAttribute("id", "replay");
	infoScreenDiv.appendChild(replay);
    
    var startGame = document.createElement("div");
	startGame.setAttribute("id", "startGame");
	infoScreenDiv.appendChild(startGame);
    
    var toolTip = document.createElement("div");
	toolTip.setAttribute("id", "toolTip");
	infoScreenDiv.appendChild(toolTip);
    
    var scoreDisplay = document.createElement("div");
	scoreDisplay.setAttribute("id", "scoreDisplay");
	infoScreenDiv.appendChild(scoreDisplay);
     
    
    var carModelContainer = document.createElement("div");
	carModelContainer.setAttribute("id", "carModelContainer");
	infoScreenDiv.appendChild(carModelContainer);
	
	var carModel2 = document.createElement("div");
	carModel2.setAttribute("id", "carModel2");
	carModelContainer.appendChild(carModel2);
	
	var carModel1 = document.createElement("div");
	carModel1.setAttribute("id", "carModel1");
	carModelContainer.appendChild(carModel1);
	
    var endScreenCar = document.createElement("div");
	endScreenCar.setAttribute("id", "endScreenCar");
	infoScreenDiv.appendChild(endScreenCar);
    
	var scriptSprite2 = document.createElement("div");
	scriptSprite2.setAttribute("id", "scriptSprite2");
	infoScreenDiv.appendChild(scriptSprite2);
		
	var bgContainer = document.createElement("div");
	bgContainer.setAttribute("id", "bgContainer");
	infoScreenDiv.appendChild(bgContainer);
	
	var shield = document.createElement("div");
	shield.setAttribute("id", "shield");
	bgContainer.appendChild(shield);
	
	/*var shard1 = document.createElement("div");
	shard1.setAttribute("id", "shard1");
	shield.appendChild(shard1);*/
	
	var shard2 = document.createElement("div");
	shard2.setAttribute("id", "shard2");
	shield.appendChild(shard2);
	
	var shard2_shield = document.createElement("div");
	shard2_shield.setAttribute("id", "shard2_shield");
	shield.appendChild(shard2_shield);
	
	var shard3 = document.createElement("div");
	shard3.setAttribute("id", "shard3");
	shield.appendChild(shard3);
    
    expand_content_dc.appendChild(infoScreenDiv);
    
};
//CTA and Replay buttons
var playCTA = function () {
	var frameWidth = 341, numCols = 14;
	var steppedEase = new SteppedEase(numCols);
	ctaAnim = TweenLite.to(findOutCTA, 0.35, {backgroundPosition: '-' + (frameWidth * numCols) + 'px 0px', ease: steppedEase});
	}
var ctaMouseOut = function () {
    ctaAnim.pause(0);
	findOutCTA.style.backgroundPosition = "0px 0px"; //reset background position
};
var playReplay = function () {
	var frameWidth = 341, numCols = 14;
	var steppedEase = new SteppedEase(numCols);
	replayAnim = TweenLite.to(replay, 0.35, {backgroundPosition: '-' + (frameWidth * numCols) + 'px 0px', ease: steppedEase});
	}
var replayMouseOut = function () {
    replayAnim.pause(0);
	replay.style.backgroundPosition = "0px 0px"; //reset background position
};

var playStartGame = function () {
	var frameWidth = 341, numCols = 14;
	var steppedEase = new SteppedEase(numCols);
	startAnim = TweenLite.to(startGame, 0.35, {backgroundPosition: '-' + (frameWidth * numCols) + 'px 0px', ease: steppedEase});
	}
var startGameMouseOut = function () {
    startAnim.pause(0);
	startGame.style.backgroundPosition = "0px 0px"; //reset background position
};
/**** End buttons ************************/

 var initAssets = function(){
	//make sure all tweens are reset
	for(var i = 0; i < tweenArray.length; i++){
	var tween = tweenArray[i];
	tween.pause(0);
	}
	//empty arrays if they hold any elements
    tweenArray = [];
    shardArray = [];
	carModelContainer.style.cssText = mTxtStartPos;
	carModel1.style.opacity = 1;
	//TweenLite.delayedCall(adLength, looperHandler);
	startTweens();
	}
var startTweens = function () {
	fadeInCar = new TweenLite.to(endScreenCar, 1, {alpha: 1});
	fadeInModelName = new TweenLite.to(carModelContainer, 2, {alpha: 1,  onComplete:function(){revealBG();}});
    if(score > 0){
       showScore();
    }
	tweenArray.push(fadeInCar, fadeInModelName);
}

var  showScore = function() {
   scoreTween = new TweenLite.to(scoreDisplay, 1, {alpha: 1});
    tweenArray.push(scoreTween);
}
 
var revealBG = function(){
	playScript2();
	//Model name animation
	animateModelName = new TweenLite.to(carModelContainer, 2, {width: mTxtEndPos.cWidth, height:mTxtEndPos.cHeight ,top: mTxtEndPos.topPos, left:mTxtEndPos.leftPos, ease: Power2.easeOut });
	
	fadeOutM1 = new TweenLite.to(carModel1, 2, {alpha:0, ease:Linear.easeNone});
	animateShield = new TweenLite.to(shield, 1.5,{rotation:180, ease: Power1.easeOut});
//	animateShard1 = new TweenLite.to(shard1, 2,{rotation:-70});
	animateShard2 = new TweenLite.to(shard2,1.9, {rotation:49, bottom:"-30px"});
	animateShard2Shield = new TweenLite.to(shard2_shield,1.3, {width:200, height:200, top: 70 });
	animateShard3 = new TweenLite.to(shard3,1.4, {rotation:-90, delay:0.5, ease: Power1.easeOut});
	//place in its own separate array
	shardArray.push(animateShield, animateShard2, animateShard3, animateShard2Shield);//
	tweenArray.push(animateShield, animateShard2, animateShard3, animateShard2Shield);
}

	var playScript2 = function () {
	var t =	TweenLite.to(scriptSprite2, .8, {alpha: 1})
	var frameWidth = 455, numCols = 17;
	var steppedEase = new SteppedEase(numCols);
	var scriptAnim = TweenLite.to(scriptSprite2, 1.8, {backgroundPosition: '-' + (frameWidth * numCols) + 'px 0px', ease: steppedEase});
		tweenArray.push(scriptAnim, t);	
}
var buildMainScreen = function(){
    gameScreen = new PIXI.Container();
    gameScreen.width = renderer.width;
    gameScreen.height = renderer.height;
    buildBG();
    gameScreen.alpha = 0;
    stage.addChild(gameScreen);
    var plinth = document.createElement("div");
	plinth.setAttribute("id", "plinth");
	game_container.appendChild(plinth);
        
    var timerContainer = document.createElement("div");
	timerContainer.setAttribute("id", "timerContainer");
	game_container.appendChild(timerContainer);
    
    var timerTxt = document.createElement("div");
	timerTxt.setAttribute("id", "timerTxt");
	timerContainer.appendChild(timerTxt);
    
    var cTimer = document.createElement("div");
	cTimer.setAttribute("id", "cTimer");
	timerContainer.appendChild(cTimer);
    cTimer.innerHTML = gameLength;
    timerTxt.innerHTML = "Time left: ";
    
  
};

var buildBG = function(){
    var i;
    var graphics = new PIXI.Graphics();
        bg.anchor.x = bg.anchor.y = 0.5;
        bg.scale.x = bg.scale.y = 0.3;
        bg.x = 90;
        bg.y = 70;
        gameScreen.addChild(bg);
        for(i = 0; i < 2; i++){
                var s = new PIXI.extras.TilingSprite(PIXI.loader.resources.skyScape.texture, 610, 200);
                var nextX = i*s.width;
                s.name = "s";
                s.x = nextX;
                s.startX = s.x;
                s.endX = s.startX - s.width;
                s.y = 100;
                gameScreen.addChild(s);
                bgArray.push(s);
          }

    graphics.beginFill(0xFFFFFF);
    // draw a rectangle
    graphics.drawRect(0, 280, 650, 70);
    gameScreen.addChild(graphics);
    
};


var animateCityScape = function(){
    var tile;
    for(var i = 0; i < bgArray.length; i++){
        tile = bgArray[i];
        tile.x -= (carSpeed-3);
        if(tile.x  <= tile.endX){
            tile.x = tile.startX;
        }
    }
   bg.rotation -= 0.001;  
    
};

var buildCar =  function(){
    initCarPos();
    hub1.anchor.x =  hub2.anchor.x = 0.5;
	hub1.anchor.y = hub2.anchor.y = 0.5;
    hub2.x = 206;
    hub2.y = hub1.y = 83;
    hub1.x = 50;
  
    car.addChild(carHit);
    car.addChild(carImg);
    car.addChild(hub2);
    car.addChild(hub1);
    gameScreen.addChild(car);
    
};

var carCollide = function(){
    TweenLite.to(carImg, 0.3, {alpha:0,  ease:Linear.easeNone, onComplete:function(){
                 TweenLite.to(carImg, 0.4, {alpha:1});
        }})
    
}
var playScript = function () {
var t = new	TweenLite.to(scriptSprite, .8, { alpha: 1 });
		var frameWidth = 140, numCols = 17;
		var steppedEase = new SteppedEase(numCols);
		var scriptAnim = TweenLite.to(scriptSprite, 1.8, {backgroundPosition: '-' + (frameWidth * numCols) + 'px 0px', ease: steppedEase });
	
}
var addEventListeners = function(){
    window.addEventListener('keyup', function(event) { Key.onKeyup(event); }, false);
    window.addEventListener('keydown', function(event) { Key.onKeydown(event); }, false);
    findOutCTA.addEventListener("mouseover", playCTA);
    findOutCTA.addEventListener("mouseout", ctaMouseOut);
    replay.addEventListener("mouseover", playReplay);
    replay.addEventListener("mouseout", replayMouseOut);
    replay.addEventListener("click", playGame);
    startGame.addEventListener("mouseover", playStartGame);
    startGame.addEventListener("mouseout", startGameMouseOut);
    startGame.addEventListener("click", playGame);
};
var initCarPos = function(){
    car.x =  100;
    car.y = 230;
};

var Key = {
  _pressed: {},
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  
  isDown: function(keyCode) {
    return this._pressed[keyCode];
  },
  
  onKeydown: function(event) {
    this._pressed[event.keyCode] = true;
  },
  
  onKeyup: function(event) {
    delete this._pressed[event.keyCode];
  }
};

var getRandomInt = function (min, max, hasDecimal) {
    if(hasDecimal){
        return Math.floor(Math.random()*100)/100+1
    }else{
        return Math.floor(Math.random() * (max - min + 1)) + min;   
    }

};

var updateCarPos = function(event) {
    
 var carRightEdge = car.x+car.width;
    
  if(Key.isDown(Key.LEFT)) {
      if(car.x <= 0){
          car.x = 0;
      }else{
          car.x -= carSpeed;
      }
  }
    if(Key.isDown(Key.RIGHT)) {
        if(carRightEdge >= renderer.width){
           carRightEdge = renderer.width;
    }else{
       car.x += carSpeed;
        }
    }

};


var wheelPool = function(){
  var i;
  for(i=0; i < amountOfwheels; i++){
   // new PIXI.Sprite(PIXI.loader.resources.scorePoint.texture, true);
    var wheelContainer = new PIXI.Container();
    wheelContainer.speed = getRandomInt(2, 3, false);
    wheelContainer.active = true;
    wheelContainer.x =  getRandomInt(0, renderer.width, false);
    wheelContainer.startY = wheelContainer.y = getRandomInt(-80, -130, false);
    if(wheelContainer.x <= 0 ){
        wheelContainer.x = wheelContainer.width/2; 
    }else if(wheelContainer.x >= renderer.width ){
        wheelContainer.x = renderer.width - (wheelContainer.width/2); 
        
    }
var wheel = new PIXI.Sprite(PIXI.loader.resources.wheel.texture, true); 
    wheel.scale.y = wheel.scale. x = 0.5;
    wheel.anchor.x = 0.5;
    wheel.anchor.y = 0.5;
    wheelContainer.addChild(wheel);
    gameScreen.addChild(wheelContainer);
    wheelArray.push(wheelContainer); 
    }

};


var updateWheelPos = function(){
    var wheel;
    for(var i = 0; i < wheelArray.length; i++){
      wheel = wheelArray[i];
        if(wheel.active){
        wheel.y += wheel.speed;
        wheel.rotation += 0.05;
        if((wheel.y - wheel.height) >= renderer.height){
           wheel.y = wheel.startY;
           wheel.x =  getRandomInt(0, renderer.width, false);
           wheelSuccess++;
            //console.log("wheelSuccess= "+wheelSuccess);
            /*update var, this in use with wheelHit can be use to calc percentage
            Didn't generate this on spawn because game could end before
            wheel has been avoided or hit, so could create false score*/
        }
     }
    }
};

var checkCollision = function(){
    var wheel;
    for(var i =0; i <  wheelArray.length; i++){
         wheel = wheelArray[i];
        if (car.x < (wheel.x + wheel.width) -30 && car.x + car.width > wheel.x && car.y < (wheel.y + wheel.height)-20 && car.height + car.y > wheel.y) {
            wheel.y = wheel.startY;
            wheel.x =  getRandomInt(0, renderer.width, false);
            //score++;
            WheelHit++;
            //console.log("WheelHit= "+WheelHit);
            carCollide();
           
         }
     }
 };

var playGame = function(){

    score = 0;//tweenArray
    TweenLite.to(infoScreenDiv, 0.5, {alpha:0, onComplete: function(){
        for(var i = 0; i <tweenArray.length; i++)
           tweenArray[i].pause(0);
           console.log("playGame"); 
    }});
    TweenLite.to([cTimer, timerTxt, scriptSprite, gameScreen], 0.5, {alpha:1, onComplete: function(){
        startTimer();
        playScript();
        gameStarted = true;
        }
    });    

};
var generateScore = function(){
    var amountOfWheels = WheelHit + wheelSuccess;//All wheels used in game
    
    score = Math.floor((100/amountOfWheels)*wheelSuccess);
    if(score>70){
         scoreDisplay.innerHTML = "Well done you scored "+score+"%";
    }else{
        scoreDisplay.innerHTML = "You only scored "+score+"% have another try!"; 
    }
    
    //console.log("Percentage is "+score+"%");
}
function animate() {
    requestAnimationFrame( animate );
    if(gameStarted){
    console.log("playing")
    animateCityScape();
    updateWheelPos();
    updateCarPos();
    checkCollision();
    }
    renderer.render(stage);
}