// JavaScript Document
async function dcFunctions() {
  //Bring in listeners
  addListeners();
}

//Add Event Listeners
const addListeners = function () {
  expandAd.addEventListener("mouseover", onExpandHandler);
};

var showCollapsedAssets = function () {
  container_dc.style.display = "block";
  expandAd.style.display = "block";
};

var hideCollapsedAssets = function () {
  container_dc.style.display = "none";
  expandAd.style.display = "none";
};

showExpandedAssets = function () {
  ex_ad_container.style.display = "block";
  ex_ad_container.className = "expand";
};

hideExpandedAssets = function () {
  ex_ad_container.style.width = 298;
  ex_ad_container.style.height = 248;
  ex_ad_container.className = "";
  TweenLite.to(ex_ad_shield, 0.4, { alpha: 1, ease: Linear.easeNone });
  TweenLite.to(ex_carModelContainer, 0.4, { alpha: 0 });
  TweenLite.to(scriptSprite, 0.4, { alpha: 0 });
  TweenLite.to(close_btn, 0.4, { alpha: 0, ease: Linear.easeNone });
};

closeExpandedHandler = function (e) {
  //Hide Expand
  hideExpandedAssets();
  TweenLite.to(ex_ad_shield, 0.4, { alpha: 1, ease: Linear.easeNone });
  setTimeout(function () {
    collapseFinishHandler();
  }, 500);
};

onExpandHandler = function () {
  hideCollapsedAssets();
  showExpandedAssets();
  // stopCollapsedAd();
  startExpandedAd();
};

expandedExitHandler = function (s) {
  //Hide Expand
  hideExpandedAssets();
  TweenLite.to(ex_ad_shield, 0.4, { alpha: 1, ease: Linear.easeNone });
  //Wait for ad to collapse
  //Then start expaneded ad
  setTimeout(function () {
    collapseFinishHandler();
    // startExpandedAd();
  }, 500);
};

collapseFinishHandler = function () {
  showCollapsedAssets();
  //startCollapsedAd();
  stopExpandedAd();
};
