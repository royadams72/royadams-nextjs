(function (lib, img, cjs) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// stage content:
(lib.Mondeo_Power_Play_Leaderboard_728x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"game":154,"continue":155,end_frame:470});

	// timeline functions:
	this.frame_0 = function() {
		if(!this.loops){
		this.loops = 1
		}
		//console.log(this.loops)
		exportRoot.playBtn.visible = true;
		//exportRoot.playBtn.addEventListener("click", window.game);
		playBtnOn = true;
		//window.addPlayListener();
	}
	this.frame_150 = function() {
		this.stop();
		startTimerAuto = true;
		this.gotoAndStop("game");
		this.game_anim.gotoAndStop("auto");
		playAutoIn();
	}
	this.frame_154 = function() {
		this.stop()
		//playBtnOn = false;
	}
	this.frame_155 = function() {
		playBtnOn = false;
	}
	this.frame_470 = function() {
		addCTAs();
		playBtnOn = false;
	}
	this.frame_657 = function() {
		if(this.loops<3){
			this.play();
			this.loops++;
		}else{
			this.stop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(150).call(this.frame_150).wait(4).call(this.frame_154).wait(1).call(this.frame_155).wait(315).call(this.frame_470).wait(187).call(this.frame_657));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("EA4zAG9MhxlAAAIAAt5MBxlAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(658));

	// clickThrough
	this.clickThrough = new lib.click();
	this.clickThrough.setTransform(364,45);
	this.clickThrough._off = true;

	this.timeline.addTween(cjs.Tween.get(this.clickThrough).wait(471).to({_off:false},0).wait(187));

	// CTA
	this.cta_mc = new lib.mcCTA();
	this.cta_mc.setTransform(34,67.7,1,1,0,0,0,16,8.7);
	this.cta_mc.alpha = 0;
	this.cta_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta_mc).wait(471).to({_off:false},0).wait(43).to({alpha:1},30).wait(114));

	// Arrow
	this.intell = new lib.ArrowButton();
	this.intell.setTransform(8.8,38.1,1.087,1.082);
	this.intell.alpha = 0;
	this.intell._off = true;

	this.timeline.addTween(cjs.Tween.get(this.intell).wait(471).wait(1).to({_off:false},0).to({x:18.8,alpha:1},17).wait(169));

	// Layer 1
	this.instance = new lib.wheel_glow2();
	this.instance.setTransform(-117.4,-31.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(658));

	// ford logo
	this.instance_1 = new lib.fordLogo();
	this.instance_1.setTransform(587,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(658));

	// Copy 8
	this.autoAdjustsTxt = new lib.Copy8();
	this.autoAdjustsTxt.setTransform(115.5,47.4,1,1,0,0,0,87.5,10.4);
	this.autoAdjustsTxt.alpha = 0;
	this.autoAdjustsTxt._off = true;

	this.timeline.addTween(cjs.Tween.get(this.autoAdjustsTxt).wait(327).wait(20).to({_off:false},0).to({alpha:1},20).wait(75).to({alpha:0},27).to({_off:true},1).wait(188));

	// Copy 7
	this.allNewTxt2 = new lib.Copy7();
	this.allNewTxt2.setTransform(125.6,24.8,1,1,0,0,0,109.6,12.8);
	this.allNewTxt2.alpha = 0;
	this.allNewTxt2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.allNewTxt2).wait(327).to({_off:false},0).to({alpha:1},20).wait(311));

	// Percentage
	this.percentageText = new lib.Percentage();
	this.percentageText.setTransform(104,31.1,1,1,0,0,0,82,15.2);
	this.percentageText.alpha = 0;
	this.percentageText._off = true;

	this.timeline.addTween(cjs.Tween.get(this.percentageText).wait(155).to({_off:false},0).to({alpha:1},27).wait(113).to({alpha:0},31).to({_off:true},1).wait(331));

	// Copy 6
	this.scoreMsg = new lib.Copy6();
	this.scoreMsg.setTransform(124.5,44.1,1,1,0,0,0,102.5,24.6);
	this.scoreMsg.alpha = 0;
	this.scoreMsg._off = true;

	this.timeline.addTween(cjs.Tween.get(this.scoreMsg).wait(155).to({_off:false},0).to({alpha:1},27).wait(113).to({alpha:0},31).to({_off:true},1).wait(331));

	// playBtn
	this.playBtn = new lib.PlayButton();
	this.playBtn.setTransform(550,62,1,1,0,0,0,40,15);
	this.playBtn.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.playBtn).to({alpha:1},65).to({_off:true},90).wait(503));

	// game
	this.game_anim = new lib.gameMC();
	this.game_anim.setTransform(362,42.4,1,1,0,0,0,-0.3,0.7);
	this.game_anim._off = true;

	this.timeline.addTween(cjs.Tween.get(this.game_anim).wait(154).to({_off:false},0).to({_off:true},1).wait(503));

	// road
	this.roadMC = new lib.roadAnim();
	this.roadMC.setTransform(340,45);
	this.roadMC._off = true;

	this.timeline.addTween(cjs.Tween.get(this.roadMC).wait(154).to({_off:false},0).to({_off:true},1).wait(503));

	// msg1
	this.introTxt = new lib.msg1();
	this.introTxt.setTransform(151.5,44.5,1,1,0,0,0,0,0.7);
	this.introTxt.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.introTxt).to({alpha:1},65).to({_off:true},89).wait(504));

	// car_img1
	this.instance_2 = new lib.car_img();
	this.instance_2.setTransform(292.3,44);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(658));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117.4,-31.9,845.5,122);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-165.8,-31.9,1710.1,123.7), rect=new cjs.Rectangle(-117.4,-31.9,845.5,122), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


