var stage,
  shards,
  spawnNum,
  xSpeed,
  ySpeed,
  zSpeed,
  shardArray,
  maxShards,
  shardCounter,
  tl,
  tlTween,
  loopLength,
  loopCount,
  loopNumber,
  shardTweenTime,
  mTxtStartPos,
  tweenArray,
  seconds,
  stopTimer,
  cName;

var startAd = function () {
  stage = Sprite3D.stage(container_dc);
  shards = [];
  counter = 0;
  spawnNum = 4;
  spawnTime = 0;
  xSpeed = 2;
  ySpeed = 2;
  zSpeed = 20;
  loopLength = 9;
  loopCount = 0;
  loopNumber = 3;
  seconds = 0;
  shardArray = ["images/shard1.svg", "images/shard2.svg", "images/shard3.svg"];
  maxShards = 150;
  shardCounter = 0;
  stopTimer = false;
  tweenArray = [];
  shardTweenTime = 7;

  clickThrough.addEventListener("mouseover", mouseOverAd);
  clickThrough.addEventListener("mouseout", mouseOutAd);
  clickThrough.addEventListener("click", bgExitHandler);
  mTxtStartPos = "top:35px; left: 45px; width: 200px; opacity: 0;"; //start position of model name
  cName = { cWidth: "70px", topPos: "32px", leftPos: "100px" }; //end position of model name
  startTweens();
  requestAnimationFrame(looper);
};
var growShards = function () {
  carModelContainer.style.cssText = mTxtStartPos;
  leftShardContainer.style.opacity = 1;
  rightShardContainer.style.opacity = 1;
  TweenLite.delayedCall(shardTweenTime - 3, playScript);
  TweenLite.delayedCall(shardTweenTime - 3, modelName);

  tw1 = TweenLite.to(carModelContainer, 2, { alpha: 1 });
  var shard1Tween = TweenLite.fromTo(
    shard1,
    shardTweenTime,
    { scale: 0, rotation: 0 },
    { scale: 1, rotation: -20, ease: Power4.easeOut }
  );
  var shard2Tween = TweenLite.fromTo(
    shard2,
    shardTweenTime,
    { scale: 0, rotation: 80 },
    { scale: 1, rotation: -15, ease: Power4.easeOut }
  );
  var shard3Tween = TweenLite.fromTo(
    shard3,
    shardTweenTime,
    { scaleX: 0, scaleY: 0, rotation: 0 },
    { scaleX: 1, scaleY: 0.5, rotation: -40, ease: Power4.easeOut }
  );
  var shard4Tween = TweenLite.fromTo(
    shard4,
    shardTweenTime,
    { scale: 0, rotation: 0 },
    { scale: 1, rotation: -10, ease: Power4.easeOut }
  );
  var shard5Tween = TweenLite.fromTo(
    shard5,
    shardTweenTime,
    { scale: 0, rotation: 0 },
    { scale: 1, rotation: -40, ease: Power4.easeOut }
  );
  var shard6Tween = TweenLite.fromTo(
    shard6,
    shardTweenTime,
    { scale: 0, rotation: 0 },
    { scale: 1, rotation: 20, ease: Power4.easeOut }
  );
  var shard7Tween = TweenLite.fromTo(
    shard7,
    shardTweenTime,
    { scale: 0, rotation: 0 },
    { scale: 1, rotation: 70, ease: Power4.easeOut }
  );
  var shard8Tween = TweenLite.fromTo(
    shard8,
    shardTweenTime,
    { scale: 0, rotation: 0 },
    { scale: 1, rotation: 50, ease: Power4.easeOut }
  );
  var shard9Tween = TweenLite.fromTo(
    shard9,
    shardTweenTime,
    { scale: 0, rotation: 0 },
    { scale: 1, rotation: 30, ease: Power4.easeOut }
  );
  var shard10Tween = TweenLite.fromTo(
    shard10,
    shardTweenTime,
    { scale: 0, rotation: 0 },
    { scale: 1, rotation: 55, ease: Power4.easeOut }
  );
  var shard11Tween = TweenLite.fromTo(
    shard11,
    shardTweenTime,
    { scale: 0, rotation: 0 },
    { scale: 1, rotation: 90, ease: Power4.easeOut }
  );
  var shard12Tween = TweenLite.fromTo(
    shard12,
    shardTweenTime,
    { scale: 0, rotation: 0 },
    { scale: 1, rotation: 230, ease: Power4.easeOut }
  );

  tweenArray.push(
    tw1,
    shard1Tween,
    shard2Tween,
    shard3Tween,
    shard4Tween,
    shard5Tween,
    shard6Tween,
    shard7Tween,
    shard8Tween,
    shard9Tween,
    shard10Tween,
    shard11Tween,
    shard12Tween
  );
  //console.log(tweenArray);
};

var modelName = function () {
  var t = TweenLite.to(carModelContainer, 0.6, {
    width: cName.cWidth,
    top: cName.topPos,
    left: cName.leftPos,
    ease: Power2.easeOut,
  });
  tweenArray.push(t);
};

var playScript = function () {
  console.log("fired");
  var t = TweenLite.to(scriptSprite, 0.8, { alpha: 1 });
  var frameWidth = 218,
    numCols = 17;
  var steppedEase = new SteppedEase(numCols);
  var scriptAnim = TweenLite.to(scriptSprite, 1.8, {
    backgroundPosition: "-" + frameWidth * numCols + "px 0px",
    ease: steppedEase,
  });
  tweenArray.push(scriptAnim, t);
};

var startTweens = function () {
  growShards();
};
var timelineHandler = function () {
  if (!stopTimer) {
    counter++;
    seconds = Math.round((counter / 60) * 10) / 10; //format number to one decimal place
    if (seconds >= loopLength) {
      stopTimer = true;
      fadeAssets();
    }
  }
};

function randomFloat(min, max) {
  return min + Math.random() * (max - min);
}

var replayAd = function () {
  loopCount++;
  if (loopCount != loopNumber) {
    for (var i = 0; i < tweenArray.length; i++) {
      tweenArray[i].pause(0);
    }
    shards = [];
    counter = 0;
    spawnTime = 0;
    shardCounter = 0;
    seconds = 0;
    tweenArray = [];
    stopTimer = false;
    startTweens();
  }
};

var fadeAssets = function () {
  console.log(loopCount);
  if (loopCount != loopNumber - 1) {
    TweenLite.to(carModelContainer, 0.5, {
      alpha: 0,
    });

    TweenLite.to(rightShardContainer, 0.5, {
      alpha: 0,
    });

    TweenLite.to(leftShardContainer, 0.5, {
      alpha: 0,
    });

    TweenLite.to(scriptSprite, 0.5, {
      alpha: 0,
      onComplete: replayAd,
    });
  }
};

var createShards = function () {
  shardCounter++;
  if (shardCounter <= maxShards) {
    var x = randomFloat(0, 300);
    var y = randomFloat(-40, -50);
    var z = 0;
    if (spawnTime == 0) {
      spawnTime = spawnNum;
      s = new shard(x, y, z);
      shards.push(s);
    } else {
      spawnTime--;
    }
  }
};

function looper() {
  timelineHandler();
  createShards();
  moveShards();
  requestId = window.requestAnimationFrame(looper);
}
