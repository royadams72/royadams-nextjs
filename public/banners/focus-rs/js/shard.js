//shard class
var shard = function (x, y, z) {
  var shardX = x;
  var shardY = y; //randomFloat(-20, 100);
  var shardZ = z;
  var image = Sprite3D.create();
  var bgImage = shardArray[Math.floor(Math.random() * shardArray.length)];
  //var rotX = 0, rotY = 0, rotZ = 0;
  var rotateXFrom = randomFloat(-200, 200);
  var rotateYFrom = randomFloat(-100, 100);
  var rotateZFrom = 0;
  var rotateXTo = randomFloat(-100, 100);
  var rotateYTo = randomFloat(-160, 160);
  var rotateZto = 8;
  var xScale = (yScale = zScale = randomFloat(0.4, 2));
  image.scale(xScale, yScale, zScale);
  image.xRotate = rotateXFrom;
  image.yRotate = rotateYFrom;
  image.zRotate = rotateZFrom;
  image.addClass("shard");
  image.style.background = "url('" + bgImage + "') no-repeat";
  //image.style.backgroundColor = "#000";
  //console.log(bgImage);
  image.position(shardX, shardY, shardZ);

  stage.appendChild(image);
  image.update();
  TweenLite.to(image, 2, {
    xRotate: rotateXTo,
    yRotate: rotateYTo,
    zRotate: rotateZto,
    onComplete: function () {
      container_dc.removeChild(image);
    },
  });

  this.move = function () {
    shardX += xSpeed;
    shardY += ySpeed;
    shardZ -= zSpeed;
    image.position(shardX, shardY, shardZ); // + cos*600)//Math.cos(d+i*0.067)*400, i*-150)
    image.rotation(image.xRotate, image.yRotate, image.zRotate);
    image.update();
  };
};

var moveShards = function () {
  for (var i = 0; i < shards.length; i++) {
    shards[i].move();
  }
};
