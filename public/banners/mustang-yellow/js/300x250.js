var tl = {
	adTime: 0
};
var tlTween;
var adLength = 9;
var loopCount = 0;
var loopNumber = 3;
var count = 0;

var looperHandler = function () {
	loopCount++
	if (loopCount != loopNumber) {
		tl.adTime = 0;
		tlTween.pause(0);
		startTweens();
		scriptSprite.style.backgroundPosition = "0px 0px";
	}
}

var playCTA = function () {
	var frameWidth = 18,
		numCols = 9;
	var steppedEase = new SteppedEase(numCols);
	TweenLite.to(arrow_btn, 1, {
		backgroundPosition: '-' + (frameWidth * numCols) + 'px 3px',
		ease: steppedEase
	});
	arrow_btn.style.backgroundPosition = "0px 3px"; //reset background position
	

	findOutCTA.style.backgroundPosition = "-143.9px 0px"; //reset background position

}
var startAd = function () {
	clickThrough.addEventListener('mouseover', mouseOverAd);
	clickThrough.addEventListener('mouseout', mouseOutAd);
	clickThrough.addEventListener('click', bgExitHandler);
	initBG();
	startTweens()
};

var bgExitHandler = function () {
	Enabler.exit('Clickthrough');
};

var mouseOverAd = function () {
	//	console.log(this);
	playCTA();
};
var mouseOutAd = function () {
	findOutCTA.style.backgroundPosition = "0px 0px"; //reset background position
};


var timelineHandler = function () {
	var t = Math.round(tl.adTime * 10) / 10; //format number to one decimal place
	if (t >= adLength) {
		//	console.log("replayAd");
		fadeAssets();
		console.log(t);
	}
}
var startTweens = function () {
	//start timer that will fire functions
	tlTween = TweenLite.to(tl, adLength, {
		adTime: "+=" + adLength,
		onUpdate: timelineHandler,
		ease: Linear.easeNone
	})
}

var fadeAssets = function () {
	console.log(loopCount);
	if (loopCount != loopNumber - 1) {
		TweenLite.to(carModelContainer, 0.5, {
			alpha: 0
		});
		TweenLite.to(scriptSprite, 0.5, {
			alpha: 0
		});

		TweenLite.to(bg, 0.5, {
			alpha: 0,
			onComplete: replayAd
		});
	}
}

var replayAd = function () {
	loopCount++;
	if (loopCount != loopNumber) {
		tl.adTime = 0;
		tlTween.pause(0);
		startTweens();
		initBG();
	}
}