// symbols:
(lib._300x250_logo_noStrapline = function() {
	this.initialize(img._300x250_logo_noStrapline);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,32);


(lib.car_shadow = function() {
	this.initialize(img.car_shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,208);


(lib.car1 = function() {
	this.initialize(img.car1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,141);


(lib.fordLogo = function() {
	this.initialize(img.fordLogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,90);


(lib.ice_road = function() {
	this.initialize(img.ice_road);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,392,90);


(lib.inside_car = function() {
	this.initialize(img.inside_car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,181);


(lib.interior2 = function() {
	this.initialize(img.interior2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,181);


(lib.leaves = function() {
	this.initialize(img.leaves);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,392,90);


(lib.Mondeo_Power_Play_300x250_v9 = function() {
	this.initialize(img.Mondeo_Power_Play_300x250_v9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,587,90);


(lib.Mondeo_top_MPU_2 = function() {
	this.initialize(img.Mondeo_top_MPU_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,199);


(lib.mud = function() {
	this.initialize(img.mud);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,392,90);


(lib.Road = function() {
	this.initialize(img.Road);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,90);


(lib.snow = function() {
	this.initialize(img.snow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,180);


(lib.wheel_glow2 = function() {
	this.initialize(img.wheel_glow2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,50);


(lib.wheel_glow3 = function() {
	this.initialize(img.wheel_glow3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,50);


(lib.YouTitle = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AjbByIAAjjIG2AAIAADjg");
	this.shape.setTransform(22.4,9.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0.4,-2.4,44,23);
p.frameBounds = [rect];


(lib.whelGlowInner = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.wheel_glow2();
	this.instance.setTransform(-50.7,-24.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-50.7,-24.9,102,50);
p.frameBounds = [rect];


(lib.snow_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.mud();
	this.instance.setTransform(183.1,-47.9);

	this.instance_1 = new lib.mud();
	this.instance_1.setTransform(-208.9,-47.9);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-208.9,-47.9,784.1,90);
p.frameBounds = [rect];


(lib.roadMC = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Road();
	this.instance.setTransform(-349.9,-44.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-349.9,-44.9,700,90);
p.frameBounds = [rect];


(lib.PercentageBar = function() {
	this.initialize();

	// dont remove
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AlEB8IAAj4IKIAAIAAD4g");
	this.shape.setTransform(-48.3,-3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-80.8,-15.5,65,25);
p.frameBounds = [rect];


(lib.Percentage = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("A0nCWIAAkqMApOAAAIAAEqg");
	this.shape.setTransform(133,19.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(1,4.1,264,30);
p.frameBounds = [rect];


(lib.msg2 = function() {
	this.initialize();

	// do no remove
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("A3bDHIAAmNMAu3AAAIAAGNg");
	this.shape.setTransform(0.8,0.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-149.1,-19.4,300,40);
p.frameBounds = [rect];


(lib.msg1 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvhBMQgUgLgKgVQgJgTgBgXQAAgpAYgYQAWgYAlAAQAXgBAUAMQATALAKAVQAKAUAAAYQAAAagLAVQgKAUgUALQgTAKgWAAQgZAAgSgMgAvfgzQgSAQAAAlQAAAfARASQAQASAZAAQAaAAARgSQARgSAAghQAAgTgIgQQgGgPgOgJQgOgJgRAAQgYAAgRARgAS+BWIAAhJIhDhhIAcAAIAhA0IASAdIATgfIAhgyIAaAAIhEBhIAABJgAP9BWIgUg1IhIAAIgTA1IgYAAIBCiqIAZAAIBGCqgAO6ghIgTAwIA7AAIgSgtIgMgkQgDAQgHARgAKNBWIAAiqIAWAAIAACVIBVAAIAAAVgAF4BWIAAiqIBAAAQARAAAJABQANADAIAFQAJAHAGAKQAEAKAAANQAAAWgNAOQgOAPglgBIgsAAIAABHgAGOgDIAsAAQAXAAAJgIQAJgIAAgPQAAgLgFgIQgGgHgIgDQgHgBgPAAIgsAAgAAXBWIgXgkIgPgYQgGgIgFgEQgFgDgFgBIgNgBIgaAAIAABNIgXAAIAAiqIBMAAQAWAAALAEQAMAFAHALQAHAMAAAOQAAATgMANQgMAKgWADQAJAEACAFQAKAJAKAOIAeAvgAhLgJIAwAAQAQAAAJgDQAGgDAFgHQAFgHAAgJQAAgMgJgHQgHgJgTAAIg2AAgAl4BWIAAiqIB8AAIAAAUIhlAAIAAA0IBfAAIAAATIhfAAIAAA6IBpAAIAAAVgApJBWIgkiCIgGgUIgEAUIglCCIgXAAIguiqIAYAAIAaBuIAHAjIAIgfIAhhyIAbAAIAZBVQAJAgAEAcIAIglIAbhsIAYAAIgwCqgA0YBWIAAiqIBBAAQASAAAIABQANADAJAFQAIAHAFAKQAFAKABANQAAAWgPAOQgNAPgkgBIgsAAIAABHgA0AgDIAsAAQAVAAAKgIQAJgIAAgPQAAgLgFgIQgFgHgJgDQgHgBgPAAIgrAAg");
	this.shape.setTransform(-6.6,-1.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-137.1,-10.7,261,17.8);
p.frameBounds = [rect];


(lib.MeterBar = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,2,1).p("AAAuDIAAcH");
	this.shape.setTransform(6.4,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(1,2,1).p("AAAuDIAAcH");
	this.shape_1.setTransform(12.9,90);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(1,2,1).p("AAAuDIAAcH");
	this.shape_2.setTransform(7.3,90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1,2,1).p("AAAuDIAAcH");
	this.shape_3.setTransform(11.8,90);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFFF","#A1A1A1","#FFFFFF","#747474"],[0,0.263,0.733,1],0,90.5,0,-90.4).s().p("AgTOJIAA8RIAnAAIAAcRg");
	this.shape_4.setTransform(9.5,90);

	// Layer 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#666666").ss(1,2,1).p("AAQgPQAHAHAAAIQAAAJgHAHQgHAHgJAAQgIAAgHgHQgHgHAAgJQAAgIAHgHQAHgHAIAAQAJAAAHAHg");
	this.shape_5.setTransform(9.5,180.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,2,1).p("AAQgPQAHAHAAAIQAAAJgHAHQgHAHgJAAQgIAAgHgHQgHgHAAgJQAAgIAHgHQAHgHAIAAQAJAAAHAHg");
	this.shape_6.setTransform(9.5,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#747474").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgHAIAAQAJAAAHAHQAHAHAAAIQAAAJgHAHQgHAHgJAAQgIAAgHgHg");
	this.shape_7.setTransform(9.5,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgHAIAAQAJAAAHAHQAHAHAAAIQAAAJgHAHQgHAHgJAAQgIAAgHgHg");
	this.shape_8.setTransform(9.5,180.6);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(6.4,-2.2,6.5,185.2);
p.frameBounds = [rect];


(lib.MeterArrowYou = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1,3,true).p("AARgSIghASIAhATg");
	this.shape.setTransform(4.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AgQAAIAggSIAAAlg");
	this.shape_1.setTransform(4.7,0);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(3,-2,3.4,3.9);
p.frameBounds = [rect];


(lib.MeterArrowAWD = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgQATIAAglIAgASg");
	this.shape.setTransform(-4.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgPgSIAgASIggATg");
	this.shape_1.setTransform(-4.3,0);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-6,-1.9,3.4,3.9);
p.frameBounds = [rect];


(lib.leaves_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.leaves();
	this.instance.setTransform(188.1,-44.9);

	this.instance_1 = new lib.leaves();
	this.instance_1.setTransform(-202.9,-45.9);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-202.9,-45.9,783.1,91);
p.frameBounds = [rect];


(lib.ice = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.ice_road();
	this.instance.setTransform(-201.4,-44.5);

	// Layer 3
	this.instance_1 = new lib.ice_road();
	this.instance_1.setTransform(189.5,-44.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-201.4,-44.5,783,90);
p.frameBounds = [rect];


(lib.GO = function() {
	this.initialize();

	// Do not remove
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AqcGBIAAsBIU5AAIAAMBg");
	this.shape.setTransform(0.2,-1.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-66.7,-40,133.9,77);
p.frameBounds = [rect];


(lib.Copy8 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AwZCLIAAkWMAgyAAAIAAEWg");
	this.shape.setTransform(96,16);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-8.9,2,210,28);
p.frameBounds = [rect];


(lib.Copy7 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AxkBtIAAjaMAjJAAAIAADag");
	this.shape.setTransform(112.5,11);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,225,22);
p.frameBounds = [rect];


(lib.Copy6 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AyMB4IAAjvMAkYAAAIAADvg");
	this.shape.setTransform(118.5,37.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(2,25.5,233,24);
p.frameBounds = [rect];


(lib.Copy5 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(214,214,214,0)").s().p("AzDDHIAAmNMAmHAAAIAAGNg");
	this.shape.setTransform(0,-18.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-121.9,-38.3,244,40);
p.frameBounds = [rect];


(lib.Copy4 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(214,214,214,0.008)").s().p("AyuDHIAAmNMAldAAAIAAGNg");
	this.shape.setTransform(0,-10.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-119.9,-30.6,240,40);
p.frameBounds = [rect];


(lib.click = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("Eg42AHCIAAuDMBxtAAAIAAODg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-363.9,-44.9,728,90);
p.frameBounds = [rect];


(lib.carShadow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.car_shadow();
	this.instance.setTransform(65.7,-27.7,0.631,0.631,90);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-65.6,-27.7,131.3,55.6);
p.frameBounds = [rect];


(lib.car_img = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Mondeo_Power_Play_300x250_v9();
	this.instance.setTransform(-293.4,-44.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-293.4,-44.9,587,90);
p.frameBounds = [rect];


(lib.PlayButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AEeB7Io7AAIAAj1II7AAg");
	this.shape.setTransform(28.5,12.5,0.996,1.01);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,57,25);
p.frameBounds = [rect, rect];


(lib.btn2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5AACD5").s().p("AjvB4QABhEAhg0QAfg2A2gfQA3ggBBgCQBDACA1AgQA3AfAgA2QAgA0AABEg");
	this.shape.setTransform(24,12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3497CB").s().p("Ah5DRQg3ggggg3Qggg3gBhDQABhCAgg3QAgg3A3ggQA3ggBCgBQBDABA3AgQA3AgAgA3QAgA3ABBCQgBBDggA3QggA3g3AgQg3AghDABQhCgBg3ggg");
	this.shape_1.setTransform(24.3,24.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,48.5,48.5);
p.frameBounds = [rect];


(lib.btn1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A86B1").s().p("AjxB5QABhEAhg1QAgg2A2ggQA3ghBCgBQBDABA3AhQA3AgAgA2QAgA1ABBEg");
	this.shape.setTransform(24.2,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A679C").s().p("Ah5DRQg3ggggg3Qggg3gBhDQABhCAgg3QAgg3A3ggQA3ggBCgBQBDABA3AgQA3AgAgA3QAgA3ABBCQgBBDggA3QggA3g3AgQg3AghDABQhCgBg3ggg");
	this.shape_1.setTransform(24.3,24.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,48.5,48.5);
p.frameBounds = [rect];


(lib.ArrowButton = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfAhIAfghIgfggIAQgQIAvAwIgvAxg");
	this.shape.setTransform(3.4,5.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0.2,0.9,6.5,9.8);
p.frameBounds = [rect];


(lib.AWDTitle = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AiUBQIAAieIEqAAIAACeg");
	this.shape.setTransform(18.7,5.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(3.7,-2.4,30,16);
p.frameBounds = [rect];


(lib.snowMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{go:1});

	// Layer 1
	this.instance = new lib.snow_1();
	this.instance.setTransform(952,0.1,1,1,0,0,0,191.3,0);
	this.instance.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:168},132).wait(1));

	// Layer 2
	this.instance_1 = new lib.snow_1();
	this.instance_1.setTransform(168,0.1,1,1,0,0,0,191.3,0);
	this.instance_1.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-615.8},132).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-232.3,-47.8,1568.1,90);
p.frameBounds = [rect, new cjs.Rectangle(-238.2,-47.8,1568.1,90), new cjs.Rectangle(-244.2,-47.8,1568.1,90), new cjs.Rectangle(-250.1,-47.8,1568.1,90), new cjs.Rectangle(-256,-47.8,1568.1,90), new cjs.Rectangle(-262,-47.8,1568.1,90), new cjs.Rectangle(-267.9,-47.8,1568.1,90), new cjs.Rectangle(-273.8,-47.8,1568.1,90), new cjs.Rectangle(-279.8,-47.8,1568.1,90), new cjs.Rectangle(-285.7,-47.8,1568.1,90), new cjs.Rectangle(-291.7,-47.8,1568.1,90), new cjs.Rectangle(-297.6,-47.8,1568.1,90), new cjs.Rectangle(-303.6,-47.8,1568.1,90), new cjs.Rectangle(-309.5,-47.8,1568.1,90), new cjs.Rectangle(-315.4,-47.8,1568.1,90), new cjs.Rectangle(-321.4,-47.8,1568.1,90), new cjs.Rectangle(-327.3,-47.8,1568.1,90), new cjs.Rectangle(-333.2,-47.8,1568.1,90), new cjs.Rectangle(-339.2,-47.8,1568.1,90), new cjs.Rectangle(-345.1,-47.8,1568.1,90), new cjs.Rectangle(-351.1,-47.8,1568.1,90), new cjs.Rectangle(-357,-47.8,1568.1,90), new cjs.Rectangle(-363,-47.8,1568.1,90), new cjs.Rectangle(-368.9,-47.8,1568.1,90), new cjs.Rectangle(-374.8,-47.8,1568.1,90), new cjs.Rectangle(-380.8,-47.8,1568.1,90), new cjs.Rectangle(-386.7,-47.8,1568.1,90), new cjs.Rectangle(-392.6,-47.8,1568.1,90), new cjs.Rectangle(-398.6,-47.8,1568.1,90), new cjs.Rectangle(-404.5,-47.8,1568.1,90), new cjs.Rectangle(-410.5,-47.8,1568.1,90), new cjs.Rectangle(-416.4,-47.8,1568.1,90), new cjs.Rectangle(-422.3,-47.8,1568.1,90), new cjs.Rectangle(-428.3,-47.8,1568.1,90), new cjs.Rectangle(-434.2,-47.8,1568.1,90), new cjs.Rectangle(-440.2,-47.8,1568.1,90), new cjs.Rectangle(-446.1,-47.8,1568.1,90), new cjs.Rectangle(-452,-47.8,1568.1,90), new cjs.Rectangle(-458,-47.8,1568.1,90), new cjs.Rectangle(-463.9,-47.8,1568.1,90), new cjs.Rectangle(-469.8,-47.8,1568.1,90), new cjs.Rectangle(-475.8,-47.8,1568.1,90), new cjs.Rectangle(-481.7,-47.8,1568.1,90), new cjs.Rectangle(-487.7,-47.8,1568.1,90), new cjs.Rectangle(-493.6,-47.8,1568.1,90), new cjs.Rectangle(-499.6,-47.8,1568.1,90), new cjs.Rectangle(-505.5,-47.8,1568.1,90), new cjs.Rectangle(-511.4,-47.8,1568.1,90), new cjs.Rectangle(-517.4,-47.8,1568.1,90), new cjs.Rectangle(-523.3,-47.8,1568.1,90), new cjs.Rectangle(-529.2,-47.8,1568.1,90), new cjs.Rectangle(-535.2,-47.8,1568.1,90), new cjs.Rectangle(-541.1,-47.8,1568.1,90), new cjs.Rectangle(-547.1,-47.8,1568.1,90), new cjs.Rectangle(-553,-47.8,1568.1,90), new cjs.Rectangle(-558.9,-47.8,1568.1,90), new cjs.Rectangle(-564.9,-47.8,1568.1,90), new cjs.Rectangle(-570.8,-47.8,1568.1,90), new cjs.Rectangle(-576.8,-47.8,1568.1,90), new cjs.Rectangle(-582.7,-47.8,1568.1,90), new cjs.Rectangle(-588.6,-47.8,1568.1,90), new cjs.Rectangle(-594.6,-47.8,1568.1,90), new cjs.Rectangle(-600.5,-47.8,1568.1,90), new cjs.Rectangle(-606.5,-47.8,1568.1,90), new cjs.Rectangle(-612.4,-47.8,1568.1,90), new cjs.Rectangle(-618.3,-47.8,1568.1,90), new cjs.Rectangle(-624.3,-47.8,1568.1,90), new cjs.Rectangle(-630.2,-47.8,1568.1,90), new cjs.Rectangle(-636.2,-47.8,1568.1,90), new cjs.Rectangle(-642.1,-47.8,1568.1,90), new cjs.Rectangle(-648,-47.8,1568.1,90), new cjs.Rectangle(-654,-47.8,1568.1,90), new cjs.Rectangle(-659.9,-47.8,1568.1,90), new cjs.Rectangle(-665.8,-47.8,1568.1,90), new cjs.Rectangle(-671.8,-47.8,1568.1,90), new cjs.Rectangle(-677.7,-47.8,1568.1,90), new cjs.Rectangle(-683.7,-47.8,1568.1,90), new cjs.Rectangle(-689.6,-47.8,1568.1,90), new cjs.Rectangle(-695.6,-47.8,1568.1,90), new cjs.Rectangle(-701.5,-47.8,1568.1,90), new cjs.Rectangle(-707.4,-47.8,1568.1,90), new cjs.Rectangle(-713.4,-47.8,1568.1,90), new cjs.Rectangle(-719.3,-47.8,1568.1,90), new cjs.Rectangle(-725.2,-47.8,1568.1,90), new cjs.Rectangle(-731.2,-47.8,1568.1,90), new cjs.Rectangle(-737.1,-47.8,1568.1,90), new cjs.Rectangle(-743.1,-47.8,1568.1,90), new cjs.Rectangle(-749,-47.8,1568.1,90), new cjs.Rectangle(-754.9,-47.8,1568.1,90), new cjs.Rectangle(-760.9,-47.8,1568.1,90), new cjs.Rectangle(-766.8,-47.8,1568.1,90), new cjs.Rectangle(-772.8,-47.8,1568.1,90), new cjs.Rectangle(-778.7,-47.8,1568.1,90), new cjs.Rectangle(-784.6,-47.8,1568.1,90), new cjs.Rectangle(-790.6,-47.8,1568.1,90), new cjs.Rectangle(-796.5,-47.8,1568.1,90), new cjs.Rectangle(-802.5,-47.8,1568.1,90), new cjs.Rectangle(-808.4,-47.8,1568.1,90), new cjs.Rectangle(-814.3,-47.8,1568.1,90), new cjs.Rectangle(-820.3,-47.8,1568.1,90), new cjs.Rectangle(-826.2,-47.8,1568.1,90), new cjs.Rectangle(-832.2,-47.8,1568.1,90), new cjs.Rectangle(-838.1,-47.8,1568.1,90), new cjs.Rectangle(-844,-47.8,1568.1,90), new cjs.Rectangle(-850,-47.8,1568.1,90), new cjs.Rectangle(-855.9,-47.8,1568.1,90), new cjs.Rectangle(-861.8,-47.8,1568.1,90), new cjs.Rectangle(-867.8,-47.8,1568.1,90), new cjs.Rectangle(-873.7,-47.8,1568.1,90), new cjs.Rectangle(-879.7,-47.8,1568.1,90), new cjs.Rectangle(-885.6,-47.8,1568.1,90), new cjs.Rectangle(-891.5,-47.8,1568.1,90), new cjs.Rectangle(-897.5,-47.8,1568.1,90), new cjs.Rectangle(-903.4,-47.8,1568.1,90), new cjs.Rectangle(-909.4,-47.8,1568.1,90), new cjs.Rectangle(-915.3,-47.8,1568.1,90), new cjs.Rectangle(-921.2,-47.8,1568.1,90), new cjs.Rectangle(-927.2,-47.8,1568.1,90), new cjs.Rectangle(-933.1,-47.8,1568.1,90), new cjs.Rectangle(-939.1,-47.8,1568.1,90), new cjs.Rectangle(-945,-47.8,1568.1,90), new cjs.Rectangle(-950.9,-47.8,1568.1,90), new cjs.Rectangle(-956.9,-47.8,1568.1,90), new cjs.Rectangle(-962.8,-47.8,1568.1,90), new cjs.Rectangle(-968.8,-47.8,1568.1,90), new cjs.Rectangle(-974.7,-47.8,1568.1,90), new cjs.Rectangle(-980.6,-47.8,1568.1,90), new cjs.Rectangle(-986.6,-47.8,1568.1,90), new cjs.Rectangle(-992.5,-47.8,1568.1,90), new cjs.Rectangle(-998.5,-47.8,1568.1,90), new cjs.Rectangle(-1004.4,-47.8,1568.1,90), new cjs.Rectangle(-1010.3,-47.8,1568.1,90), new cjs.Rectangle(-1016.3,-47.8,1568.1,90)];


(lib.roadAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.roadMC();
	this.instance.setTransform(699,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0},69).wait(1));

	// Layer 1
	this.instance_1 = new lib.roadMC();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-689.8},69).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-349.9,-44.9,1399,90);
p.frameBounds = [rect, new cjs.Rectangle(-359.9,-44.9,1398.9,90), new cjs.Rectangle(-369.9,-44.9,1398.8,90), new cjs.Rectangle(-379.9,-44.9,1398.6,90), new cjs.Rectangle(-389.9,-44.9,1398.5,90), new cjs.Rectangle(-399.9,-44.9,1398.4,90), new cjs.Rectangle(-409.9,-44.9,1398.2,90), new cjs.Rectangle(-419.9,-44.9,1398.1,90), new cjs.Rectangle(-429.9,-44.9,1398,90), new cjs.Rectangle(-439.9,-44.9,1397.9,90), new cjs.Rectangle(-449.9,-44.9,1397.7,90), new cjs.Rectangle(-459.9,-44.9,1397.6,90), new cjs.Rectangle(-469.9,-44.9,1397.5,90), new cjs.Rectangle(-479.9,-44.9,1397.3,90), new cjs.Rectangle(-489.9,-44.9,1397.2,90), new cjs.Rectangle(-499.9,-44.9,1397.1,90), new cjs.Rectangle(-509.9,-44.9,1396.9,90), new cjs.Rectangle(-519.9,-44.9,1396.8,90), new cjs.Rectangle(-529.9,-44.9,1396.7,90), new cjs.Rectangle(-539.9,-44.9,1396.6,90), new cjs.Rectangle(-549.9,-44.9,1396.4,90), new cjs.Rectangle(-559.9,-44.9,1396.3,90), new cjs.Rectangle(-569.9,-44.9,1396.1,90), new cjs.Rectangle(-579.9,-44.9,1396,90), new cjs.Rectangle(-589.9,-44.9,1395.9,90), new cjs.Rectangle(-599.9,-44.9,1395.8,90), new cjs.Rectangle(-609.9,-44.9,1395.6,90), new cjs.Rectangle(-619.9,-44.9,1395.5,90), new cjs.Rectangle(-629.9,-44.9,1395.4,90), new cjs.Rectangle(-639.9,-44.9,1395.2,90), new cjs.Rectangle(-649.9,-44.9,1395.1,90), new cjs.Rectangle(-659.9,-44.9,1395,90), new cjs.Rectangle(-669.9,-44.9,1394.8,90), new cjs.Rectangle(-679.9,-44.9,1394.7,90), new cjs.Rectangle(-689.9,-44.9,1394.5,90), new cjs.Rectangle(-699.9,-44.9,1394.5,90), new cjs.Rectangle(-709.9,-44.9,1394.3,90), new cjs.Rectangle(-719.9,-44.9,1394.2,90), new cjs.Rectangle(-729.9,-44.9,1394,90), new cjs.Rectangle(-739.9,-44.9,1393.9,90), new cjs.Rectangle(-749.9,-44.9,1393.8,90), new cjs.Rectangle(-759.9,-44.9,1393.6,90), new cjs.Rectangle(-769.9,-44.9,1393.5,90), new cjs.Rectangle(-779.9,-44.9,1393.4,90), new cjs.Rectangle(-789.9,-44.9,1393.2,90), new cjs.Rectangle(-799.9,-44.9,1393.1,90), new cjs.Rectangle(-809.9,-44.9,1393,90), new cjs.Rectangle(-819.9,-44.9,1392.9,90), new cjs.Rectangle(-829.9,-44.9,1392.7,90), new cjs.Rectangle(-839.9,-44.9,1392.6,90), new cjs.Rectangle(-849.9,-44.9,1392.5,90), new cjs.Rectangle(-859.9,-44.9,1392.3,90), new cjs.Rectangle(-869.9,-44.9,1392.2,90), new cjs.Rectangle(-879.9,-44.9,1392.1,90), new cjs.Rectangle(-889.9,-44.9,1391.9,90), new cjs.Rectangle(-899.9,-44.9,1391.8,90), new cjs.Rectangle(-909.9,-44.9,1391.7,90), new cjs.Rectangle(-919.9,-44.9,1391.5,90), new cjs.Rectangle(-929.9,-44.9,1391.4,90), new cjs.Rectangle(-939.9,-44.9,1391.3,90), new cjs.Rectangle(-949.9,-44.9,1391.1,90), new cjs.Rectangle(-959.9,-44.9,1391,90), new cjs.Rectangle(-969.9,-44.9,1390.9,90), new cjs.Rectangle(-979.9,-44.9,1390.8,90), new cjs.Rectangle(-989.9,-44.9,1390.6,90), new cjs.Rectangle(-999.9,-44.9,1390.5,90), new cjs.Rectangle(-1009.9,-44.9,1390.4,90), new cjs.Rectangle(-1019.9,-44.9,1390.2,90), new cjs.Rectangle(-1029.9,-44.9,1390.1,90), new cjs.Rectangle(-1039.9,-44.9,1390,90)];


(lib.lvs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"go":1});

	// timeline functions:
	this.frame_0 = function() {
		console.log("playing")
		//this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(143));

	// Layer 1
	this.instance = new lib.leaves_1();
	this.instance.setTransform(770,0);
	this.instance.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-11.8},143).wait(1));

	// Layer 2
	this.instance_1 = new lib.leaves_1();
	this.instance_1.setTransform(-11.9,0);
	this.instance_1.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-797.8},143).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-214.9,-45.9,1565.1,91);
p.frameBounds = [rect, new cjs.Rectangle(-220.4,-45.9,1565.2,91), new cjs.Rectangle(-225.9,-45.9,1565.2,91), new cjs.Rectangle(-231.4,-45.9,1565.2,91), new cjs.Rectangle(-236.9,-45.9,1565.2,91), new cjs.Rectangle(-242.4,-45.9,1565.3,91), new cjs.Rectangle(-247.9,-45.9,1565.3,91), new cjs.Rectangle(-253.4,-45.9,1565.3,91), new cjs.Rectangle(-258.9,-45.9,1565.3,91), new cjs.Rectangle(-264.4,-45.9,1565.4,91), new cjs.Rectangle(-269.9,-45.9,1565.4,91), new cjs.Rectangle(-275.4,-45.9,1565.4,91), new cjs.Rectangle(-280.9,-45.9,1565.4,91), new cjs.Rectangle(-286.4,-45.9,1565.5,91), new cjs.Rectangle(-291.9,-45.9,1565.5,91), new cjs.Rectangle(-297.4,-45.9,1565.6,91), new cjs.Rectangle(-302.9,-45.9,1565.6,91), new cjs.Rectangle(-308.4,-45.9,1565.6,91), new cjs.Rectangle(-313.9,-45.9,1565.6,91), new cjs.Rectangle(-319.4,-45.9,1565.7,91), new cjs.Rectangle(-324.9,-45.9,1565.7,91), new cjs.Rectangle(-330.3,-45.9,1565.7,91), new cjs.Rectangle(-335.8,-45.9,1565.7,91), new cjs.Rectangle(-341.3,-45.9,1565.8,91), new cjs.Rectangle(-346.8,-45.9,1565.8,91), new cjs.Rectangle(-352.3,-45.9,1565.8,91), new cjs.Rectangle(-357.8,-45.9,1565.8,91), new cjs.Rectangle(-363.3,-45.9,1565.9,91), new cjs.Rectangle(-368.8,-45.9,1565.9,91), new cjs.Rectangle(-374.3,-45.9,1565.9,91), new cjs.Rectangle(-379.8,-45.9,1566,91), new cjs.Rectangle(-385.3,-45.9,1566,91), new cjs.Rectangle(-390.8,-45.9,1566,91), new cjs.Rectangle(-396.3,-45.9,1566.1,91), new cjs.Rectangle(-401.8,-45.9,1566.1,91), new cjs.Rectangle(-407.3,-45.9,1566.1,91), new cjs.Rectangle(-412.8,-45.9,1566.2,91), new cjs.Rectangle(-418.3,-45.9,1566.1,91), new cjs.Rectangle(-423.8,-45.9,1566.2,91), new cjs.Rectangle(-429.3,-45.9,1566.2,91), new cjs.Rectangle(-434.8,-45.9,1566.2,91), new cjs.Rectangle(-440.3,-45.9,1566.3,91), new cjs.Rectangle(-445.8,-45.9,1566.3,91), new cjs.Rectangle(-451.3,-45.9,1566.3,91), new cjs.Rectangle(-456.8,-45.9,1566.4,91), new cjs.Rectangle(-462.3,-45.9,1566.4,91), new cjs.Rectangle(-467.8,-45.9,1566.4,91), new cjs.Rectangle(-473.3,-45.9,1566.5,91), new cjs.Rectangle(-478.8,-45.9,1566.5,91), new cjs.Rectangle(-484.2,-45.9,1566.5,91), new cjs.Rectangle(-489.8,-45.9,1566.5,91), new cjs.Rectangle(-495.2,-45.9,1566.5,91), new cjs.Rectangle(-500.7,-45.9,1566.6,91), new cjs.Rectangle(-506.2,-45.9,1566.6,91), new cjs.Rectangle(-511.7,-45.9,1566.6,91), new cjs.Rectangle(-517.2,-45.9,1566.7,91), new cjs.Rectangle(-522.7,-45.9,1566.7,91), new cjs.Rectangle(-528.2,-45.9,1566.7,91), new cjs.Rectangle(-533.7,-45.9,1566.7,91), new cjs.Rectangle(-539.2,-45.9,1566.8,91), new cjs.Rectangle(-544.7,-45.9,1566.8,91), new cjs.Rectangle(-550.2,-45.9,1566.8,91), new cjs.Rectangle(-555.7,-45.9,1566.9,91), new cjs.Rectangle(-561.2,-45.9,1566.9,91), new cjs.Rectangle(-566.7,-45.9,1566.9,91), new cjs.Rectangle(-572.2,-45.9,1566.9,91), new cjs.Rectangle(-577.7,-45.9,1567,91), new cjs.Rectangle(-583.2,-45.9,1567,91), new cjs.Rectangle(-588.7,-45.9,1567,91), new cjs.Rectangle(-594.2,-45.9,1567.1,91), new cjs.Rectangle(-599.7,-45.9,1567.1,91), new cjs.Rectangle(-605.2,-45.9,1567.1,91), new cjs.Rectangle(-610.7,-45.9,1567.1,91), new cjs.Rectangle(-616.2,-45.9,1567.2,91), new cjs.Rectangle(-621.7,-45.9,1567.2,91), new cjs.Rectangle(-627.2,-45.9,1567.2,91), new cjs.Rectangle(-632.7,-45.9,1567.3,91), new cjs.Rectangle(-638.2,-45.9,1567.3,91), new cjs.Rectangle(-643.7,-45.9,1567.3,91), new cjs.Rectangle(-649.1,-45.9,1567.3,91), new cjs.Rectangle(-654.6,-45.9,1567.3,91), new cjs.Rectangle(-660.1,-45.9,1567.4,91), new cjs.Rectangle(-665.6,-45.9,1567.4,91), new cjs.Rectangle(-671.1,-45.9,1567.4,91), new cjs.Rectangle(-676.6,-45.9,1567.5,91), new cjs.Rectangle(-682.1,-45.9,1567.5,91), new cjs.Rectangle(-687.6,-45.9,1567.5,91), new cjs.Rectangle(-693.1,-45.9,1567.6,91), new cjs.Rectangle(-698.6,-45.9,1567.6,91), new cjs.Rectangle(-704.1,-45.9,1567.6,91), new cjs.Rectangle(-709.6,-45.9,1567.7,91), new cjs.Rectangle(-715.1,-45.9,1567.7,91), new cjs.Rectangle(-720.6,-45.9,1567.7,91), new cjs.Rectangle(-726.1,-45.9,1567.7,91), new cjs.Rectangle(-731.6,-45.9,1567.7,91), new cjs.Rectangle(-737.1,-45.9,1567.8,91), new cjs.Rectangle(-742.6,-45.9,1567.8,91), new cjs.Rectangle(-748.1,-45.9,1567.8,91), new cjs.Rectangle(-753.6,-45.9,1567.9,91), new cjs.Rectangle(-759.1,-45.9,1567.9,91), new cjs.Rectangle(-764.6,-45.9,1567.9,91), new cjs.Rectangle(-770.1,-45.9,1567.9,91), new cjs.Rectangle(-775.6,-45.9,1568,91), new cjs.Rectangle(-781.1,-45.9,1568,91), new cjs.Rectangle(-786.6,-45.9,1568,91), new cjs.Rectangle(-792.1,-45.9,1568.1,91), new cjs.Rectangle(-797.6,-45.9,1568.1,91), new cjs.Rectangle(-803,-45.9,1568.1,91), new cjs.Rectangle(-808.6,-45.9,1568.2,91), new cjs.Rectangle(-814,-45.9,1568.2,91), new cjs.Rectangle(-819.5,-45.9,1568.2,91), new cjs.Rectangle(-825,-45.9,1568.2,91), new cjs.Rectangle(-830.5,-45.9,1568.2,91), new cjs.Rectangle(-836,-45.9,1568.3,91), new cjs.Rectangle(-841.5,-45.9,1568.3,91), new cjs.Rectangle(-847,-45.9,1568.3,91), new cjs.Rectangle(-852.5,-45.9,1568.4,91), new cjs.Rectangle(-858,-45.9,1568.4,91), new cjs.Rectangle(-863.5,-45.9,1568.4,91), new cjs.Rectangle(-869,-45.9,1568.5,91), new cjs.Rectangle(-874.5,-45.9,1568.5,91), new cjs.Rectangle(-880,-45.9,1568.5,91), new cjs.Rectangle(-885.5,-45.9,1568.6,91), new cjs.Rectangle(-891,-45.9,1568.5,91), new cjs.Rectangle(-896.5,-45.9,1568.6,91), new cjs.Rectangle(-902,-45.9,1568.6,91), new cjs.Rectangle(-907.5,-45.9,1568.6,91), new cjs.Rectangle(-913,-45.9,1568.7,91), new cjs.Rectangle(-918.5,-45.9,1568.7,91), new cjs.Rectangle(-924,-45.9,1568.7,91), new cjs.Rectangle(-929.5,-45.9,1568.8,91), new cjs.Rectangle(-935,-45.9,1568.8,91), new cjs.Rectangle(-940.5,-45.9,1568.8,91), new cjs.Rectangle(-946,-45.9,1568.9,91), new cjs.Rectangle(-951.5,-45.9,1568.9,91), new cjs.Rectangle(-957,-45.9,1568.9,91), new cjs.Rectangle(-962.4,-45.9,1568.9,91), new cjs.Rectangle(-967.9,-45.9,1568.9,91), new cjs.Rectangle(-973.4,-45.9,1569,91), new cjs.Rectangle(-978.9,-45.9,1569,91), new cjs.Rectangle(-984.4,-45.9,1569,91), new cjs.Rectangle(-989.9,-45.9,1569.1,91), new cjs.Rectangle(-995.4,-45.9,1569.1,91), new cjs.Rectangle(-1000.9,-45.9,1569.1,91)];


(lib.insideCar2 = function() {
	this.initialize();

	// Layer 3
	this.rear = new lib.whelGlowInner();
	this.rear.setTransform(-39.2,-3.5,0.676,0.676,-89.9);

	// Layer 2
	this.front = new lib.whelGlowInner();
	this.front.setTransform(38.5,-3.5,0.676,0.676,-89.9);

	// Layer 1
	this.instance = new lib.inside_car();
	this.instance.setTransform(66.1,-32.4,0.73,0.73,90);

	this.addChild(this.instance,this.front,this.rear);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-66,-38.1,132.2,70.7);
p.frameBounds = [rect];


(lib.iceMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"go":1});

	// timeline functions:
	this.frame_0 = function() {
		//this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(130));

	// Layer 2
	this.instance = new lib.ice();
	this.instance.setTransform(988.4,-1.4,1,1,0,0,0,193.5,0.5);
	this.instance.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:205.4},130).wait(1));

	// Layer 1
	this.instance_1 = new lib.ice();
	this.instance_1.setTransform(205.4,-1.4,1,1,0,0,0,193.5,0.5);
	this.instance_1.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-577.4},130).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-189.6,-46.5,1566,90);
p.frameBounds = [rect, new cjs.Rectangle(-195.6,-46.5,1566,90), new cjs.Rectangle(-201.6,-46.5,1566,90), new cjs.Rectangle(-207.6,-46.5,1566,90), new cjs.Rectangle(-213.7,-46.5,1566,90), new cjs.Rectangle(-219.7,-46.5,1566,90), new cjs.Rectangle(-225.7,-46.5,1566,90), new cjs.Rectangle(-231.7,-46.5,1566,90), new cjs.Rectangle(-237.8,-46.5,1566,90), new cjs.Rectangle(-243.8,-46.5,1566,90), new cjs.Rectangle(-249.8,-46.5,1566,90), new cjs.Rectangle(-255.8,-46.5,1566,90), new cjs.Rectangle(-261.8,-46.5,1566,90), new cjs.Rectangle(-267.9,-46.5,1566,90), new cjs.Rectangle(-273.9,-46.5,1566,90), new cjs.Rectangle(-279.9,-46.5,1566,90), new cjs.Rectangle(-285.9,-46.5,1566,90), new cjs.Rectangle(-292,-46.5,1566,90), new cjs.Rectangle(-298,-46.5,1566,90), new cjs.Rectangle(-304,-46.5,1566,90), new cjs.Rectangle(-310,-46.5,1566,90), new cjs.Rectangle(-316.1,-46.5,1566,90), new cjs.Rectangle(-322.1,-46.5,1566,90), new cjs.Rectangle(-328.1,-46.5,1566,90), new cjs.Rectangle(-334.1,-46.5,1566,90), new cjs.Rectangle(-340.2,-46.5,1566,90), new cjs.Rectangle(-346.2,-46.5,1566,90), new cjs.Rectangle(-352.2,-46.5,1566,90), new cjs.Rectangle(-358.2,-46.5,1566,90), new cjs.Rectangle(-364.3,-46.5,1566,90), new cjs.Rectangle(-370.3,-46.5,1566,90), new cjs.Rectangle(-376.3,-46.5,1566,90), new cjs.Rectangle(-382.3,-46.5,1566,90), new cjs.Rectangle(-388.3,-46.5,1566,90), new cjs.Rectangle(-394.4,-46.5,1566,90), new cjs.Rectangle(-400.4,-46.5,1566,90), new cjs.Rectangle(-406.4,-46.5,1566,90), new cjs.Rectangle(-412.4,-46.5,1566,90), new cjs.Rectangle(-418.5,-46.5,1566,90), new cjs.Rectangle(-424.5,-46.5,1566,90), new cjs.Rectangle(-430.5,-46.5,1566,90), new cjs.Rectangle(-436.5,-46.5,1566,90), new cjs.Rectangle(-442.5,-46.5,1566,90), new cjs.Rectangle(-448.6,-46.5,1566,90), new cjs.Rectangle(-454.6,-46.5,1566,90), new cjs.Rectangle(-460.6,-46.5,1566,90), new cjs.Rectangle(-466.6,-46.5,1566,90), new cjs.Rectangle(-472.7,-46.5,1566,90), new cjs.Rectangle(-478.7,-46.5,1566,90), new cjs.Rectangle(-484.7,-46.5,1566,90), new cjs.Rectangle(-490.7,-46.5,1566,90), new cjs.Rectangle(-496.7,-46.5,1566,90), new cjs.Rectangle(-502.8,-46.5,1566,90), new cjs.Rectangle(-508.8,-46.5,1566,90), new cjs.Rectangle(-514.8,-46.5,1566,90), new cjs.Rectangle(-520.8,-46.5,1566,90), new cjs.Rectangle(-526.9,-46.5,1566,90), new cjs.Rectangle(-532.9,-46.5,1566,90), new cjs.Rectangle(-538.9,-46.5,1566,90), new cjs.Rectangle(-544.9,-46.5,1566,90), new cjs.Rectangle(-551,-46.5,1566,90), new cjs.Rectangle(-557,-46.5,1566,90), new cjs.Rectangle(-563,-46.5,1566,90), new cjs.Rectangle(-569,-46.5,1566,90), new cjs.Rectangle(-575.1,-46.5,1566,90), new cjs.Rectangle(-581.1,-46.5,1566,90), new cjs.Rectangle(-587.1,-46.5,1566,90), new cjs.Rectangle(-593.1,-46.5,1566,90), new cjs.Rectangle(-599.1,-46.5,1566,90), new cjs.Rectangle(-605.2,-46.5,1566,90), new cjs.Rectangle(-611.2,-46.5,1566,90), new cjs.Rectangle(-617.2,-46.5,1566,90), new cjs.Rectangle(-623.2,-46.5,1566,90), new cjs.Rectangle(-629.3,-46.5,1566,90), new cjs.Rectangle(-635.3,-46.5,1566,90), new cjs.Rectangle(-641.3,-46.5,1566,90), new cjs.Rectangle(-647.3,-46.5,1566,90), new cjs.Rectangle(-653.3,-46.5,1566,90), new cjs.Rectangle(-659.4,-46.5,1566,90), new cjs.Rectangle(-665.4,-46.5,1566,90), new cjs.Rectangle(-671.4,-46.5,1566,90), new cjs.Rectangle(-677.4,-46.5,1566,90), new cjs.Rectangle(-683.5,-46.5,1566,90), new cjs.Rectangle(-689.5,-46.5,1566,90), new cjs.Rectangle(-695.5,-46.5,1566,90), new cjs.Rectangle(-701.5,-46.5,1566,90), new cjs.Rectangle(-707.6,-46.5,1566,90), new cjs.Rectangle(-713.6,-46.5,1566,90), new cjs.Rectangle(-719.6,-46.5,1566,90), new cjs.Rectangle(-725.6,-46.5,1566,90), new cjs.Rectangle(-731.6,-46.5,1566,90), new cjs.Rectangle(-737.7,-46.5,1566,90), new cjs.Rectangle(-743.7,-46.5,1566,90), new cjs.Rectangle(-749.7,-46.5,1566,90), new cjs.Rectangle(-755.8,-46.5,1566,90), new cjs.Rectangle(-761.8,-46.5,1566,90), new cjs.Rectangle(-767.8,-46.5,1566,90), new cjs.Rectangle(-773.8,-46.5,1566,90), new cjs.Rectangle(-779.8,-46.5,1566,90), new cjs.Rectangle(-785.9,-46.5,1566,90), new cjs.Rectangle(-791.9,-46.5,1566,90), new cjs.Rectangle(-797.9,-46.5,1566,90), new cjs.Rectangle(-803.9,-46.5,1566,90), new cjs.Rectangle(-810,-46.5,1566,90), new cjs.Rectangle(-816,-46.5,1566,90), new cjs.Rectangle(-822,-46.5,1566,90), new cjs.Rectangle(-828,-46.5,1566,90), new cjs.Rectangle(-834,-46.5,1566,90), new cjs.Rectangle(-840.1,-46.5,1566,90), new cjs.Rectangle(-846.1,-46.5,1566,90), new cjs.Rectangle(-852.1,-46.5,1566,90), new cjs.Rectangle(-858.1,-46.5,1566,90), new cjs.Rectangle(-864.2,-46.5,1566,90), new cjs.Rectangle(-870.2,-46.5,1566,90), new cjs.Rectangle(-876.2,-46.5,1566,90), new cjs.Rectangle(-882.2,-46.5,1566,90), new cjs.Rectangle(-888.2,-46.5,1566,90), new cjs.Rectangle(-894.3,-46.5,1566,90), new cjs.Rectangle(-900.3,-46.5,1566,90), new cjs.Rectangle(-906.3,-46.5,1566,90), new cjs.Rectangle(-912.3,-46.5,1566,90), new cjs.Rectangle(-918.4,-46.5,1566,90), new cjs.Rectangle(-924.4,-46.5,1566,90), new cjs.Rectangle(-930.4,-46.5,1566,90), new cjs.Rectangle(-936.4,-46.5,1566,90), new cjs.Rectangle(-942.5,-46.5,1566,90), new cjs.Rectangle(-948.5,-46.5,1566,90), new cjs.Rectangle(-954.5,-46.5,1566,90), new cjs.Rectangle(-960.5,-46.5,1566,90), new cjs.Rectangle(-966.6,-46.5,1566,90), new cjs.Rectangle(-972.6,-46.5,1566,90)];


(lib.carMC = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.car1();
	this.instance.setTransform(70.5,-31.9,1,1,90);

	// Layer 2
	this.instance_1 = new lib.carShadow();
	this.instance_1.setTransform(-7.9,-14.5);
	this.instance_1.alpha = 0.551;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-73.5,-42.3,144.1,74.4);
p.frameBounds = [rect];


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAyhYQALAAAJAFQAJAGAFAJQAFAJABAMIAABfQgBAMgFAJQgFAJgJAGQgJAFgLAAIhjAAQgQAAgMgMQgLgLgBgSIAAhfQABgMAFgJQAFgJAJgGQAJgFALAAg");
	mask.setTransform(9,9);

	// arrow
	this.instance = new lib.ArrowButton();
	this.instance.setTransform(-5.9,4,1,0.995);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:6},14,cjs.Ease.get(1)).wait(1));

	// arrow
	this.instance_1 = new lib.ArrowButton();
	this.instance_1.setTransform(6,4,1,0.995);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:18},10,cjs.Ease.get(-0.99)).to({_off:true},1).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(6.2,4.9,6.5,9.8);
p.frameBounds = [rect, new cjs.Rectangle(6.3,4.9,6.5,9.8), new cjs.Rectangle(6.7,4.9,6.5,9.8), new cjs.Rectangle(7.3,4.9,6.5,9.8), new cjs.Rectangle(8.1,4.9,6.5,9.8), new cjs.Rectangle(9.2,4.9,6.5,9.8), new cjs.Rectangle(10.5,4.9,6.5,9.8), new cjs.Rectangle(12.1,4.9,6,9.8), new cjs.Rectangle(13.9,4.9,4.2,9.8), new cjs.Rectangle(0,4.9,18,9.8), new cjs.Rectangle(0,4.9,2.3,9.8), new cjs.Rectangle(0,4.9,3.8,9.8), new cjs.Rectangle(0,4.9,5.2,9.8), new cjs.Rectangle(0.1,4.9,6.5,9.8), new cjs.Rectangle(1.2,4.9,6.5,9.8), new cjs.Rectangle(2.3,4.9,6.5,9.8), new cjs.Rectangle(3.2,4.9,6.5,9.8), new cjs.Rectangle(4,4.9,6.5,9.8), new cjs.Rectangle(4.6,4.9,6.5,9.8), new cjs.Rectangle(5.2,4.9,6.5,9.8), new cjs.Rectangle(5.6,4.9,6.5,9.8), new cjs.Rectangle(5.9,4.9,6.5,9.8), new cjs.Rectangle(6.1,4.9,6.5,9.8), new cjs.Rectangle(6.2,4.9,6.5,9.8)];


(lib.awdMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{begin:0,leaves:1,leaves_loop:16,leaves_end:49,snow:62,snow_loop:69,snow_end:179,ice:196,ice_loop:216,ice_end:338});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_48 = function() {
		this.gotoAndPlay("leaves_loop")
	}
	this.frame_61 = function() {
		this.stop()
	}
	this.frame_178 = function() {
		this.gotoAndPlay("snow_loop")
	}
	this.frame_195 = function() {
		this.stop()
	}
	this.frame_337 = function() {
		this.gotoAndPlay("ice_loop")
	}
	this.frame_364 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(48).call(this.frame_48).wait(13).call(this.frame_61).wait(117).call(this.frame_178).wait(17).call(this.frame_195).wait(142).call(this.frame_337).wait(27).call(this.frame_364));

	// Layer 1
	this.arrowAWD = new lib.MeterArrowAWD();
	this.arrowAWD.setTransform(0.9,0,1,1,0,0,180,-5.2,0);

	this.timeline.addTween(cjs.Tween.get(this.arrowAWD).wait(1).to({y:50},15).to({y:44},7).to({y:60},5).to({y:56},5).wait(4).to({y:45},6).to({y:50},5).wait(1).to({y:0},12).wait(1).to({y:113},7).to({y:101},7).to({y:128},12).to({y:120},3).to({y:86},9).to({y:125},6).to({y:113},14).wait(1).to({y:126},7).to({y:128},6).to({y:106},20).to({y:136},8).to({y:125},7).to({y:113},9).wait(1).to({y:0},16).wait(1).to({y:173},20).to({y:141},8).to({y:146},6).to({y:135},7).to({y:165.5},11).to({y:146},8).to({y:150},7).to({y:168},14).to({y:151},9).to({y:128},8).to({y:161},10).to({y:146},10).to({y:150.5},7).to({y:138},3).to({y:173},13).wait(1).to({y:0},26).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1.6,-1.9,3.4,3.9);
p.frameBounds = [rect, rect, new cjs.Rectangle(-2.1,0.9,4.4,4.9), new cjs.Rectangle(-2.1,4.2,4.4,4.9), new cjs.Rectangle(-2.1,7.6,4.4,4.9), new cjs.Rectangle(-2.1,10.9,4.4,4.9), new cjs.Rectangle(-2.1,14.2,4.4,4.9), new cjs.Rectangle(-2.1,17.6,4.4,4.9), new cjs.Rectangle(-2.1,20.9,4.4,4.9), new cjs.Rectangle(-2.1,24.2,4.4,4.9), new cjs.Rectangle(-2.1,27.6,4.4,4.9), new cjs.Rectangle(-2.1,30.9,4.4,4.9), new cjs.Rectangle(-2.1,34.2,4.4,4.9), new cjs.Rectangle(-2.1,37.6,4.4,4.9), new cjs.Rectangle(-2.1,40.9,4.4,4.9), new cjs.Rectangle(-2.1,44.2,4.4,4.9), new cjs.Rectangle(-1.6,48.1,3.4,3.9), new cjs.Rectangle(-2.1,46.7,4.4,4.9), new cjs.Rectangle(-2.1,45.9,4.4,4.9), new cjs.Rectangle(-2.1,45,4.4,4.9), new cjs.Rectangle(-2.1,44.1,4.4,4.9), new cjs.Rectangle(-2.1,43.3,4.4,4.9), new cjs.Rectangle(-2.1,42.4,4.4,4.9), new cjs.Rectangle(-1.6,42.1,3.4,3.9), new cjs.Rectangle(-2.1,44.8,4.4,4.9), new cjs.Rectangle(-2.1,48,4.4,4.9), new cjs.Rectangle(-2.1,51.2,4.4,4.9), new cjs.Rectangle(-2.1,54.4,4.4,4.9), new cjs.Rectangle(-1.6,58.1,3.4,3.9), new cjs.Rectangle(-2.1,56.8,4.4,4.9), new cjs.Rectangle(-2.1,56,4.4,4.9), new cjs.Rectangle(-2.1,55.2,4.4,4.9), new cjs.Rectangle(-2.1,54.4,4.4,4.9), new cjs.Rectangle(-1.6,54.1,3.4,3.9), rect=new cjs.Rectangle(-2.1,53.6,4.4,4.9), rect, rect, new cjs.Rectangle(-1.6,54.1,3.4,3.9), new cjs.Rectangle(-2.1,51.7,4.4,4.9), new cjs.Rectangle(-2.1,49.9,4.4,4.9), new cjs.Rectangle(-2.1,48.1,4.4,4.9), new cjs.Rectangle(-2.1,46.2,4.4,4.9), new cjs.Rectangle(-2.1,44.4,4.4,4.9), new cjs.Rectangle(-1.6,43.1,3.4,3.9), new cjs.Rectangle(-2.1,43.6,4.4,4.9), new cjs.Rectangle(-2.1,44.6,4.4,4.9), new cjs.Rectangle(-2.1,45.6,4.4,4.9), new cjs.Rectangle(-2.1,46.6,4.4,4.9), rect=new cjs.Rectangle(-1.6,48.1,3.4,3.9), rect, new cjs.Rectangle(-2.1,43.4,4.4,4.9), new cjs.Rectangle(-2.1,39.2,4.4,4.9), new cjs.Rectangle(-2.1,35.1,4.4,4.9), new cjs.Rectangle(-2.1,30.9,4.4,4.9), new cjs.Rectangle(-2.1,26.7,4.4,4.9), new cjs.Rectangle(-2.1,22.6,4.4,4.9), new cjs.Rectangle(-2.1,18.4,4.4,4.9), new cjs.Rectangle(-2.1,14.2,4.4,4.9), new cjs.Rectangle(-2.1,10.1,4.4,4.9), new cjs.Rectangle(-2.1,5.9,4.4,4.9), new cjs.Rectangle(-2.1,1.7,4.4,4.9), rect=new cjs.Rectangle(-1.6,-1.9,3.4,3.9), rect, new cjs.Rectangle(-2.1,13.7,4.4,4.9), new cjs.Rectangle(-2.1,29.9,4.4,4.9), new cjs.Rectangle(-2.1,46,4.4,4.9), new cjs.Rectangle(-2.1,62.1,4.4,4.9), new cjs.Rectangle(-2.1,78.3,4.4,4.9), new cjs.Rectangle(-2.1,94.4,4.4,4.9), new cjs.Rectangle(-1.6,111.1,3.4,3.9), new cjs.Rectangle(-2.1,108.9,4.4,4.9), new cjs.Rectangle(-2.1,107.1,4.4,4.9), new cjs.Rectangle(-2.1,105.4,4.4,4.9), new cjs.Rectangle(-2.1,103.7,4.4,4.9), new cjs.Rectangle(-2.1,102,4.4,4.9), new cjs.Rectangle(-2.1,100.3,4.4,4.9), new cjs.Rectangle(-1.6,99.1,3.4,3.9), new cjs.Rectangle(-2.1,100.8,4.4,4.9), new cjs.Rectangle(-2.1,103.1,4.4,4.9), new cjs.Rectangle(-2.1,105.3,4.4,4.9), new cjs.Rectangle(-2.1,107.6,4.4,4.9), new cjs.Rectangle(-2.1,109.8,4.4,4.9), new cjs.Rectangle(-2.1,112.1,4.4,4.9), new cjs.Rectangle(-2.1,114.3,4.4,4.9), new cjs.Rectangle(-2.1,116.6,4.4,4.9), new cjs.Rectangle(-2.1,118.8,4.4,4.9), new cjs.Rectangle(-2.1,121.1,4.4,4.9), new cjs.Rectangle(-2.1,123.3,4.4,4.9), new cjs.Rectangle(-1.6,126.1,3.4,3.9), new cjs.Rectangle(-2.1,122.9,4.4,4.9), new cjs.Rectangle(-2.1,120.2,4.4,4.9), new cjs.Rectangle(-1.6,118.1,3.4,3.9), new cjs.Rectangle(-2.1,113.8,4.4,4.9), new cjs.Rectangle(-2.1,110,4.4,4.9), new cjs.Rectangle(-2.1,106.2,4.4,4.9), new cjs.Rectangle(-2.1,102.5,4.4,4.9), new cjs.Rectangle(-2.1,98.7,4.4,4.9), new cjs.Rectangle(-2.1,94.9,4.4,4.9), new cjs.Rectangle(-2.1,91.1,4.4,4.9), new cjs.Rectangle(-2.1,87.4,4.4,4.9), new cjs.Rectangle(-1.6,84.1,3.4,3.9), new cjs.Rectangle(-2.1,90.1,4.4,4.9), new cjs.Rectangle(-2.1,96.6,4.4,4.9), new cjs.Rectangle(-2.1,103.1,4.4,4.9), new cjs.Rectangle(-2.1,109.6,4.4,4.9), new cjs.Rectangle(-2.1,116.1,4.4,4.9), new cjs.Rectangle(-1.6,123.1,3.4,3.9), new cjs.Rectangle(-2.1,121.7,4.4,4.9), new cjs.Rectangle(-2.1,120.9,4.4,4.9), new cjs.Rectangle(-2.1,120,4.4,4.9), new cjs.Rectangle(-2.1,119.1,4.4,4.9), new cjs.Rectangle(-2.1,118.3,4.4,4.9), new cjs.Rectangle(-2.1,117.4,4.4,4.9), new cjs.Rectangle(-2.1,116.6,4.4,4.9), new cjs.Rectangle(-2.1,115.7,4.4,4.9), new cjs.Rectangle(-2.1,114.9,4.4,4.9), new cjs.Rectangle(-2.1,114,4.4,4.9), new cjs.Rectangle(-2.1,113.1,4.4,4.9), new cjs.Rectangle(-2.1,112.3,4.4,4.9), new cjs.Rectangle(-2.1,111.4,4.4,4.9), rect=new cjs.Rectangle(-1.6,111.1,3.4,3.9), rect, new cjs.Rectangle(-2.1,112.4,4.4,4.9), new cjs.Rectangle(-2.1,114.3,4.4,4.9), new cjs.Rectangle(-2.1,116.1,4.4,4.9), new cjs.Rectangle(-2.1,118,4.4,4.9), new cjs.Rectangle(-2.1,119.9,4.4,4.9), new cjs.Rectangle(-2.1,121.7,4.4,4.9), new cjs.Rectangle(-1.6,124.1,3.4,3.9), new cjs.Rectangle(-2.1,123.9,4.4,4.9), new cjs.Rectangle(-2.1,124.2,4.4,4.9), new cjs.Rectangle(-2.1,124.6,4.4,4.9), new cjs.Rectangle(-2.1,124.9,4.4,4.9), new cjs.Rectangle(-2.1,125.2,4.4,4.9), new cjs.Rectangle(-1.6,126.1,3.4,3.9), new cjs.Rectangle(-2.1,124.5,4.4,4.9), new cjs.Rectangle(-2.1,123.4,4.4,4.9), new cjs.Rectangle(-2.1,122.3,4.4,4.9), new cjs.Rectangle(-2.1,121.2,4.4,4.9), new cjs.Rectangle(-2.1,120.1,4.4,4.9), new cjs.Rectangle(-2.1,119,4.4,4.9), new cjs.Rectangle(-2.1,117.9,4.4,4.9), new cjs.Rectangle(-2.1,116.8,4.4,4.9), new cjs.Rectangle(-2.1,115.7,4.4,4.9), new cjs.Rectangle(-2.1,114.6,4.4,4.9), new cjs.Rectangle(-2.1,113.5,4.4,4.9), new cjs.Rectangle(-2.1,112.4,4.4,4.9), new cjs.Rectangle(-2.1,111.3,4.4,4.9), new cjs.Rectangle(-2.1,110.2,4.4,4.9), new cjs.Rectangle(-2.1,109.1,4.4,4.9), new cjs.Rectangle(-2.1,108,4.4,4.9), new cjs.Rectangle(-2.1,106.9,4.4,4.9), new cjs.Rectangle(-2.1,105.8,4.4,4.9), new cjs.Rectangle(-2.1,104.7,4.4,4.9), new cjs.Rectangle(-1.6,104.1,3.4,3.9), new cjs.Rectangle(-2.1,107.3,4.4,4.9), new cjs.Rectangle(-2.1,111.1,4.4,4.9), new cjs.Rectangle(-2.1,114.8,4.4,4.9), new cjs.Rectangle(-2.1,118.6,4.4,4.9), new cjs.Rectangle(-2.1,122.3,4.4,4.9), new cjs.Rectangle(-2.1,126.1,4.4,4.9), new cjs.Rectangle(-2.1,129.8,4.4,4.9), new cjs.Rectangle(-1.6,134.1,3.4,3.9), new cjs.Rectangle(-2.1,132,4.4,4.9), new cjs.Rectangle(-2.1,130.4,4.4,4.9), new cjs.Rectangle(-2.1,128.9,4.4,4.9), new cjs.Rectangle(-2.1,127.3,4.4,4.9), new cjs.Rectangle(-2.1,125.7,4.4,4.9), new cjs.Rectangle(-2.1,124.1,4.4,4.9), new cjs.Rectangle(-1.6,123.1,3.4,3.9), new cjs.Rectangle(-2.1,121.2,4.4,4.9), new cjs.Rectangle(-2.1,119.9,4.4,4.9), new cjs.Rectangle(-2.1,118.6,4.4,4.9), new cjs.Rectangle(-2.1,117.2,4.4,4.9), new cjs.Rectangle(-2.1,115.9,4.4,4.9), new cjs.Rectangle(-2.1,114.6,4.4,4.9), new cjs.Rectangle(-2.1,113.2,4.4,4.9), new cjs.Rectangle(-2.1,111.9,4.4,4.9), rect=new cjs.Rectangle(-1.6,111.1,3.4,3.9), rect, new cjs.Rectangle(-2.1,103.5,4.4,4.9), new cjs.Rectangle(-2.1,96.5,4.4,4.9), new cjs.Rectangle(-2.1,89.4,4.4,4.9), new cjs.Rectangle(-2.1,82.3,4.4,4.9), new cjs.Rectangle(-2.1,75.3,4.4,4.9), new cjs.Rectangle(-2.1,68.2,4.4,4.9), new cjs.Rectangle(-2.1,61.1,4.4,4.9), new cjs.Rectangle(-2.1,54.1,4.4,4.9), new cjs.Rectangle(-2.1,47,4.4,4.9), new cjs.Rectangle(-2.1,40,4.4,4.9), new cjs.Rectangle(-2.1,32.9,4.4,4.9), new cjs.Rectangle(-2.1,25.8,4.4,4.9), new cjs.Rectangle(-2.1,18.8,4.4,4.9), new cjs.Rectangle(-2.1,11.7,4.4,4.9), new cjs.Rectangle(-2.1,4.6,4.4,4.9), rect=new cjs.Rectangle(-1.6,-1.9,3.4,3.9), rect, new cjs.Rectangle(-2.1,6.2,4.4,4.9), new cjs.Rectangle(-2.1,14.9,4.4,4.9), new cjs.Rectangle(-2.1,23.5,4.4,4.9), new cjs.Rectangle(-2.1,32.2,4.4,4.9), new cjs.Rectangle(-2.1,40.8,4.4,4.9), new cjs.Rectangle(-2.1,49.5,4.4,4.9), new cjs.Rectangle(-2.1,58.1,4.4,4.9), new cjs.Rectangle(-2.1,66.8,4.4,4.9), new cjs.Rectangle(-2.1,75.4,4.4,4.9), new cjs.Rectangle(-2.1,84.1,4.4,4.9), new cjs.Rectangle(-2.1,92.7,4.4,4.9), new cjs.Rectangle(-2.1,101.4,4.4,4.9), new cjs.Rectangle(-2.1,110,4.4,4.9), new cjs.Rectangle(-2.1,118.7,4.4,4.9), new cjs.Rectangle(-2.1,127.3,4.4,4.9), new cjs.Rectangle(-2.1,136,4.4,4.9), new cjs.Rectangle(-2.1,144.6,4.4,4.9), new cjs.Rectangle(-2.1,153.3,4.4,4.9), new cjs.Rectangle(-2.1,161.9,4.4,4.9), new cjs.Rectangle(-1.6,171.1,3.4,3.9), new cjs.Rectangle(-2.1,166.6,4.4,4.9), new cjs.Rectangle(-2.1,162.6,4.4,4.9), new cjs.Rectangle(-2.1,158.6,4.4,4.9), new cjs.Rectangle(-2.1,154.6,4.4,4.9), new cjs.Rectangle(-2.1,150.6,4.4,4.9), new cjs.Rectangle(-2.1,146.6,4.4,4.9), new cjs.Rectangle(-2.1,142.6,4.4,4.9), new cjs.Rectangle(-1.6,139.1,3.4,3.9), new cjs.Rectangle(-2.1,139.4,4.4,4.9), new cjs.Rectangle(-2.1,140.2,4.4,4.9), new cjs.Rectangle(-2.1,141.1,4.4,4.9), new cjs.Rectangle(-2.1,141.9,4.4,4.9), new cjs.Rectangle(-2.1,142.7,4.4,4.9), new cjs.Rectangle(-1.6,144.1,3.4,3.9), new cjs.Rectangle(-2.1,142,4.4,4.9), new cjs.Rectangle(-2.1,140.4,4.4,4.9), new cjs.Rectangle(-2.1,138.9,4.4,4.9), new cjs.Rectangle(-2.1,137.3,4.4,4.9), new cjs.Rectangle(-2.1,135.7,4.4,4.9), new cjs.Rectangle(-2.1,134.1,4.4,4.9), new cjs.Rectangle(-1.6,133.1,3.4,3.9), new cjs.Rectangle(-2.1,135.3,4.4,4.9), new cjs.Rectangle(-2.1,138.1,4.4,4.9), new cjs.Rectangle(-2.1,140.9,4.4,4.9), new cjs.Rectangle(-2.1,143.7,4.4,4.9), new cjs.Rectangle(-2.1,146.4,4.4,4.9), new cjs.Rectangle(-2.1,149.2,4.4,4.9), new cjs.Rectangle(-2.1,152,4.4,4.9), new cjs.Rectangle(-2.1,154.8,4.4,4.9), new cjs.Rectangle(-2.1,157.5,4.4,4.9), new cjs.Rectangle(-2.1,160.3,4.4,4.9), new cjs.Rectangle(-1.6,163.6,3.4,3.9), new cjs.Rectangle(-2.1,160.6,4.4,4.9), new cjs.Rectangle(-2.1,158.2,4.4,4.9), new cjs.Rectangle(-2.1,155.8,4.4,4.9), new cjs.Rectangle(-2.1,153.3,4.4,4.9), new cjs.Rectangle(-2.1,150.9,4.4,4.9), new cjs.Rectangle(-2.1,148.5,4.4,4.9), new cjs.Rectangle(-2.1,146,4.4,4.9), new cjs.Rectangle(-1.6,144.1,3.4,3.9), new cjs.Rectangle(-2.1,144.1,4.4,4.9), new cjs.Rectangle(-2.1,144.7,4.4,4.9), new cjs.Rectangle(-2.1,145.3,4.4,4.9), new cjs.Rectangle(-2.1,145.9,4.4,4.9), new cjs.Rectangle(-2.1,146.4,4.4,4.9), new cjs.Rectangle(-2.1,147,4.4,4.9), new cjs.Rectangle(-1.6,148.1,3.4,3.9), new cjs.Rectangle(-2.1,148.9,4.4,4.9), new cjs.Rectangle(-2.1,150.1,4.4,4.9), new cjs.Rectangle(-2.1,151.4,4.4,4.9), new cjs.Rectangle(-2.1,152.7,4.4,4.9), new cjs.Rectangle(-2.1,154,4.4,4.9), new cjs.Rectangle(-2.1,155.3,4.4,4.9), new cjs.Rectangle(-2.1,156.6,4.4,4.9), new cjs.Rectangle(-2.1,157.9,4.4,4.9), new cjs.Rectangle(-2.1,159.1,4.4,4.9), new cjs.Rectangle(-2.1,160.4,4.4,4.9), new cjs.Rectangle(-2.1,161.7,4.4,4.9), new cjs.Rectangle(-2.1,163,4.4,4.9), new cjs.Rectangle(-2.1,164.3,4.4,4.9), new cjs.Rectangle(-1.6,166.1,3.4,3.9), new cjs.Rectangle(-2.1,163.7,4.4,4.9), new cjs.Rectangle(-2.1,161.8,4.4,4.9), new cjs.Rectangle(-2.1,159.9,4.4,4.9), new cjs.Rectangle(-2.1,158,4.4,4.9), new cjs.Rectangle(-2.1,156.1,4.4,4.9), new cjs.Rectangle(-2.1,154.2,4.4,4.9), new cjs.Rectangle(-2.1,152.4,4.4,4.9), new cjs.Rectangle(-2.1,150.5,4.4,4.9), new cjs.Rectangle(-1.6,149.1,3.4,3.9), new cjs.Rectangle(-2.1,145.7,4.4,4.9), new cjs.Rectangle(-2.1,142.8,4.4,4.9), new cjs.Rectangle(-2.1,140,4.4,4.9), new cjs.Rectangle(-2.1,137.1,4.4,4.9), new cjs.Rectangle(-2.1,134.2,4.4,4.9), new cjs.Rectangle(-2.1,131.3,4.4,4.9), new cjs.Rectangle(-2.1,128.5,4.4,4.9), new cjs.Rectangle(-1.6,126.1,3.4,3.9), new cjs.Rectangle(-2.1,128.9,4.4,4.9), new cjs.Rectangle(-2.1,132.2,4.4,4.9), new cjs.Rectangle(-2.1,135.5,4.4,4.9), new cjs.Rectangle(-2.1,138.8,4.4,4.9), new cjs.Rectangle(-2.1,142.1,4.4,4.9), new cjs.Rectangle(-2.1,145.4,4.4,4.9), new cjs.Rectangle(-2.1,148.7,4.4,4.9), new cjs.Rectangle(-2.1,152,4.4,4.9), new cjs.Rectangle(-2.1,155.3,4.4,4.9), new cjs.Rectangle(-1.6,159.1,3.4,3.9), new cjs.Rectangle(-2.1,157.1,4.4,4.9), new cjs.Rectangle(-2.1,155.6,4.4,4.9), new cjs.Rectangle(-2.1,154.1,4.4,4.9), new cjs.Rectangle(-2.1,152.6,4.4,4.9), new cjs.Rectangle(-2.1,151.1,4.4,4.9), new cjs.Rectangle(-2.1,149.6,4.4,4.9), new cjs.Rectangle(-2.1,148.1,4.4,4.9), new cjs.Rectangle(-2.1,146.6,4.4,4.9), new cjs.Rectangle(-2.1,145.1,4.4,4.9), new cjs.Rectangle(-1.6,144.1,3.4,3.9), new cjs.Rectangle(-2.1,144.2,4.4,4.9), new cjs.Rectangle(-2.1,144.9,4.4,4.9), new cjs.Rectangle(-2.1,145.5,4.4,4.9), new cjs.Rectangle(-2.1,146.1,4.4,4.9), new cjs.Rectangle(-2.1,146.8,4.4,4.9), new cjs.Rectangle(-2.1,147.4,4.4,4.9), new cjs.Rectangle(-1.6,148.6,3.4,3.9), new cjs.Rectangle(-2.1,143.9,4.4,4.9), new cjs.Rectangle(-2.1,139.7,4.4,4.9), new cjs.Rectangle(-1.6,136.1,3.4,3.9), new cjs.Rectangle(-2.1,138.3,4.4,4.9), new cjs.Rectangle(-2.1,141,4.4,4.9), new cjs.Rectangle(-2.1,143.7,4.4,4.9), new cjs.Rectangle(-2.1,146.3,4.4,4.9), new cjs.Rectangle(-2.1,149,4.4,4.9), new cjs.Rectangle(-2.1,151.7,4.4,4.9), new cjs.Rectangle(-2.1,154.4,4.4,4.9), new cjs.Rectangle(-2.1,157.1,4.4,4.9), new cjs.Rectangle(-2.1,159.8,4.4,4.9), new cjs.Rectangle(-2.1,162.5,4.4,4.9), new cjs.Rectangle(-2.1,165.2,4.4,4.9), new cjs.Rectangle(-2.1,167.9,4.4,4.9), rect=new cjs.Rectangle(-1.6,171.1,3.4,3.9), rect, new cjs.Rectangle(-2.1,163.9,4.4,4.9), new cjs.Rectangle(-2.1,157.3,4.4,4.9), new cjs.Rectangle(-2.1,150.6,4.4,4.9), new cjs.Rectangle(-2.1,144,4.4,4.9), new cjs.Rectangle(-2.1,137.3,4.4,4.9), new cjs.Rectangle(-2.1,130.7,4.4,4.9), new cjs.Rectangle(-2.1,124,4.4,4.9), new cjs.Rectangle(-2.1,117.3,4.4,4.9), new cjs.Rectangle(-2.1,110.7,4.4,4.9), new cjs.Rectangle(-2.1,104,4.4,4.9), new cjs.Rectangle(-2.1,97.4,4.4,4.9), new cjs.Rectangle(-2.1,90.7,4.4,4.9), new cjs.Rectangle(-2.1,84.1,4.4,4.9), new cjs.Rectangle(-2.1,77.4,4.4,4.9), new cjs.Rectangle(-2.1,70.8,4.4,4.9), new cjs.Rectangle(-2.1,64.1,4.4,4.9), new cjs.Rectangle(-2.1,57.5,4.4,4.9), new cjs.Rectangle(-2.1,50.8,4.4,4.9), new cjs.Rectangle(-2.1,44.2,4.4,4.9), new cjs.Rectangle(-2.1,37.5,4.4,4.9), new cjs.Rectangle(-2.1,30.8,4.4,4.9), new cjs.Rectangle(-2.1,24.2,4.4,4.9), new cjs.Rectangle(-2.1,17.5,4.4,4.9), new cjs.Rectangle(-2.1,10.9,4.4,4.9), new cjs.Rectangle(-2.1,4.2,4.4,4.9), new cjs.Rectangle(-1.6,-1.9,3.4,3.9)];


(lib.mcCTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Arrow
	this.arrow_mc = new lib.arrow();
	this.arrow_mc.setTransform(0,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.arrow_mc}]}).wait(2));

	// Layer 2
	this.instance = new lib.btn1();
	this.instance.setTransform(9,9,0.371,0.371,0,0,0,24.3,24.3);

	this.instance_1 = new lib.btn2();
	this.instance_1.setTransform(9,9,0.371,0.371,0,0,0,24.3,24.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,18,18);
p.frameBounds = [rect, rect];


(lib.Meter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"in":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_188 = function() {
		this.stop();
		meterEnded = true;
		//this.parent.GO.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(188).call(this.frame_188));

	// Layer 9
	this.AWDtxt = new lib.AWDTitle();
	this.AWDtxt.setTransform(22.1,-1.7,1,1,-89.9,0,0,15.2,8);
	this.AWDtxt.alpha = 0;
	this.AWDtxt._off = true;

	this.timeline.addTween(cjs.Tween.get(this.AWDtxt).wait(81).to({_off:false},0).to({alpha:1},19).wait(61).to({alpha:0},17).to({_off:true},1).wait(10));

	// Layer 8
	this.you = new lib.YouTitle();
	this.you.setTransform(-23.8,-0.7,1,1,-89.9,0,0,14,8);

	this.timeline.addTween(cjs.Tween.get(this.you).wait(81).to({alpha:0},19).to({_off:true},1).wait(88));

	// Layer 1
	this.awd = new lib.awdMC();
	this.awd.setTransform(8.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.awd}]}).wait(189));

	// Layer 2
	this.arrowYou = new lib.MeterArrowYou();
	this.arrowYou.setTransform(11.7,0,2.074,2.074,0,0,180,-5.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.arrowYou}]}).wait(189));

	// Layer 6
	this.instance = new lib.MeterBar();
	this.instance.setTransform(1,91,0.701,1,0,0,0,9.5,90.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(189));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.3,-31.2,44.9,214.9);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-34.3,-31.2,62,214.9), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-12.3,-20.2,40,203.9), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-12.3,-4.2,22.9,187.9), rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.gameMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{game:1,auto:6,auto_out:16});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_14 = function() {
		//this.stop();
		//this.playAuto = true;
		//playAutoScene();
		//autoSurfaces();
	}
	this.frame_68 = function() {
		console.log("wtf")
		exportRoot.gotoAndPlay("end_frame");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(54).call(this.frame_68).wait(24));

	// percentages
	this.frontPercentage = new lib.PercentageBar();
	this.frontPercentage.setTransform(-121.2,10,1,1,0,0,0,-48,-2.9);
	this.frontPercentage.alpha = 0;

	this.rearPercentage = new lib.PercentageBar();
	this.rearPercentage.setTransform(-330.2,10,1,1,0,0,0,-48,-2.9);
	this.rearPercentage.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.rearPercentage},{t:this.frontPercentage}]}).wait(93));

	// Go
	this.GO = new lib.GO();
	this.GO.setTransform(1.5,3.1,1,1,0,0,0,-0.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.GO}]}).wait(93));

	// inCar2
	this.insideCar = new lib.insideCar2();
	this.insideCar.setTransform(-81.1,10.7,0.97,0.97);
	this.insideCar.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.insideCar).to({_off:true},24).wait(69));

	// car
	this.mondeo = new lib.carMC();
	this.mondeo.setTransform(-456.7,10,0.97,0.97);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mondeo}]}).wait(93));

	// useYourTxt
	this.useYourTxt = new lib.Copy5();
	this.useYourTxt.setTransform(32.4,26.7);
	this.useYourTxt.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.useYourTxt}]}).wait(93));

	// canYou
	this.canYouTxt = new lib.Copy4();
	this.canYouTxt.setTransform(32.4,16.7);
	this.canYouTxt.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.canYouTxt}]}).wait(93));

	// autoplayTxt
	this.mondeoAutoTxt = new lib.msg2();
	this.mondeoAutoTxt.setTransform(-90,6.8);
	this.mondeoAutoTxt.alpha = 0;
	this.mondeoAutoTxt._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mondeoAutoTxt).wait(6).to({_off:false},0).to({_off:true},16).wait(71));

	// meter
	this.meterMC = new lib.Meter();
	this.meterMC.setTransform(69.7,0.7,1,1,90,0,0,-10,85.8);
	this.meterMC.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.meterMC).to({_off:true},4).wait(89));

	// ice
	this.ice_anim = new lib.iceMC();
	this.ice_anim.setTransform(399,2.1,1,1,0,0,0,593.4,-1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ice_anim}]}).wait(93));

	// snow
	this.snow_anim = new lib.snowMC();
	this.snow_anim.setTransform(400,5.1,1,1,0,0,0,564.5,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.snow_anim}]}).wait(93));

	// leaves
	this.leaves_anim = new lib.lvs();
	this.leaves_anim.setTransform(388.1,5,1,1,0,0,0,577.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.leaves_anim}]}).wait(93));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,153,153,0)").s().p("Eg43AHBIAAuCMBxuAAAIAAOCg");
	this.shape.setTransform(3.8,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(93));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-528,-42.9,1710.1,93);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;