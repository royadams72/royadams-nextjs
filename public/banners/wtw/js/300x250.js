var firstTime = true;
var dogRunning, road1Tween, road2Tween, road3Tween, road2FadeIn, road3FadeIn, messageTween, wtwFadeIn, wtwFadeOut, t, d1, d2, p, p2, p3;
var roadSpeed = 0.65;
var adNotPanned = 0;//Y axis
var adIsPanned = -90;//Y axis
var interactedWith = false;
var interactedWith = false;
var clickThrough = document.getElementById('clickThrough');
var autoPlaying = false;
var messagesPlayed = false;
var resetTriggered = false;
var mouseOver = false;
var endFramePlayed = false;
var tl = {
	adTime: 0
};
var adLength = 15;
var main_tl;

var startDogAnim = function () {
	//console.log("dogAnim");
	var frameWidth = 92,
		numCols = 8;
	var steppedEase = new SteppedEase(numCols);
	dogRunning = TweenLite.fromTo(dogSprite, 0.5, {
		backgroundPosition: '0px 0px'
	}, {
		backgroundPosition: '-' + (frameWidth * numCols) + 'px 0px',
		ease: steppedEase,
		onComplete: startDogAnim
	});
}




var playEndFrame = function () {
	endFramePlayed = true;
	endFrameTween.play();
	findOutTween.play();
	arrowTween.play();
};

var startAd = function () {
	setUpTweens();
	startDogAnim();
	clickThrough.addEventListener('mouseover', mouseOverAd);
	clickThrough.addEventListener('mouseout', mouseOutAd);
	clickThrough.addEventListener('click', bgExitHandler);
};