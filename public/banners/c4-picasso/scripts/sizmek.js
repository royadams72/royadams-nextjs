var timeUntilAutoCollapse = 0, //30000, //Auto Timeout in milliseconds	// Changed to 30s for video to complete and extra 10 seconds
  cancelAutoCollapseOnUserInteraction = true,
  lockScrollingWhenExpanded = true,
  isAndroid2 = /android 2/i.test(navigator.userAgent),
  android2ResizeTimeout,
  autoCollapseTimeout,
  collapseDelay;

window.addEventListener("message", onMessageReceived);

function startAd() {
  initializeCustomVariables();
  addEventListeners();
  $(window).trigger("resize");

  mmbuildVersion.file = "09122015 sizmek.js";
  if (mmbuildVersion.test == true)
    console.log("Build: " + mmbuildVersion.build + " " + mmbuildVersion.file);

  expand();

  expandInit();
}

function initializeCustomVariables() {
  if (!EB._isLocalMode && EB._adConfig.customJSVars) {
    var customVariables = EB._adConfig.customJSVars;

    if (EBG.isNumber(customVariables.mdTimeUntilAutoCollapse)) {
      timeUntilAutoCollapse = customVariables.mdTimeUntilAutoCollapse;
    }

    if (EBG.isBool(customVariables.mdLockScrollingWhenExpanded)) {
      lockScrollingWhenExpanded = customVariables.mdLockScrollingWhenExpanded;
    }
    if (EBG.isBool(customVariables.mdCancelAutoCollapseOnUserInteraction)) {
      cancelAutoCollapseOnUserInteraction =
        customVariables.mdCancelAutoCollapseOnUserInteraction;
    }
  }
}

function addEventListeners() {
  if (cancelAutoCollapseOnUserInteraction) {
    var ad = document.getElementById("ad");

    ad.addEventListener("mousedown", cancelAutoCollapse);
    ad.addEventListener("touchstart", cancelAutoCollapse);
  }
}

function cancelAutoCollapse(event) {
  clearTimeout(autoCollapseTimeout);
  event.currentTarget.removeEventListener("mousedown", cancelAutoCollapse);
  event.currentTarget.removeEventListener("touchstart", cancelAutoCollapse);
}

function expand() {
  EB.expand({ actionType: EBG.ActionType.AUTO });

  if (lockScrollingWhenExpanded) preventPageScrolling();

  if (timeUntilAutoCollapse > 0)
    autoCollapseTimeout = setTimeout(
      autoTimeoutCollapse,
      timeUntilAutoCollapse
    );
}

function autoTimeoutCollapse() {
  collapse();
}

function preventPageScrolling() {
  document.addEventListener("touchmove", stopScrolling);
}

function stopScrolling($e) {
  $e.preventDefault();
}

function collapse($e) {
  console.log("::collapse::");
  expandedIn = false;
  stopVideo();
  if (lockScrollingWhenExpanded) allowPageScrolling();
  TweenLite.to(background, 0.2, {
    css: { autoAlpha: 0 },
    ease: Quad.easeInOut,
    overwrite: false,
  });
  TweenLite.to(ad, 0.2, {
    css: { autoAlpha: 0 },
    ease: Quad.easeInOut,
    overwrite: false,
    onComplete: removeAd,
  });
}

function removeAd() {
  console.log("::remove ad::");
  EB.collapse();
}

function allowPageScrolling() {
  document.removeEventListener("touchmove", stopScrolling);
}

function getAdID() {
  if (EB._isLocalMode) {
    return null;
  } else {
    return EB._adConfig.adId;
  }
}

function onMessageReceived($e) {
  try {
    var messageData = JSON.parse($e.data);

    if (messageData.adId && messageData.adId === getAdID()) {
      if (messageData.type && messageData.type === "resize") {
        if (isAndroid2) forceResizeOnAndroid2();
      }
    }
  } catch (error) {
    EBG.log.debug(error);
  }
}

function forceResizeOnAndroid2() {
  document.body.style.opacity = 0.99;
  clearTimeout(android2ResizeTimeout);
  android2ResizeTimeout = setTimeout(function () {
    document.body.style.opacity = 1;
    document.body.style.height = window.innerHeight;
    document.body.style.width = window.innerWidth;
  }, 200);
}
