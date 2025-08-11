
var mouseOverAd = function () {
	if (autoPlaying || endFramePlayed) {
		playCTA();
	} else {
		TweenLite.to(ad_container, 1, {
			y: adIsPanned,
			onComplete: playMessages
		});
		findOutTween.play();
		interactedWith = true; //add has been ineteractied with, do not auto play
		mouseOver = true; //over mouse do not play loop/play end frame
	}
};
var mouseOutAd = function () {
	if (autoPlaying || endFramePlayed) {
		findOutCTA.style.backgroundPosition = "0px 0px"; //reset background position
	} else {
		stopMessages();
		findOutTween.reverse();
		TweenLite.to(ad_container, 0.4, {y: adNotPanned, ease: Linear.easeNone});
		mouseOver = false;
	}
};

var bgExitHandler = function () {
	//Enabler.exit('Clickthrough');
	//clicktag
};

function playCTA() {
	/* width of frame/div and amount of frames steps to complete
	   numCols should be minus one of total amount of columns e.g
	   if total columns = 10 then numCols = 9 */
	var frameWidth = 18,
		numCols = 9;
	var steppedEase = new SteppedEase(numCols);
	TweenLite.to(arrow_btn, 1, {
		backgroundPosition: '-' + (frameWidth * numCols) + 'px 3px',
		ease: steppedEase
	});
	
	arrow_btn.style.backgroundPosition = "0px 3px"; //reset background position

	var frameWidth2 = 114,
		numCols2 = 2;
	var steppedEase2 = new SteppedEase(numCols2);
	TweenLite.to(findOutCTA, 0.3, {
		backgroundPosition: '-' + (frameWidth2 * numCols2) + 'px 0px',
		ease: steppedEase2
	});
	findOutCTA.style.backgroundPosition = "0px 0px"; //reset background position
}



//plays when over btn
var playMessages = function () {
	messages();
	messageTween.play();
};
//plays on mouse out
var stopMessages = function () {
	messageTween.play();
	resetMessages();
};

var messages = function () {
	//Plays mesages when mouse is over ad
	wtwFadeIn.play();
	d1 = TweenLite.delayedCall(2, function () {
		wtwFadeOut.play()
	});
	d2 = TweenLite.delayedCall(2.5, function () {
		
		allFoursFadeIn.play();

	});
	
}
//resets on mouse out
var resetMessages = function () {
	messageTween.play();
	TweenLite.to(wtw,0.1,{alpha:0});
	TweenLite.to(allFours,0.1,{alpha:0});
	wtwFadeIn.pause(0, true);
	wtwFadeOut.pause(0, true);
	allFoursFadeIn.pause(0, true);
	if(d1!=undefined){
	d1.pause(0, true);
	}if(d2!=undefined){
	d2.pause(0, true);
	}
	
}