var loadAssets = function () {
	
	var script_container = document.createElement("div");
	script_container.setAttribute("id", "script_container");
	container_dc.appendChild(script_container);
			
	var script_whiteBG = document.createElement("div");
	script_whiteBG.setAttribute("id", "script_whiteBG");
	script_container.appendChild(script_whiteBG);
	
	var script_blue = document.createElement("div");
	script_blue.setAttribute("id", "script_blue");
	script_container.appendChild(script_blue);
	
	var script_white = document.createElement("div");
	script_white.setAttribute("id", "script_white");
	script_container.appendChild(script_white);
	
	var road_container = document.createElement("div");
	road_container.setAttribute("id", "road_container");
	container_dc.appendChild(road_container);
	
	var road = document.createElement("div");
	road.setAttribute("id", "road");
	road_container.appendChild(road);
	
	var lane_container = document.createElement("div");
	lane_container.setAttribute("id", "lane_container");
	road_container.appendChild(lane_container);
	
	var car_container = document.createElement("div");
	car_container.setAttribute("id", "car_container");
	container_dc.appendChild(car_container);
	
	var car_orange = document.createElement("div");
	car_orange.setAttribute("id", "car_orange");
	car_container.appendChild(car_orange);
	
	var car_yellow = document.createElement("div");
	car_yellow.setAttribute("id", "car_yellow");
	car_container.appendChild(car_yellow);
	
	var car_red = document.createElement("div");
	car_red.setAttribute("id", "car_red");
	car_container.appendChild(car_red);
	
	var cta = document.createElement("div");
	cta.setAttribute("id", "cta");
	container_dc.appendChild(cta);

	var cta_blue = document.createElement("div");
	cta_blue.setAttribute("id", "cta_blue");
	container_dc.appendChild(cta_blue);
	
	var ctaArrowContainer = document.createElement("div");
	ctaArrowContainer.setAttribute("id", "ctaArrowContainer");
	cta.appendChild(ctaArrowContainer);
	
	var ctaArrow_blue = document.createElement("div");
	ctaArrow_blue.setAttribute("id", "ctaArrow_blue");
	ctaArrowContainer.appendChild(ctaArrow_blue);
	
	var ctaArrow = document.createElement("div");
	ctaArrow.setAttribute("id", "ctaArrow");
	ctaArrowContainer.appendChild(ctaArrow);
	
	var plinth = document.createElement("div");
	plinth.setAttribute("id", "plinth");
	container_dc.appendChild(plinth);
	
	var msg1 = document.createElement("div");
	msg1.setAttribute("id", "msg1");
	container_dc.appendChild(msg1);
	
	var carModelContainer = document.createElement("div");
	carModelContainer.setAttribute("id", "carModelContainer");
	container_dc.appendChild(carModelContainer);
	
	var carModel_blue = document.createElement("div");
	carModel_blue.setAttribute("id", "carModel_blue");
	carModelContainer.appendChild(carModel_blue);
	
	var carModel_white = document.createElement("div");
	carModel_white.setAttribute("id", "carModel_white");
	carModelContainer.appendChild(carModel_white);

}
	//Expanded
var loadExpandedAssets = function()	{
	console.log("loadExpandedAssets");
	var close_btn = document.createElement("div");
	close_btn.setAttribute("id", "close_btn");
	ex_ad_container.appendChild(close_btn);
	
	var ex_cta = document.createElement("div");
	ex_cta.setAttribute("id", "ex_cta");
	ex_ad_container.appendChild(ex_cta);

	var ex_ctaArrowContainer = document.createElement("div");
	ex_ctaArrowContainer.setAttribute("id", "ex_ctaArrowContainer");
	ex_cta.appendChild(ex_ctaArrowContainer);
	
	var ex_ctaArrow = document.createElement("div");
	ex_ctaArrow.setAttribute("id", "ex_ctaArrow");
	ex_ctaArrowContainer.appendChild(ex_ctaArrow);
	
	var tooltip = document.createElement("div");
	tooltip.setAttribute("id", "tooltip");
	ex_ad_container.appendChild(tooltip);
	
	var scriptSprite = document.createElement("div");
	scriptSprite.setAttribute("id", "scriptSprite");
	ex_ad_container.appendChild(scriptSprite);
	
	var ex_carModelContainer = document.createElement("div");
	ex_carModelContainer.setAttribute("id", "ex_carModelContainer");
	ex_ad_container.appendChild(ex_carModelContainer);
	
	var ex_carModel = document.createElement("div");
	ex_carModel.setAttribute("id", "ex_carModel");
	ex_carModelContainer.appendChild(ex_carModel);
	
	var ex_plinth = document.createElement("div");
	ex_plinth.setAttribute("id", "ex_plinth");
	ex_ad_container.appendChild(ex_plinth);
	
	var hud = document.createElement("div");
	hud.setAttribute("id", "hud");
	ex_ad_container.appendChild(hud);
	
	/*var speedometer = document.createElement("div");
	speedometer.setAttribute("id", "speedometer");
	hud.appendChild(speedometer);*/
	
	var timeDisplay = document.createElement("div");
	timeDisplay.setAttribute("id", "timeDisplay");
	hud.appendChild(timeDisplay);
	
	var timeToBeat = document.createElement("div");
	timeToBeat.setAttribute("id", "timeToBeat");
	hud.appendChild(timeToBeat);
	
	var endScreen = document.createElement("div");
	endScreen.setAttribute("id", "endScreen");
	ex_ad_container.appendChild(endScreen);
	
	var ex_car_orange = document.createElement("div");
	ex_car_orange.setAttribute("id", "ex_car_orange");
	endScreen.appendChild(ex_car_orange);
	
	var ex_car_yellow = document.createElement("div");
	ex_car_yellow.setAttribute("id", "ex_car_yellow");
	endScreen.appendChild(ex_car_yellow);
	
	var ex_car_red = document.createElement("div");
	ex_car_red.setAttribute("id", "ex_car_red");
	endScreen.appendChild(ex_car_red);
		
	var results = document.createElement("div");
	results.setAttribute("id", "results");
	endScreen.appendChild(results);
	
	ex_addEventListeners();

}