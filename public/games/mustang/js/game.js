var fps = 60; // how many 'update' frames per second
var step = 1 / fps; // how long is each frame (in seconds)
var width = 1200; // logical canvas width
var height = 700; // logical canvas height
var centrifugal = 0.3; // centrifugal force multiplier when going around curves
var offRoadDecel = 1.5; // speed multiplier when off road (e.g. you lose 2% speed each update frame)
var skySpeed = 0.001; // background sky layer scroll speed when going around curve (or up hill)
var hillSpeed = 0.002; // background hill layer scroll speed when going around curve (or up hill)
var treeSpeed = 0.003; // background tree layer scroll speed when going around curve (or up hill)
var skyOffset = 0; // current sky scroll offset
var hillOffset = 0; // current hill scroll offset
var treeOffset = 0; // current tree scroll offset
var segments = []; // array of road segments
// var stats         = Game.stats('fps');       // mr.doobs FPS counter
var canvas = Dom.get("canvas"); // our canvas...
var ctx = canvas.getContext("2d"); // ...and its drawing context
var background = null; // our background image (loaded below)
var sprites = null; // our spritesheet (loaded below)
var resolution = null; // scaling factor to provide resolution independence (computed)
var roadWidth = 1000; // actually half the roads width, easier math if the road spans from -roadWidth to +roadWidth
var segmentLength = 200; // length of a single segment
var rumbleLength = 3; // number of segments per red/white rumble strip
var trackLength = null; // z length of entire track (computed)
var lanes = 3; // number of lanes
var fieldOfView = 100; // angle (degrees) for field of view
var cameraHeight = 1000; // z height of camera
var cameraDepth = null; // z distance camera is from screen (computed)
var drawDistance = 300; // number of segments to draw
var playerX = 0; // player x offset from center of road (-1 to 1 to stay independent of roadWidth)
var playerZ = null; // player relative z distance from camera (computed)
var fogDensity = 1; // exponential fog density
var position = 0; // current camera Z position (add playerZ to get player's absolute Z position)
var speed = 0; // current speed
var maxSpeed = segmentLength / step; // top speed (ensure we can't move more than 1 segment in a single frame to make collision detection easier)
var accel = maxSpeed / 5; // acceleration rate - tuned until it 'felt' right
var breaking = -maxSpeed; // deceleration rate when braking
var decel = -maxSpeed / 5; // 'natural' deceleration rate when neither accelerating, nor braking
var offRoadDecel = -maxSpeed / 2; // off road deceleration is somewhere in between
var offRoadLimit = maxSpeed / 4; // limit when off road deceleration no longer applies (e.g. you can always go at least this speed even when off road)
var keyLeft = false;
var keyRight = false;
var keyFaster = false;
var keySlower = false;
var currentLapTime = 0;
var currentTime = 0;
var lap = 0;
var gameStarted = false;
var gameOver = false;
var timeToBeatNum = 45.5;
var currentTimeRounded;

//============s=============================================================
// UPDATE THE GAME WORLD
//=========================================================================

function update(dt) {
  var playerSegment = findSegment(position + playerZ);
  var speedPercent = speed / maxSpeed;
  var dx = dt * 2 * speedPercent; // at top speed, should be able to cross from left to right (-1 to 1) in 1 second
  var startPosition = position;
  position = Util.increase(position, dt * speed, trackLength);
  gameOverScene();
  if (position > playerZ) {
    gameStarted = true;
    fadeOutToolTip();
    if (currentLapTime && startPosition < playerZ) {
      lastLapTime = currentLapTime;
      currentLapTime = 0;
      lap++;
      console.log(lap);
      resetRoad();
      if (lap == 2) {
        gameOver = true;
      }
    } else {
      currentLapTime += dt;
      currentTime += dt;
      if (!gameOver) {
        currentTimeRounded = Math.round(currentTime * 10) / 10;
        if (lap == 1) {
          document.getElementById("timeDisplay").innerHTML =
            "<span id='yt' class='color2'>YOUR TIME: </span><span id='timeDisplayNum' class='color3'>" +
            currentTimeRounded +
            "</span><span id='secs1' class='color3'> secs</span>";
        } else {
          document.getElementById("timeDisplay").innerHTML =
            "<span id='yt' class='timeTxt'>YOUR TIME: </span><span id='timeDisplayNum'>" +
            currentTimeRounded +
            "</span><span id='secs1'> secs</span>";
        }
      }
    }
  }
  if (!gameOver) {
    if (keyLeft) playerX = playerX - dx;
    else if (keyRight) playerX = playerX + dx;
    if (playerSegment != undefined) {
      playerX = playerX - dx * speedPercent * playerSegment.curve * centrifugal;
    }
    if (keyFaster) speed = Util.accelerate(speed, accel, dt);
    else if (keySlower) speed = Util.accelerate(speed, breaking, dt);
    else speed = Util.accelerate(speed, decel, dt);
    if ((playerX < -1 || playerX > 1) && speed > offRoadLimit)
      speed = Util.accelerate(speed, offRoadDecel, dt);
    playerX = Util.limit(playerX, -1.1, 1.1); // dont ever let it go too far out of bounds
    speed = Util.limit(speed, 0, maxSpeed); // or exceed maxSpeed
  }

  displaySpeed = speed * (Math.PI / 180);
}

