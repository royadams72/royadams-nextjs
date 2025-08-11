var loadAssets = function () {
  //Div that holds car and shards
  var car_shards = document.createElement("div");
  car_shards.setAttribute("id", "car_shards");
  container_dc.appendChild(car_shards);

  var car = document.createElement("div");
  car.setAttribute("id", "car");
  car_shards.appendChild(car);

  var leftShardContainer = document.createElement("div");
  leftShardContainer.setAttribute("id", "leftShardContainer");
  car_shards.appendChild(leftShardContainer);

  var shard1 = document.createElement("div");
  shard1.setAttribute("id", "shard1");
  shard1.className = "shardsleft";
  leftShardContainer.appendChild(shard1);

  var shard2 = document.createElement("div");
  shard2.setAttribute("id", "shard2");
  shard2.className = "shardsleft";
  leftShardContainer.appendChild(shard2);

  var shard3 = document.createElement("div");
  shard3.setAttribute("id", "shard3");
  shard3.className = "shardsleft";
  leftShardContainer.appendChild(shard3);

  //Shards on right side of car
  var rightShardContainer = document.createElement("div");
  rightShardContainer.setAttribute("id", "rightShardContainer");
  car_shards.appendChild(rightShardContainer);

  var shard5 = document.createElement("div");
  shard5.setAttribute("id", "shard5");
  rightShardContainer.appendChild(shard5);

  var shard7 = document.createElement("div");
  shard7.setAttribute("id", "shard7");
  rightShardContainer.appendChild(shard7);

  var shard6 = document.createElement("div");
  shard6.setAttribute("id", "shard6");
  rightShardContainer.appendChild(shard6);

  var shard10 = document.createElement("div");
  shard10.setAttribute("id", "shard10");
  rightShardContainer.appendChild(shard10);

  var shard9 = document.createElement("div");
  shard9.setAttribute("id", "shard9");
  rightShardContainer.appendChild(shard9);

  var shard8 = document.createElement("div");
  shard8.setAttribute("id", "shard8");
  rightShardContainer.appendChild(shard8);

  var shard12 = document.createElement("div");
  shard12.setAttribute("id", "shard12");
  rightShardContainer.appendChild(shard12);

  var shard11 = document.createElement("div");
  shard11.setAttribute("id", "shard11");
  rightShardContainer.appendChild(shard11);

  var shard4 = document.createElement("div");
  shard4.setAttribute("id", "shard4");
  rightShardContainer.appendChild(shard4);
  //End right side
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

  var scriptSprite = document.createElement("div");
  scriptSprite.setAttribute("id", "scriptSprite");
  container_dc.appendChild(scriptSprite);

  /*
	var car = document.createElement("div");
	car.setAttribute("id", "car");
	container_dc.appendChild(car);

	var carModel_a = document.createElement("div");
	carModel_a.setAttribute("id", "carModel_a");
	carModelContainer.appendChild(carModel_a);


	*/
};
