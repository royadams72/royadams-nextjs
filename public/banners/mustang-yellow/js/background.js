var mainCanvas;
var mainContext2D;
var spawnTimeNum = 3;
var spawnTimer = spawnTimeNum;
var particles;
var colourPaleteArr = ["#468fc4", "#50a1e0", "#3b7cd2"];
var playBG = false;
var stopAnimation = false;
var frameRate = 60.0;
var frameDelay = 950.0 / frameRate;
var tw1;
var mTxtStartPos =
  "top:24px; left: 81px; width: 156px; height: 35px; opacity: 0;";
var cName = { cWidth: "52px", topPos: "32px", leftPos: "111px" };
let x, y;
//EDIT x and y to determine the area for the explosions
var calculateXY = function () {
  x = randomFloat(20, 280); //Left and right
  y = randomFloat(20, 100);
};
var spawner = function () {
  if (playBG) {
    if (spawnTimer == 0) {
      calculateXY();
      var explColour =
        colourPaleteArr[Math.floor(Math.random() * colourPaleteArr.length)];
      createExplosion(x, y, explColour);
      spawnTimer = spawnTimeNum;
    } else {
      spawnTimer--;
    }
  }
};

function randomFloat(min, max) {
  return min + Math.random() * (max - min);
}
/*
 * A single explosion particle
 */
class Particle {
  constructor(xAxis, yAxsis) {
    this.x = xAxis;
    this.y = yAxsis;
    this.scale = 1.0;

    this.radius = 40;
    this.color = "#000";
    this.velocityX = 0;
    this.velocityY = 0;
    this.scaleSpeed = 0.5;
  }

  update = function (ms) {
    // shrinking
    this.scale -= (this.scaleSpeed * ms) / 1000.0;

    if (this.scale <= 0) {
      this.scale = 0;
    }
    // moving away from explosion center
    this.x += (this.velocityX * ms) / 1000.0;
    this.y += (this.velocityY * ms) / 1000.0;
  };

  draw = function (mainContext2D) {
    //translating the 2D context to the particle coordinates
    mainContext2D.save();
    mainContext2D.translate(this.x, this.y);
    mainContext2D.scale(this.scale, this.scale);
    //drawing a filled circle in the particle's local space
    mainContext2D.globalAlpha = 0.7;
    mainContext2D.beginPath();
    mainContext2D.arc(0, 0, this.radius, 0, Math.PI * 2, true);
    mainContext2D.closePath();
    mainContext2D.fillStyle = this.color;
    mainContext2D.fill();
    mainContext2D.restore();
  };
}

class PlayScript {
  constructor() {
    TweenLite.to(scriptSprite, 0.8, {
      alpha: 1,
    });
  }

  startSprite = function () {
    var frameWidth = 219,
      numCols = 18;
    var steppedEase = new SteppedEase(numCols);
    TweenLite.to(scriptSprite, 1.8, {
      backgroundPosition: "-" + frameWidth * numCols + "px 0px",
      ease: steppedEase,
    });
  };
}
/*
 * Advanced Explosion effect
 * Each particle has a different size, move speed and scale speed.
 *
 * Parameters:
 * 	x, y - explosion center
 * 	color - particles' color
 */
function createExplosion(x, y, color) {
  var minSize = 5;
  var maxSize = 10;
  var count = 100;
  var minSpeed = 60.0;
  var maxSpeed = 200.0;
  var minScaleSpeed = 1.0;
  var maxScaleSpeed = 4.0;

  for (var angle = 0; angle < 360; angle += Math.round(360 / count)) {
    var particle = new Particle(x, y);
    particle.radius = randomFloat(minSize, maxSize);
    particle.color = color;
    particle.scaleSpeed = randomFloat(minScaleSpeed, maxScaleSpeed);

    var speed = randomFloat(minSpeed, maxSpeed);

    particle.velocityX = speed * Math.cos((angle * Math.PI) / 180.0);
    particle.velocityY = speed * Math.sin((angle * Math.PI) / 180.0);

    particles.push(particle);
  }
}

function update(frameDelay) {
  if (playBG) {
    // draw a white background to clear mainCanvas, with slight alpha for trailing effect
    mainContext2D.fillStyle = "rgba(255,255,255,0.2)";
    mainContext2D.fillRect(
      0,
      0,
      mainContext2D.canvas.width,
      mainContext2D.canvas.height
    );

    // update and draw particles
    for (var i = 0; i < particles.length; i++) {
      var particle = particles[i];
      particle.update(frameDelay);
      particle.draw(mainContext2D);
    }
  }
}

var initBG = function () {
  //canvas and 2D context initialization
  canvas = document.getElementById("canvas");
  mainContext2D = canvas.getContext("2d");
  carModelContainer.style.cssText = mTxtStartPos;
  carModel_a.style.opacity = "1";
  stopAnimation = false;
  particles = [];
  scriptSprite.style.backgroundPosition = "0px 0px";
  tw1 = TweenLite.to(carModelContainer, 2, {
    alpha: 1,
    onComplete: function () {
      TweenLite.delayedCall(1.5, startParticles);
    },
  });

  requestAnimationFrame(looper);
};

var startParticles = function () {
  TweenLite.to(carModel_a, 0.4, { alpha: 0 });
  TweenLite.to(carModelContainer, 0.7, {
    width: cName.cWidth,
    top: cName.topPos,
    left: cName.leftPos,
    ease: Power2.easeOut,
  });

  playBG = true;

  TweenLite.to(bg, 2, {
    alpha: 1,
    scale: 1,
    onComplete: stop,
  });

  var s = new PlayScript();
  s.startSprite();
};

function stop() {
  playBG = false;
  mainContext2D.clearRect(0, 0, canvas.width, canvas.height);
  stopAnimation = true;
}

function looper() {
  if (!stopAnimation) {
    spawner();
    update(frameDelay);
    requestId = window.requestAnimationFrame(looper);
  }
}