//Called when game over
var gameOverScene = function () {
  if (gameOver) {
    if (speed >= 0) {
      //slow the car down
      speed -= 50;
      var duration = 0.7;
      TweenLite.to(endScreen, duration, { alpha: 1 });
      TweenLite.to(ex_car_red, duration, {
        alpha: 1,
        scaleX: 1,
        scaleY: 1,
        delay: 0.2,
      });
      TweenLite.to(ex_car_yellow, duration, {
        alpha: 1,
        scaleX: 1,
        scaleY: 1,
        delay: 0.2,
      });
      TweenLite.to(ex_car_orange, duration, {
        alpha: 1,
        scaleX: 1,
        scaleY: 1,
        delay: 0.2,
      });
      if (currentTimeRounded <= timeToBeatNum) {
        results.innerHTML =
          "<span class='twentyPx'>Well done!</span><br>Your time was: <span class='color1'> " +
          currentTimeRounded +
          " secs</span><br>Time to beat was: <span class='color1'>" +
          timeToBeatNum +
          " secs</span>";
      } else {
        results.innerHTML =
          "<span>Unlucky!</span><br>Your time was: <span class='color1'> " +
          currentTimeRounded +
          " secs</span><br>Time to beat was: <span class='color1'>" +
          timeToBeatNum +
          " secs</span>";
      }
    }
  }
};

//=========================================================================
// RENDER THE GAME WORLD
//=========================================================================
function render() {
  if (adIsExpanding) {
    var baseSegment = findSegment(position);
    var basePercent = Util.percentRemaining(position, segmentLength);
    var playerSegment = findSegment(position + playerZ);
    var playerPercent = Util.percentRemaining(
      position + playerZ,
      segmentLength
    );
    var playerY = Util.interpolate(
      playerSegment.p1.world.y,
      playerSegment.p2.world.y,
      playerPercent
    );
    var maxy = height;
    var x = 0;
    var dx = -(baseSegment.curve * basePercent);
    ctx.clearRect(0, 0, width, height);
    var n, segment;
    for (n = 0; n < drawDistance; n++) {
      segment = segments[(baseSegment.index + n) % segments.length];
      segment.looped = segment.index < baseSegment.index;
      segment.fog = Util.exponentialFog(n / drawDistance, fogDensity);
      Util.project(
        segment.p1,
        playerX * roadWidth - x,
        playerY + cameraHeight,
        position - (segment.looped ? trackLength : 0),
        cameraDepth,
        width,
        height,
        roadWidth
      );
      Util.project(
        segment.p2,
        playerX * roadWidth - x - dx,
        playerY + cameraHeight,
        position - (segment.looped ? trackLength : 0),
        cameraDepth,
        width,
        height,
        roadWidth
      );
      x = x + dx;
      dx = dx + segment.curve;
      if (
        segment.p1.camera.z <= cameraDepth || // behind us
        segment.p2.screen.y >= segment.p1.screen.y || // back face cull
        segment.p2.screen.y >= maxy
      )
        // clip by (already rendered) segment
        continue;
      Render.segment(
        ctx,
        width,
        lanes,
        segment.p1.screen.x,
        segment.p1.screen.y,
        segment.p1.screen.w,
        segment.p2.screen.x,
        segment.p2.screen.y,
        segment.p2.screen.w,
        segment.fog,
        segment.color
      );
      maxy = segment.p2.screen.y;
    }
    Render.player(
      ctx,
      width,
      height,
      resolution,
      roadWidth,
      sprites,
      speed / maxSpeed,
      cameraDepth / playerZ,
      width / 2,
      height / 2 -
        ((cameraDepth / playerZ) *
          Util.interpolate(
            playerSegment.p1.camera.y,
            playerSegment.p2.camera.y,
            playerPercent
          ) *
          height) /
          2,
      speed * (keyLeft ? -1 : keyRight ? 1 : 0),
      playerSegment.p2.world.y - playerSegment.p1.world.y
    );
  }
}
//=========================================================================
// BUILD ROAD GEOMETRY
//=========================================================================
function lastY() {
  return segments.length == 0 ? 0 : segments[segments.length - 1].p2.world.y;
}

