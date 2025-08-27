var stage;
var spawnTime = 20;
var spawnNow = spawnTime;
var animateLanes = true;
var mTxtStartPos =
  "top:24px; left: 78px; width: 156px; height: 35px; opacity: 0;";
var mTxtEndPos = {
  cWidth: "52px",
  cHeight: "12px",
  topPos: "22px",
  leftPos: "95px",
};
var tweenArray = [];
var changeCarCount = 0;
var loop = 3;
var loopCount = 0;
var pausedCollapsed = false;
var adIsExpanding = false;
var chngToYell;
var chngScript;
var pEnd;
var callChangeCar1;
var tweenArray;
let carSwayTween = null;
async function startAd() {
  laneOBj();
  requestAnimationFrame(looper);
  startAnimations();
}

var startAnimations = function () {
  var duration = 0.5;
  if (loopCount != 3) {
    for (var i = 0; i < tweenArray.length; i++) {
      tweenArray[i].pause(0);
    }
    tweenArray = [];
    if (pausedCollapsed) {
      changeCarCount = 0;
      pausedCollapsed = false;

      if (adIsExpanding) {
        duration = 0;
        adIsExpanding = false;
      }
      var t1 = gsap.to(
        [
          car_yellow,
          ctaArrow_blue,
          cta_blue,
          script_white,
          car_container,
          script_whiteBG,
        ],
        duration,
        { alpha: 0 }
      );

      var t2 = gsap.to(
        [car_red, carModelContainer, carModel_blue, ctaArrow],
        duration,
        { alpha: 1 }
      );

      script_container.style.opacity = 0;
      road.style.backgroundColor = "#ed1c24";
      road.style.borderColor = "#00457f";
      script_white.style.backgroundPosition = "0px 0px";

      road_container.style.opacity = 0;
      msg1.style.opacity = 0;
      laneOBj();
      requestAnimationFrame(looper);
      tweenArray.push(t1, t2);
    }

    carModelContainer.style.cssText = mTxtStartPos;

    var t1 = gsap.to(carModelContainer, 2, { alpha: 1 });
    var t2 = gsap.to(msg1, 2, {
      alpha: 1,
      onComplete: function () {
        frame2();
      },
    });
    var t3 = gsap.to(script_whiteBG, 0.8, { alpha: 1 });
    tweenArray.push(t1, t2, t3);
  }

  gsap.to(collapsedShield, 1.5, { alpha: 0 });
  if (carSwayTween) {
    carSwayTween.kill();
    carSwayTween = null;
  }
  carSwayTween = gsap.to(car_container, {
    x: 15,
    duration: 2.5,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1,
    paused: true,
    overwrite: "auto",
  });
};

var frame2 = function () {
  var t1 = gsap.to(script_white, 1, { alpha: 1 });
  console.log("frame2");

  playScript(script_white);

  var t2 = gsap.to(carModelContainer, 0.8, {
    width: mTxtEndPos.cWidth,
    height: mTxtEndPos.cHeight,
    top: mTxtEndPos.topPos,
    left: mTxtEndPos.leftPos,
    ease: "power2.out",
  });

  var t3 = gsap.to(msg1, 0.8, {
    alpha: 0,
    ease: "power2.out",
    onComplete: frame3,
  });

  tweenArray.push(t1, t2, t3);
};

var frame3 = function () {
  var t1 = gsap.to(road_container, 1.5, { alpha: 1 });
  var t2 = gsap.to(car_container, 1.5, {
    alpha: 1,
    ease: "none",
    onComplete: carSway,
  });

  var t3 = gsap.delayedCall(4, changeCar, [car_red, car_orange]);
  tweenArray.push(t1, t2, t3);
};

var changeCar = function (oldCar, newCar) {
  changeCarCount++;
  //
  //if(!adIsExpanding){
  if (changeCarCount === 1) {
    var t1 = gsap.to(road, 0.8, {
      backgroundColor: "#878787",
      borderColor: "#fb6e2d",
      ease: "power2.out",
    });
    var t2 = gsap.delayedCall(4, changeCar, [car_orange, car_yellow]);

    tweenArray.push(t1, t2);
  } else {
    var t1 = gsap.to(road, 0.8, {
      backgroundColor: "#878787",
      borderColor: "#ffc314",
      ease: "power2.out",
    });
    var t2 = gsap.delayedCall(4, playEndFrame);
    tweenArray.push(t1, t2);
    //
  }
  var oldCarTween = gsap.to(oldCar, 0.8, {
    alpha: 0,
    ease: "power2.out",
  });
  var newCarTween = gsap.to(newCar, 0.8, {
    alpha: 1,
    ease: "power2.out",
  });
  tweenArray.push(oldCarTween, newCarTween);
};

var playScript = function (asset) {
  var t1 = gsap.to(script_container, 0.8, { alpha: 1 });
  var frameWidth = 218,
    numCols = 17;

  var t2 = gsap.to(asset, 1.8, {
    backgroundPosition: "-" + frameWidth * numCols + "px 0px",
    ease: "steps(17)",
  });
  tweenArray.push(t1, t2);
};

var playEndFrame = function () {
  var duration = 1;
  if (adIsExpanding) {
    duration = 0;
    gsap.to(collapsedShield, 1, { alpha: 1 });
  }
  if (!adIsExpanding) {
    loopCount++;
    if (loopCount < loop) {
      gsap.delayedCall(4, startAnimations);
    }
  }

  gsap.to(road_container, duration, { alpha: 0 });
  pausedCollapsed = true;

  if (carSwayTween) {
    console.log(carSwayTween);

    carSwayTween.pause();
  }

  gsap.to(ctaArrow, duration, { alpha: 0 });
  gsap.to(ctaArrow_blue, duration, { alpha: 1 });
  gsap.to(cta_blue, duration, { alpha: 1 });
  msg1.style.opacity = 0;
};

function carSway() {
  if (carSwayTween) carSwayTween.restart(); // clean up old one
}

var laneOBj = function () {
  var startXLeft = 42;
  var startXright = 150;
  var startY = 800;
  var duration = 0.3;
  var cssStr =
    "position: absolute; width: 5px!important; height: 550px; background-color: #fff;";
  var laneRight = document.createElement("div");
  var laneLeft = document.createElement("div");
  laneRight.style.cssText = cssStr;
  laneLeft.style.cssText = cssStr;
  laneLeft.style.top = startY + "px";
  laneRight.style.top = startY + "px";
  laneLeft.style.left = startXLeft + "px";
  laneRight.style.left = startXright + "px";
  lane_container.appendChild(laneLeft);
  lane_container.appendChild(laneRight);

  var removeLanes = function () {
    lane_container.removeChild(laneLeft);
    lane_container.removeChild(laneRight);
  };
  gsap.to([laneLeft, laneRight], duration, {
    y: -900,
    onComplete: removeLanes,
  });
};

var addEventListeners = function () {
  console.log("onExpandHandler added");
  expandAd.addEventListener("mouseover", onExpandHandler);
  // clickThrough.addEventListener("mouseout", mouseOutAd);
  //clickThrough.addEventListener('click', bgExitHandler);
};

var spawnLanes = function () {
  if (animateLanes) {
    spawnNow--;
    if (spawnNow === 0) {
      laneOBj();
      spawnNow = spawnTime;
    }
  }
};

function looper() {
  if (!pausedCollapsed) {
    spawnLanes();
    requestId = window.requestAnimationFrame(looper);
  }
}
