var loadAssets = function () {
	var container_dc = document.getElementById("container_dc");

	var findOutCTA = document.createElement("div");
	findOutCTA.setAttribute("id", "findOutCTA");
	container_dc.appendChild(findOutCTA);

	var arrow_btn = document.createElement("div");
	arrow_btn.setAttribute("id", "arrow_btn");
	findOutCTA.appendChild(arrow_btn);

	var plinth = document.createElement("div");
	plinth.setAttribute("id", "plinth");
	container_dc.appendChild(plinth);

	var carModelContainer = document.createElement("div");
	carModelContainer.setAttribute("id", "carModelContainer");
	container_dc.appendChild(carModelContainer);
	
	var carModel = document.createElement("div");
	carModel.setAttribute("id", "carModel");
	carModelContainer.appendChild(carModel);
	
	var carModel_a = document.createElement("div");
	carModel_a.setAttribute("id", "carModel_a");
	carModelContainer.appendChild(carModel_a);
	
	var scriptSprite = document.createElement("div");
	scriptSprite.setAttribute("id", "scriptSprite");
	container_dc.appendChild(scriptSprite);
	
	var car = document.createElement("div");
	car.setAttribute("id", "car");
	container_dc.appendChild(car);

	var canvas = document.createElement("canvas");
	canvas.setAttribute("id", "canvas");
	canvas.setAttribute("width", 300);
	canvas.setAttribute("height", 250);
	canvas.setAttribute("style", "background-color:#fff");
	container_dc.appendChild(canvas);

	var bg = document.createElement("div");
	bg.setAttribute("id", "bg");
	container_dc.appendChild(bg);
}