function addSegment(curve, y) {
  var n = segments.length;
  if (lap == 1) {
    segments.push({
      index: n,
      p1: {
        world: { y: lastY(), z: n * segmentLength },
        camera: {},
        screen: {},
      },
      p2: {
        world: { y: y, z: (n + 1) * segmentLength },
        camera: {},
        screen: {},
      },
      color:
        Math.floor(n / rumbleLength) % 5
          ? COLORS2.DARK
          : Math.floor(n / rumbleLength) % 2
          ? COLORS2.DARK_BREAK
          : COLORS2.LIGHT,
      curve: curve,
    });
  } else {
    segments.push({
      index: n,
      p1: {
        world: { y: lastY(), z: n * segmentLength },
        camera: {},
        screen: {},
      },
      p2: {
        world: { y: y, z: (n + 1) * segmentLength },
        camera: {},
        screen: {},
      },
      color:
        Math.floor(n / rumbleLength) % 5
          ? COLORS.DARK
          : Math.floor(n / rumbleLength) % 2
          ? COLORS.DARK_BREAK
          : COLORS.LIGHT,
      curve: curve,
    });
  }
}
function addRoad(enter, hold, leave, curve, y) {
  var startY = lastY();
  var endY = startY + Util.toInt(y, 0) * segmentLength;
  var n,
    total = enter + hold + leave;
  for (n = 0; n < enter; n++)
    addSegment(
      Util.easeIn(0, curve, n / enter),
      Util.easeInOut(startY, endY, n / total)
    );
  for (n = 0; n < hold; n++)
    addSegment(curve, Util.easeInOut(startY, endY, (enter + n) / total));
  for (n = 0; n < leave; n++)
    addSegment(
      Util.easeInOut(curve, 0, n / leave),
      Util.easeInOut(startY, endY, (enter + hold + n) / total)
    );
}
var ROAD = {
  LENGTH: { NONE: 0, SHORT: 25, MEDIUM: 50, LONG: 100 },
  HILL: { NONE: 0, LOW: 40, MEDIUM: 60, HIGH: 90 },
  CURVE: { NONE: 0, EASY: 4, MEDIUM: 6, HARD: 8 },
};
function addStraight(num) {
  num = num || ROAD.LENGTH.MEDIUM;
  addRoad(num, num, num, 0, 0);
}
function addHill(num, height) {
  num = num || ROAD.LENGTH.MEDIUM;
  height = height || ROAD.HILL.MEDIUM;
  addRoad(num, num, num, 0, height);
}
function addCurve(num, curve, height) {
  num = num || ROAD.LENGTH.MEDIUM;
  curve = curve || ROAD.CURVE.MEDIUM;
  height = height || ROAD.HILL.NONE;
  addRoad(num, num, num, curve, height);
}

function addLowRollingHills(num, height) {
  num = num || ROAD.LENGTH.SHORT;
  height = height || ROAD.HILL.LOW;
  addRoad(num, num, num, 0, height / 2);
  addRoad(num, num, num, 0, -height);
  addRoad(num, num, num, 0, height);
  addRoad(num, num, num, 0, 0);
  addRoad(num, num, num, 0, height / 2);
  addRoad(num, num, num, 0, 0);
}
function addSCurves() {
  addRoad(
    ROAD.LENGTH.MEDIUM,
    ROAD.LENGTH.MEDIUM,
    ROAD.LENGTH.MEDIUM,
    -ROAD.CURVE.EASY,
    ROAD.HILL.NONE
  );
  addRoad(
    ROAD.LENGTH.MEDIUM,
    ROAD.LENGTH.MEDIUM,
    ROAD.LENGTH.MEDIUM,
    ROAD.CURVE.MEDIUM,
    ROAD.HILL.MEDIUM
  );
  addRoad(
    ROAD.LENGTH.MEDIUM,
    ROAD.LENGTH.MEDIUM,
    ROAD.LENGTH.MEDIUM,
    ROAD.CURVE.EASY,
    -ROAD.HILL.LOW
  );
  addRoad(
    ROAD.LENGTH.MEDIUM,
    ROAD.LENGTH.MEDIUM,
    ROAD.LENGTH.MEDIUM,
    -ROAD.CURVE.EASY,
    ROAD.HILL.MEDIUM
  );
  addRoad(
    ROAD.LENGTH.MEDIUM,
    ROAD.LENGTH.MEDIUM,
    ROAD.LENGTH.MEDIUM,
    -ROAD.CURVE.MEDIUM,
    -ROAD.HILL.MEDIUM
  );
}
function addDownhillToEnd(num) {
  num = num || 200;
  addRoad(num, num, num, -ROAD.CURVE.EASY, -lastY() / segmentLength);
}
function resetRoad() {
  console.log("called");
  segments = [];
  if (lap == 0) {
    addStraight(ROAD.LENGTH.SHORT / 2);
    addCurve(ROAD.LENGTH.LONG, ROAD.CURVE.MEDIUM, -ROAD.HILL.LOW);
    addLowRollingHills(15, ROAD.HILL.LOW / 2);
    addHill(ROAD.LENGTH.MEDIUM, ROAD.HILL.HIGH);
    //  addStraight(ROAD.LENGTH.SHORT);
  } else if (lap == 1) {
    addStraight(ROAD.LENGTH.SHORT / 2);
    addCurve(ROAD.LENGTH.LONG, ROAD.CURVE.MEDIUM, -ROAD.HILL.LOW);
    addCurve(ROAD.LENGTH.SHORT / 2, ROAD.CURVE.HARD, ROAD.HILL.LOW);
    // addHill(ROAD.LENGTH.SHORT, ROAD.HILL.LOW);
    // addLowRollingHills();
    addSCurves();
    addStraight(ROAD.LENGTH.SHORT);
  } else {
    addStraight(ROAD.LENGTH.LONG);
  }
  addDownhillToEnd(50);
  segments[findSegment(playerZ).index + 2].color = COLORS.START;
  segments[findSegment(playerZ).index + 3].color = COLORS.START;
  for (var n = 0; n < rumbleLength; n++)
    segments[segments.length - 1 - n].color = COLORS.FINISH;
  trackLength = segments.length * segmentLength;
}
function findSegment(z) {
  return segments[Math.floor(z / segmentLength) % segments.length];
}
//=========================================================================
// THE GAME LOOP
//=========================================================================

