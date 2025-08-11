firstTime = true;
var pauseGame;

var stopExpandedAd = function(){
   resetGame();
   startAnimations();
  }
var startExpandedAd = function(){
  adIsExpanding = true;
  TweenLite.killTweensOf(changeCar);
  TweenLite.killTweensOf(changeScript);
  TweenLite.killTweensOf(playEndFrame);
  TweenLite.killTweensOf(startAnimations);
  playEndFrame();
  initAd();//Play ad
}

function initAd(){
	pauseGame = false;
	if(firstTime){
		loadExpandedAssets();//In polite load js
		firstTime=false;
		}
	
	TweenLite.to(ex_ad_shield,0.8 , {alpha:0, ease:Linear.easeNone, onComplete: function(){ex_playScript();}});
	TweenLite.to(close_btn,1 , {alpha:1, ease:Linear.easeNone});
	endScreen.style.opacity = 0;
	ex_car_orange.style.cssText= "-ms-transform: scale(0.9,0.9); -webkit-transform: scale(0.9,0.9); transform: scale(0.9,0.9); opacity:0;";
	ex_car_yellow.style.cssText= "-ms-transform: scale(0.9,0.9); -webkit-transform: scale(0.9,0.9); transform: scale(0.9,0.9); opacity:0;";
	ex_car_red.style.cssText= "-ms-transform: scale(0.9,0.9); -webkit-transform: scale(0.9,0.9); transform: scale(0.9,0.9); opacity:0;";
	tooltip.style.opacity = 1;
	startGame();
	
	}

 var ex_playScript = function () {
	 scriptSprite.style.backgroundPosition ="0px 0px";
    if(lap==1){
		timeDisplayNum.style.cssText= "color:#ed1c24!important;";
		document.getElementById("timeToBeatNum").style.cssText= "color:#ed1c24!important;";
		document.getElementById("secs1").style.cssText= "color:#ed1c24!important;";
		document.getElementById("secs2").style.cssText= "color:#ed1c24!important;";
		tTxt.style.cssText= "color:#1d4485!important;";
		document.getElementById("yt").style.cssText= "color:#1d4485!important;";
		TweenLite.to(scriptSprite, .6, {alpha: 0});
	}
	
	var t =	TweenLite.to(scriptSprite, .8, {alpha: 1});
	var t2 = TweenLite.to(ex_carModelContainer, .8, {alpha: 1})
	ex_carModel.className = "mustang_blue";
	ex_carModelContainer.style.cssText = "left: 300px; top: 30px";
	var frameWidth = 218,
		numCols = 17;
	var steppedEase = new SteppedEase(numCols);
	var scriptAnim = TweenLite.to(scriptSprite, 1.8, { backgroundPosition: '-' + (frameWidth * numCols) + 'px 0px', ease: steppedEase });
		}
 
var fadeOutToolTip = function(){
	TweenLite.to(tooltip, 1.5, {alpha: 0});
}

var bgExitHandler = function () {
	Enabler.exit('Clickthrough');
};

var resetGame = function(){
	pauseGame = true;// if statement in common.js starts and stops the requestAnimationFrame();
	gameStarted = false;
	gameOver = false;
	scriptSprite.style.backgroundPosition ="0px 0px";
	
	//var resetVars = function(){
		segments      = [];                      // array of road segments
		playerX       = 0;                       // player x offset from center of road (-1 to 1 to stay independent of roadWidth)
		playerZ       = null;                    // player relative z distance from camera (computed)
		fogDensity    = 1;                       // exponential fog density
		position      = 0;                       // current camera Z position (add playerZ to get player's absolute Z position)
		speed         = 0;                       // current speed
		currentLapTime = 0;
		currentTime = 0;
		currentTimeRounded = 0;
		lap = 0;
	   
		
		
//	}
	//Delayed call, calls the above function (errors were caused if not)
	//TweenLite.delayedCall(0.5, resetVars);
	//resetVars();
}

var ex_addEventListeners = function(){
    close_btn.addEventListener('click', closeExpandedHandler, false);
	clickThrough.addEventListener("mouseover", ex_mouseOverAd);
	clickThrough.addEventListener("mouseout", ex_mouseOutAd);
	clickThrough.addEventListener("click", expandedExitHandler);
	}
var ex_bgExitHandler = function () {
	Enabler.exit('Clickthrough');
};

var ex_mouseOverAd = function () {
	playCTA();
};
var ex_mouseOutAd = function () {
	
};
var playCTA = function () {
	    TweenLite.to(ex_ctaArrow, 0.25, { x:10, onComplete:function(){
		TweenLite.set(ex_ctaArrow, { x:-10 });
		TweenLite.to(ex_ctaArrow, 0.25, { x:0 });
	} });
}
