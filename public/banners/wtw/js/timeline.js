/*start_main_tl starts the timelineHandler function;*/
var start_main_tl = function () {
	//start timer that will fire functions
	main_tl = TweenLite.to(tl, adLength, {
		adTime: "+=" + adLength,
		onUpdate: timelineHandler,
		ease: Linear.easeNone
	})
}
//timelineHandler adds/removes animations over 15 seconds
var timelineHandler = function () {
	timeElapsed = Math.round(tl.adTime * 10) / 10; //format number to one decimal place
	if (autoPlaying) {
		findOutTween.play();
	}
	//If auto playing ad
	if (autoPlaying) {
		if (timeElapsed == 1) {
			TweenLite.to(ad_container, 1, {y: adIsPanned, onComplete: function () {
			wtwFadeIn.play();
			  }
		   });
		}
		
		if (timeElapsed == 5) {
			wtwFadeOut.play();
			TweenLite.to(ad_container, 1, {y: adNotPanned});
		}
		if (timeElapsed == 6.5) {
			TweenLite.to(ad_container, 1, {y: adIsPanned, onComplete: function () {
				       allFoursFadeIn.play();
				}
			});
		}
		if (timeElapsed == 9.5) {
			allFoursFadeOut.play();
			TweenLite.to(ad_container, 1, {y: adNotPanned, delay: 1});
		}
		if (timeElapsed == 14) {
		playEndFrame();
		}
	}
//End if autoPlaying
	
///TIMELINE TO CHANGE SEASONS/ROAD SURFACES
	if (timeElapsed == 4) {
		//play second road surface
	p2 = new roadLoop(road2, road2Tween);
		
	}
	if (timeElapsed == 4.5) {
		//Fade second sruface in 
		road2FadeIn.play();
	}
	if (timeElapsed == 9) {
	p3 = new roadLoop(road3, road3Tween);
	}
	if (timeElapsed == 9.5) {
		road3FadeIn.play();
	}
	if (timeElapsed == 14) {
		//reset to loop
		handleLoop();
		
	}
}


/*handleLoop is called automatically from timeline but checks if
1) Ad has not been interacted with > replay ad again with auto animation
2) If the mouse is not over the ad but has been interacted with > play endFrame i.e do not auto play
3) If interacted with and all the messages have played out, play end frame
If no conditions met then resetTriggered = true; and do nothing
*/

var handleLoop = function () {
if (!autoPlaying) {
		if (!interactedWith) {
			//road1Tween.play();
			roadLoop(road1, road1Tween);
			road2FadeIn.pause(0);
			road3FadeIn.pause(0);
		TweenLite.to(road3, 1, {
		alpha: 0,
		onComplete: function () {
		tl.adTime = 0;
		main_tl.pause(0);
		main_tl.play();
		autoPlaying = true;
		  }
		});
		} else if (interactedWith && !mouseOver) {
			playEndFrame();
		} else if (interactedWith && messagesPlayed) {
			playEndFrame();
		} else {
			resetTriggered = true; //triggered but nothing happend
			//this will be checked against to recall this function
		}
	}
};


var handleReplay = function () {
		TweenLite.delayedCall(2, function () {
		messagesPlayed = true;
		if (resetTriggered) {
		/*this means the endframe function was called but
		could not play end frame; because mouse over ad when messages were still being played*/
		handleLoop();
		}
	});
}