var startGame = function () {
  Game.run({
    canvas: canvas,
    render: render,
    update: update,
    step: step,
    images: ["car1"],
    keys: [
      {
        keys: [KEY.LEFT, KEY.A],
        mode: "down",
        action: function () {
          keyLeft = true;
        },
      },
      {
        keys: [KEY.RIGHT, KEY.D],
        mode: "down",
        action: function () {
          keyRight = true;
        },
      },
      {
        keys: [KEY.UP, KEY.W],
        mode: "down",
        action: function () {
          keyFaster = true;
        },
      },
      {
        keys: [KEY.DOWN, KEY.S],
        mode: "down",
        action: function () {
          keySlower = true;
        },
      },
      {
        keys: [KEY.LEFT, KEY.A],
        mode: "up",
        action: function () {
          keyLeft = false;
        },
      },
      {
        keys: [KEY.RIGHT, KEY.D],
        mode: "up",
        action: function () {
          keyRight = false;
        },
      },
      {
        keys: [KEY.UP, KEY.W],
        mode: "up",
        action: function () {
          keyFaster = false;
        },
      },
      {
        keys: [KEY.DOWN, KEY.S],
        mode: "up",
        action: function () {
          keySlower = false;
        },
      },
    ],
    ready: function (images) {
      //background = images[0];
      sprites = images[0];
      reset();
    },
  });

  document.getElementById("timeDisplay").innerHTML =
    "<span id='yt' class='timeTxt'>YOUR TIME: </span><span id='timeDisplayNum'>" +
    currentTime +
    "</span><span id='secs1'> secs</span>";
  document.getElementById("timeToBeat").innerHTML =
    "<span id='tTxt' class='timeTxt'>BEST TIME: </span><span id='timeToBeatNum'>" +
    timeToBeatNum +
    "</span><span id='secs2'> secs</span>";
}; //
function reset(options) {
  options = options || {};
  canvas.width = width = Util.toInt(options.width, width);
  canvas.height = height = Util.toInt(options.height, height);
  lanes = Util.toInt(options.lanes, lanes);
  roadWidth = Util.toInt(options.roadWidth, roadWidth);
  cameraHeight = Util.toInt(options.cameraHeight, cameraHeight);
  drawDistance = Util.toInt(options.drawDistance, drawDistance);
  fogDensity = Util.toInt(options.fogDensity, fogDensity);
  fieldOfView = Util.toInt(options.fieldOfView, fieldOfView);
  segmentLength = Util.toInt(options.segmentLength, segmentLength);
  rumbleLength = Util.toInt(options.rumbleLength, rumbleLength);
  cameraDepth = 1 / Math.tan(((fieldOfView / 2) * Math.PI) / 180);
  playerZ = cameraHeight * cameraDepth;
  resolution = height / 480;
  // refreshTweakUI();
  if (segments.length == 0 || options.segmentLength || options.rumbleLength)
    resetRoad(); // only rebuild road when necessary
}

//=========================================================================
