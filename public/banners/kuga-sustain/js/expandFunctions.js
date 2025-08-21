// JavaScript Document

export const dcFunctions = function () {
  //Bring in listeners
  addListeners();
};

//Add Event Listeners
const addListeners = function () {
  close_btn.addEventListener("click", closeExpandedHandler, false);
  ex_clickThrough.addEventListener("click", expandedExitHandler);
  ex_clickThrough.addEventListener("mouseover", playCTA);
  ex_clickThrough.addEventListener("mouseout", playCTAOut);
  expandAd.addEventListener("mouseover", onExpandHandler);
};

var showCollapsedAssets = function () {
  ad_container.style.display = "block";
  expandAd.style.display = "block";
};

var hideCollapsedAssets = function () {
  ad_container.style.display = "none";
  expandAd.style.display = "none";
};

showExpandedAssets = function () {
  //Show Expand over the top
  ex_ad_container.style.display = "block";
  ex_ad_container.className = "expand";
};

hideExpandedAssets = function () {
  ex_ad_container.style.width = 298;
  ex_ad_container.style.height = 248;
  ex_ad_container.className = "";
};

closeExpandedHandler = function (e) {
  //Hide Expand
  hideExpandedAssets();

  setTimeout(function () {
    collapseFinishHandler();
  }, 500);
};

onExpandHandler = function () {
  hideCollapsedAssets();
  showExpandedAssets();

  stopCollapsedAd();
  startExpandedAd();

  console.log("onExpandHandler called");
};

expandedExitHandler = function (s) {
  //Hide Expand
  hideExpandedAssets();
  //Wait for ad to collapse
  //Then start expaneded ad
  setTimeout(function () {
    collapseFinishHandler();
    startExpandedAd();
  }, 500);
};

collapseFinishHandler = function () {
  showCollapsedAssets();
  startCollapsedAd();
  stopExpandedAd();
};
