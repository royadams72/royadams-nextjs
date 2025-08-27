// JavaScript Document
function setUpText(){
	
	/////TEXT FOR INTRO///////////////////////////
	
	var introTxt = exportRoot.introTxt
	
	introTxt.text_1 = new createjs.Text("ALL-NEW FORD MONDEO", "14px FordAntennaRegular", "#FFFFFF");
	introTxt.text_1.setTransform(-139,-30);
	introTxt.addChild(introTxt.text_1);
	
	introTxt.text_2 = new createjs.Text("Can you outsmart Intelligent All-Wheel Drive?", "12px FordAntennaRegular", "#FFFFFF");
	introTxt.text_2.lineHeight = 14;
	introTxt.text_2.setTransform(-139,12);
	introTxt.addChild(introTxt.text_2);
	
	
	/////TEXT FOR THE GAME///////////////////////////
	var canYouTxt = exportRoot.game_anim.canYouTxt
	canYouTxt.text = new createjs.Text("Can you react to the road as\nfast as Intelligent All-Wheel Drive?", "14px FordAntennaRegular", "#FFFFFF");
	canYouTxt.text.textAlign = "center";
	canYouTxt.text.lineHeight = 17;
	canYouTxt.setTransform(50,-10)
	//canYouTxt.x = 50;
	//canYouTxt.y = -10;
	canYouTxt.addChild(canYouTxt.text);
	
	var intructions = exportRoot.game_anim.useYourTxt
	intructions.text = new createjs.Text("Use your mouse to distribute power \nbetween the front and rear", "14px FordAntennaRegular", "#FFFFFF");
	intructions.text.textAlign = "center";
	intructions.text.lineHeight = 17;
	intructions.setTransform(40,-10);
	//intructions.x = 40;
	//intructions.y = -10;
	intructions.addChild(intructions.text);
	console.log(intructions.x);
	
	
	window.rearPercentage = exportRoot.game_anim.rearPercentage;
	rearPercentage._copy = new createjs.Text("100%", "12px FordAntennaRegular", "#FFFFFF");
	rearPercentage._copy.textAlign = "right";
	rearPercentage._copy.setTransform(-19.6,-15.7);
	rearPercentage.addChild(rearPercentage._copy);
	
	window.frontPercentage = exportRoot.game_anim.frontPercentage;
	frontPercentage._copy = new createjs.Text("100%", "12px FordAntennaRegular", "#FFFFFF");
	frontPercentage._copy.textAlign = "right";
	frontPercentage._copy.setTransform(-19.6,-15.7);
	frontPercentage.addChild(frontPercentage._copy);
	
	/*the text with arrows "Find out more" and "Intelligent All-Wheel Drive" I had to handle differently 
	  due to display issues across browsers change the value within createTextNode*/
	findOutMoreDiv = document.createElement('div');
	findOutMoreDiv.style.height = '20px';
	findOutMoreDiv.style.width = '100px';
	findOutMoreDiv.setAttribute("id","findOutMore");
	findOutMoreDiv.style.position = "absolute";
	findOutMoreDiv.style.top =300;//do not edit
	findOutMoreDiv.style.left = 0;
	var t = document.createTextNode("Find out more"); 
	findOutMoreDiv.appendChild(t);  
	document.getElementById("container").appendChild(findOutMoreDiv);
	var gg = new createjs.DOMElement(findOutMoreDiv);
	exportRoot.cta_mc.addChild(gg);
	
	IntelligentDiv = document.createElement('div');
	IntelligentDiv.style.height = '20px';
	IntelligentDiv.style.width = '200px';
	IntelligentDiv.setAttribute("id","IntelligentDiv");
	IntelligentDiv.style.position = "absolute";
	IntelligentDiv.style.top =340;//do not edit
	IntelligentDiv.style.left = 0;
	var t2 = document.createTextNode("Intelligent All-Wheel Drive"); 
	IntelligentDiv.appendChild(t2);  
	document.getElementById("container").appendChild(IntelligentDiv);
	var gg2 = new createjs.DOMElement(IntelligentDiv);

	exportRoot.intell.addChild(gg2);
	///////////////TEXT FOR THE METER ANIMATION////////////////////////
	            
	var youTxt = exportRoot.game_anim.meterMC.you;
	youTxt.text = new createjs.Text("YOU", "10px FordAntennaRegular", "#FFFFFF");
	youTxt.addChild(youTxt.text);
	//new lib.AWDTitle();
	var awdTxt = exportRoot.game_anim.meterMC.AWDtxt;
	awdTxt.text = new createjs.Text("AWD", "10px FordAntennaRegular", "#FFFFFF");
	awdTxt.addChild(awdTxt.text);
	
	
	var GoTxtContainer = exportRoot.game_anim.GO
	//GoTxtContainer.y= 20;
	GoTxtContainer.width = 134;
	GoTxtContainer.height = 78;
	//GoTxtContainer.regX =  GoTxtContainer.width/2;
	//GoTxtContainer.regY = GoTxtContainer.height/2;
	GoTxtContainer.y = 10
	GoTxtContainer.x = -70;
	GoTxtContainer.text = new createjs.Text("GO", "70px FordAntennaRegular", "#FFFFFF");
	GoTxtContainer.text.regX =  GoTxtContainer.width/2;
	GoTxtContainer.text.regX =  GoTxtContainer.height/2;
	GoTxtContainer.text.x = -15;
	GoTxtContainer.text.y = -45;
	GoTxtContainer.addChild(GoTxtContainer.text);
	
	GoTxtContainer.scaleX = GoTxtContainer.scaleY = .2;
	GoTxtContainer.alpha = 0;
	//exportRoot.introTxt.addChild(GoTxtContainer);
	
	console.log(GoTxtContainer.y);
	
	/////TEXT FOR AUTO PLAY///////////////////////////
	var autoTxt = exportRoot.game_anim.mondeoAutoTxt;
	autoTxt.text = new createjs.Text("Mondeo automatically adjusts to the road,\ndistributing power between the front and rear", "14px FordAntennaRegular", "#FFFFFF");
	autoTxt.text.setTransform(-2.1,-19.9);
	autoTxt.text.textAlign = "center";
	autoTxt.addChild(autoTxt.text);
	
	/////TEXT FOR END FRAMES///////////////////////////
	window.percentage = exportRoot.percentageText;
	percentage._copy = new createjs.Text("24% accuracy", "20px FordAntennaRegular", "#FFFFFF");
	percentage._copy.setTransform(1,5);
	percentage.addChild(percentage._copy);
	
	window.scoreMsg = exportRoot.scoreMsg;
	scoreMsg.endMsg = new createjs.Text("Sorry, you’re not nimble enough.", "16px FordAntennaRegular", "#FFFFFF");
	scoreMsg.endMsg.setTransform(0,26);
	scoreMsg.addChild(scoreMsg.endMsg);
	
	var allNewTxt2 = exportRoot.allNewTxt2;
	allNewTxt2.text = new createjs.Text("ALL NEW FORD MONDEO", "18px FordAntennaRegular", "#FFFFFF");
	//percentage._copy.setTransform(1,5);
	allNewTxt2.addChild(allNewTxt2.text);
	
	var autoAdjustsTxt = exportRoot.autoAdjustsTxt;
	autoAdjustsTxt.text = new createjs.Text("Automatically adjusts to the road\n60 times a second", "14px FordAntennaRegular", "#FFFFFF");
	autoAdjustsTxt.text.setTransform(-11.9,-1.9);
	autoAdjustsTxt.addChild(autoAdjustsTxt.text);
	
	
	window.playBtnDiv = document.createElement('div');
	playBtnDiv.style.height = '30px';
	playBtnDiv.style.width = '80px';
	playBtnDiv.setAttribute("id","playBtnDiv");
	playBtnDiv.style.position = "absolute";
	playBtnDiv.style.top = 300;//do not edit
	playBtnDiv.style.left = 0;
   
	//playBtnDiv.appendChild(btn);  
	var t3 = document.createTextNode("PLAY");
	playBtnDiv.appendChild(t3);  

	document.getElementById("container").appendChild(playBtnDiv);
	var gg3 = new createjs.DOMElement(playBtnDiv);
	exportRoot.playBtn.addChild(gg3);
	
}