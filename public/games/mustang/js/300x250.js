var stage;
var	spawnTime = 20;
var	spawnNow = spawnTime;
var animateLanes = true;
var mTxtStartPos = "top:24px; left: 78px; width: 156px; height: 35px; opacity: 0;";
var mTxtEndPos = {cWidth:"52px", cHeight:"12px", topPos:"22px", leftPos:"95px"};
var tweenArray = [];
var changeCarCount = 0;
var loop = 3;
var loopCount = 0;
var pausedCollapsed = false;
var carSwayTween;
var carSwayTween2;
var carSwayTween3;
var adIsExpanding = false;
var chngToYell;
var chngScript;
var pEnd;
var callChangeCar1;
var tweenArray;
var startAd = function () {
	laneOBj();
	requestAnimationFrame(looper);
	startAnimations();
}

var startAnimations = function(){
var duration = .5;
	console.log("loopCount= "+loopCount);	
	if(loopCount != 3){
			for(var i = 0; i < tweenArray.length; i++){
				tweenArray[i].pause(0);
			}
			tweenArray =[];
		if(pausedCollapsed){
			changeCarCount = 0;
			pausedCollapsed = false;
			
			if(adIsExpanding){
				duration = 0;
				adIsExpanding = false;
			}
			var t1 = TweenLite.to([car_yellow, ctaArrow_blue, cta_blue, script_white, carModel_white, car_container,script_whiteBG], duration , {alpha: 0});
			var t2 = TweenLite.to([car_red, carModelContainer, carModel_blue, ctaArrow], duration , {alpha: 1});
			script_container.style.opacity = 0;
			road.style.backgroundColor =  "#ed1c24";
			road.style.borderColor = "#00457f";
			script_white.style.backgroundPosition = "0px 0px";
			script_blue.style.backgroundPosition = "0px 0px";
			road_container.style.opacity = 0;
			msg1.style.opacity = 0;
			laneOBj();
			requestAnimationFrame(looper);
			tweenArray.push(t1, t2);
			
		}
		    
			 carModelContainer.style.cssText = mTxtStartPos;
			 var t1 =  TweenLite.to(carModelContainer, 2, {alpha: 1});
			 var t2 =  TweenLite.to(msg1, 2, {alpha: 1, onComplete: function(){frame2();}});
		     tweenArray.push(t1, t2);
		
    }
	
	 TweenLite.to(collapsedShield , 1.5, {alpha:0});
	 //console.log("loopCount= "+loopCount);	
}
var frame2 = function(){
	
	var t1 = TweenLite.to(script_blue, 1, {alpha:1});
	playScript(script_blue);
    var t2 =  TweenLite.to(carModelContainer, .8, {width: mTxtEndPos.cWidth, height: mTxtEndPos.cHeight, top: mTxtEndPos.topPos, left:mTxtEndPos.leftPos, ease: Power2.easeOut});
    var t3 =  TweenLite.to(msg1, .8, { alpha: 0, ease: Power2.easeOut, onComplete: frame3})
   tweenArray.push(t1, t2, t3);
}

var frame3 = function(){
	var t1 = TweenLite.to(road_container,1.5, {alpha:1});
	var t2 = TweenLite.to(car_container, 1.5, {alpha:1, ease:Linear.EaseNone});
	carSway();
	console.log("changeCar called");
	var t3 = TweenLite.delayedCall(4, changeCar,[car_red, car_orange]);
	 tweenArray.push(t1, t2, t3);
	}


var changeCar = function (oldCar, newCar){
	changeCarCount++;
	//
	//if(!adIsExpanding){
	if(changeCarCount == 1){
	console.log("change to orange car changeCarCount = "+changeCarCount);
	var t1 = TweenLite.to(road, .8, {backgroundColor:"#878787", borderColor: "#fb6e2d", ease: Power2.easeOut});
	var t2 = TweenLite.delayedCall(4, changeCar,[car_orange, car_yellow]);
	var t3 =TweenLite.delayedCall(4, changeScript,[script_blue, script_white, true]);
	tweenArray.push(t1, t2, t3);
	}else{
	console.log("change to yellow car");
    var t1 = TweenLite.to(road, .8, {backgroundColor:"#878787", borderColor: "#ffc314", ease: Power2.easeOut});
	var t2 = TweenLite.delayedCall(4, playEndFrame);
	tweenArray.push(t1, t2);
	//
	}
	var oldCarTween = TweenLite.to(oldCar, .8, {alpha:0, ease: Power2.easeOut});
	var newCarTween = TweenLite.to(newCar, .8, {alpha:1, ease: Power2.easeOut});
	tweenArray.push(oldCarTween, newCarTween);
}


