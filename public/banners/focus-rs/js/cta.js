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

var playCTA = function () {
	var frameWidth = 18,
		numCols = 9;
	var steppedEase = new SteppedEase(numCols);
	TweenLite.to(arrow_btn, 1, {
		backgroundPosition: '-' + (frameWidth * numCols) + 'px 3px',
		ease: steppedEase
	});
	arrow_btn.style.backgroundPosition = "0px 3px"; //reset background position
	

	findOutCTA.style.backgroundPosition = "-143px 0px"; //reset background position

}