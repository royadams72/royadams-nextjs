//Tweens that are added to timeline are created here

var setUpTweens = function () {
	start_main_tl();//This is main timer that will use tweens below - see timeline.js
	//Create road class - roadClass.js
    p = new roadLoop(road1, road1Tween);
	
	road2FadeIn = TweenLite.to(road2, 1, {
		alpha: 1,
		paused: true,
		onComplete: function () {
		}
	});

	road3FadeIn = TweenLite.to(road3, 1, {
		alpha: 1,
		paused: true,
		onComplete: function () {
		road2.style.opacity = 0;
		}
	});

	endFrameTween = TweenLite.to(endFrame, 1, {
		alpha: 1,
		paused: true,
		onComplete: function () {
		dogRunning.pause(0, true);
		main_tl.pause(0, true);
		p.tweenName.pause(0);
		p2.tweenName.pause(0);
		p3.tweenName.pause(0);
	
		}
	});
	
arrowTween = TweenLite.to(arrow, 0.5 ,{x: 26, paused: true})
	///MESSAGES/TEXT TO DISPLAY

	findOutTween = TweenLite.to(findOutCTA, 0.2, {
		alpha: 1,
		paused: true
	});
	//Container for messages
	messageTween = TweenLite.to(messages, 0.5, {
		alpha: 0,
		paused: true
	});
	//whatever the weather text
	wtwFadeIn = TweenLite.to(wtw, 0.7, {
		alpha: 1,
		paused: true
	});
	wtwFadeOut = TweenLite.to(wtw, 0.5, {
		alpha: 0,
		paused: true
	});
	//running on all fours
	allFoursFadeIn = TweenLite.to(allFours, 0.7, {
		alpha: 1,
		paused: true, onComplete: handleReplay
	});
	allFoursFadeOut = TweenLite.to(allFours, 0.5, {
		alpha: 0,
		paused: true
	});

};