var changeScript = function (oldScript, newScript, bg) {

			if(bg){//change from blue to white
			var t1 = TweenLite.to(script_whiteBG, .8, {alpha: 1});
			var t2 = TweenLite.to(carModel_white, .8, {alpha: 1});
			var t3 = TweenLite.to(carModel_blue, .8, {alpha: 0});
				tweenArray.push(t1, t2, t3);
			}else{
			var t1 = TweenLite.to(script_whiteBG, .8, {alpha: 0});
			var t2 = TweenLite.to(carModel_white, .8, {alpha: 0});
			var t3 =  TweenLite.to(carModel_blue, .8, {alpha: 1});
				tweenArray.push(t1, t2, t3);
			}
	
		oldScript.style.backgroundPosition = "0px 0px";
	   var t1 = TweenLite.to(oldScript, .8, {alpha: 0});
	   var t2 =	TweenLite.to(newScript, .8, {alpha: 1});
	   var frameWidth = 218, numCols = 17;
	   var steppedEase = new SteppedEase(numCols);
	   var t3 = TweenLite.to(newScript, 1.8, { backgroundPosition: '-' + (frameWidth * numCols) + 'px 0px', ease: steppedEase });
	   tweenArray.push(t1, t2, t3);
	}

var playScript = function (id) {
	var t1 = TweenLite.to(script_container, .8, {alpha: 1})
	var frameWidth = 218,
		numCols = 17;
	var steppedEase = new SteppedEase(numCols);
	var t2 = TweenLite.to(id, 1.8, { backgroundPosition: '-' + (frameWidth * numCols) + 'px 0px', ease: steppedEase });	
	tweenArray.push(t1, t2);
		}


var playEndFrame = function(){
	var duration = 1
	if(adIsExpanding){
		duration = 0;
		TweenLite.to(collapsedShield , 1, {alpha:1});
	}
	if(!adIsExpanding){
		loopCount++;
     	console.log("not expanded just looping");
		 if(loopCount<loop){
		 TweenLite.delayedCall(4, startAnimations);
		}
	}

	
	TweenLite.to(road_container,duration, {alpha:0});
	pausedCollapsed = true;
	if(carSwayTween != undefined){
	carSwayTween.pause(0);
	}
	if(carSwayTween2 != undefined){
	carSwayTween2.pause(0);
	}
	if(carSwayTween3 != undefined){
	carSwayTween3.pause(0);
    
	}
	TweenLite.to(ctaArrow, duration , {alpha: 0});
	TweenLite.to(ctaArrow_blue, duration , {alpha: 1});
	TweenLite.to(cta_blue, duration, {alpha: 1});
	msg1.style.opacity = 0;

	 //TweenLite.killTweensOf(changeCar);
	 //TweenLite.killTweensOf(changeScript);
	 //TweenLite.killTweensOf(playEndFrame);
	 //TweenLite.killTweensOf(startAnimations);
	
	}

var carSway = function(){
	var xPos = 10;
	var duration = 2;
		carSwayTween = TweenLite.to(car_container, duration, {x:xPos, ease: Power1.easeInOut, onComplete: function(){
		carSwayTween2 = TweenLite.to(car_container, duration, {x:-xPos, ease: Power1.easeInOut, onComplete: function(){
		carSwayTween3 = TweenLite.to(car_container, duration, {x:xPos, ease: Power1.easeInOut, onComplete: function(){carSwayTween.play();}
			 })//end carSwayTween3
			}
		 });//end carSwayTween2
		}
	  });//end carSwayTween
	}

var laneOBj = function(){
	var startXLeft = 42;
	var startXright = 150;
	var startY = 800;
	var duration = .3;
	var cssStr = "position: absolute; width: 5px!important; height: 550px; background-color: #fff;";
	var laneRight = document.createElement("div");
	var laneLeft = document.createElement("div");
		laneRight.style.cssText =  cssStr;
	    laneLeft.style.cssText = cssStr;
		laneLeft.style.top = startY+"px";
		laneRight.style.top = startY+"px"; 
		laneLeft.style.left = startXLeft+"px";
		laneRight.style.left = startXright+"px";
		lane_container.appendChild(laneLeft);
		lane_container.appendChild(laneRight);
	
	var removeLanes = function(){
		 lane_container.removeChild(laneLeft); 
		 lane_container.removeChild(laneRight);		   
	}
	TweenLite.to([laneLeft, laneRight], duration, {y:-900, onComplete: removeLanes});
}

var addEventListeners = function(){
	//expandAd.addEventListener('mouseover', onExpandHandler);
	//clickThrough.addEventListener('mouseout', mouseOutAd);
	//clickThrough.addEventListener('click', bgExitHandler);
	}


var spawnLanes = function(){
	if(animateLanes){
	    spawnNow--;
		//console.log(spawnNow)
		if(spawnNow==0){
			laneOBj();
			spawnNow = spawnTime;
		}
	}
}

function looper() {
	if(!pausedCollapsed){
		//console.log("looping");
	spawnLanes();
	requestId = window.requestAnimationFrame(looper);
	}
}