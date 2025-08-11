// JavaScript Document
dcFunctions = function(){
	//Bring in listeners
	addListeners();
}

//Add Event Listeners
addListeners = function() {
  //console.log("addListeners");
  expandAd.addEventListener("mouseover", onExpandHandler);
  //ex_clickThrough.addEventListener("click", expandedExitHandler);
  
}

var showCollapsedAssets = function(){
 container_dc.style.display = "block"; 
 expandAd.style.display = "block";
}

var hideCollapsedAssets = function(){
  container_dc.style.display = "none";  
  expandAd.style.display = "none";
}

showExpandedAssets = function(){
	//Show Expand over the top
	ex_ad_container.style.display = 'block';
    ex_ad_container.className = "expand";
	//ex_ad_shield.className = "reveal";
	//startExpandedAd();
    
}

hideExpandedAssets = function(){
    ex_ad_container.style.width = 298;
    ex_ad_container.style.height = 248;
    ex_ad_container.className = "";
	TweenLite.to(ex_ad_shield,0.4 , {alpha:1, ease:Linear.easeNone});
	TweenLite.to(ex_carModelContainer,0.4 , {alpha:0});
	TweenLite.to(scriptSprite,0.4 , {alpha:0});
	TweenLite.to(close_btn,0.4 , {alpha:0, ease:Linear.easeNone});
    }

closeExpandedHandler = function(e){
    Enabler.requestCollapse();
    Enabler.counter('Rich Media Manual Closes');    
    Enabler.stopTimer('panel Expansion');
    //Hide Expand
    hideExpandedAssets();
    Enabler.finishCollapse();
	TweenLite.to(ex_ad_shield,0.4 , {alpha:1, ease:Linear.easeNone});
    setTimeout( function(){
        collapseFinishHandler();
    }, 500);
} 

onExpandHandler = function(){
    Enabler.requestExpand();
    hideCollapsedAssets();
    showExpandedAssets();
    Enabler.startTimer('panel Expansion');
   // stopCollapsedAd();
    startExpandedAd();
    Enabler.finishExpand();

}

expandedExitHandler = function(s){
    Enabler.requestCollapse()
	Enabler.stopTimer('panel Expansion');
	//Hide Expand
	hideExpandedAssets();
	Enabler.exit('Expanded_ClickThrough');
	TweenLite.to(ex_ad_shield,0.4 , {alpha:1, ease:Linear.easeNone});
    //Wait for ad to collapse
    //Then start expaneded ad
    setTimeout(function(){
        collapseFinishHandler();
      // startExpandedAd();   
    }, 500);
    Enabler.finishCollapse();
}
var collapsedCT = function(e) {
	Enabler.exit('Collapsed_ClickThrough');
};  


collapseFinishHandler = function(){
    showCollapsedAssets();
    //startCollapsedAd(); 
    stopExpandedAd();
}
