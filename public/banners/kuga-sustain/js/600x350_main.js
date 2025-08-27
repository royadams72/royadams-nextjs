//var startAd = function(){

//var close_btn = document.getElementById("close_btn");
//var ex_clickThrough = document.getElementById("ex_clickThrough");
var ex_tl;
var playing = false;
var doorOpenTween;
var _man_sprite   

if(isChrome){
       console.log("Chrome");
      // ex_arrow.y = 0.5
    }else if(isFirefox){
        ex_arrow.style.top = "58px";
    }else if(isSafari){
        console.log("isSafari"); 
        ex_arrow.style.top = "58px";
    }else if(isOpera){
        console.log("isOpera"); 
        ex_arrow.style.top = "57px";
    }


var main_tl = new TimelineMax({paused: true});
function playAnim(bag, man_standing, sprite, spriteWidth, step_x, endX, endY){
    if(!playing){
        var _bag = bag;
        var _man_standing = man_standing;
        //set global guy animation, so can reset on end.
        _man_sprite = sprite;
        var _spriteWidth = spriteWidth;
        var _step_x = step_x;
        var _endX = endX;
        var _endY = endY;
        //get rid of first message
        ex_msg1.style.display = "none"; 
        //Reset all rollover text images
        TweenMax.to(luxury, 0.2,{scaleY: 1, scaleX:1}) 
        TweenMax.to(golf, 0.2,{scaleY: 1, scaleX:1})  
        TweenMax.to(fishing, 0.2,{scaleY: 1, scaleX:1})
        playing = true;
      
        main_tl.to(_bag,0.7,{x:_endX, y:_endY}).to(_bag, 0.2,{alpha: 0});   
        main_tl.to(ex_msg2, 0.5,{alpha:1},"-=1.5");
        main_tl.to(man_nothing, 0.5,{alpha: 0});
        main_tl.to(_man_standing, 0.5,{alpha: 1}, "-=0.7").to(_man_standing, 0.4,{alpha: 0, delay:1}); 
        main_tl.to(_man_sprite, 0.5,{alpha: 1}, "-=0.5").call(playGuy, [_man_sprite, _spriteWidth, _step_x]) ; 
        main_tl.play();
    }
}


 
function playEndFrame(){
         ex_endMsg.style.zIndex=3000;
         ex_endFrame.style.display = "block";
         ex_tl.to(ex_endFrame, 0.3,{alpha: 1});
         ex_tl.to(ex_endMsg, 0.3,{alpha: 1}, "-=0.3");
         ex_tl.to(ex_arrow, 0.5,{x: "+=5", yoyo:true, repeat: 1});
         playing = false;
}
 function playGuy(sprite, sWidth, sX){

      var _man_sprite = sprite
      var _spriteWidth = sWidth;
      var _step_x = sX;
            ex_tl.add(TweenMax.spriteSheet(_man_sprite, {
                width: _spriteWidth, 
                offsetX: 0,
                offsetY:0,
                stepX: _step_x, 
                stepY: 0, 
                count: 16
                }, 2)).addPause(1.2, resumeTimeline, [2]).call(playEndFrame);
     
         doorOpenTween = TweenMax.spriteSheet(door_opening, {
                width: 1240, 
                offsetX: 0,
                offsetY:0,
                stepX: 137, 
                stepY: 0, 
                count: 9
                 }, 1.8);
   
        }

function resumeTimeline(seconds) {
        TweenMax.delayedCall(seconds, this.resume, null, this);
        }  

    var stopExpandedAd = function(){
      ex_msg1.style.opacity = 0;
      ex_tl.pause(0, true); //Go back to the start (true is to suppress events)
      ex_tl.clear();
      main_tl.pause(0, true);
      main_tl.clear();
      playing = false;
	  if(_man_sprite){
	 _man_sprite.style.backgroundPosition = "0px 0px";
	  }
      door_opening.style.backgroundPosition = "0px 0px";
      ex_endFrame.style.display = "none";
	  if(doorOpenTween){
     doorOpenTween.pause(0, true);
	  }
    }
    var startExpandedAd = function(){
       ex_endFrame.style.display = "none";
       initAd();//PLay main timeline
    }

function playCTA(){
    var frameWidth = 18, numCols = 9;
    var steppedEase = new SteppedEase(numCols);
        TweenMax.to(ex_arrow_btn, 1, {backgroundPosition: '-'+(frameWidth*numCols)+'px 3px', ease:steppedEase});   
        ex_arrow_btn.style.backgroundPosition = "0px 3px";//reset background position
       
    ctaAnim = TweenMax.spriteSheet(ex_cta, {
            width: 557, 
            offsetX: 0,
            offsetY:0,
            stepX: 111, 
            stepY: 0, 
            count: 5
        }, 0.4 )

    }

function playCTAOut(){
    //ex_cta.style.backgroundPosition = "0px 0px";//reset background position
ctaAnim.reverse();  

}

function initAd(){  
    ex_tl = new TimelineMax({paused: true});//
    ex_msg1.style.display ="block";
    ex_tl.to(ex_msg1, 0.5,{alpha: 1});
    //end playAnim
    ex_tl.play();   

}
 