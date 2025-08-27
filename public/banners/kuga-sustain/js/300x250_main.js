//var startAd = function(){
man = document.getElementById("man");
bg_container = document.getElementById("bg_container");

var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
var isSafari = navigator.userAgent.indexOf("Safari") != -1// 
var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
var isIE = /*@cc_on!@*/false || !!document.documentMode; // At least IE6
var arrowY;

if(isChrome){
   console.log("Chrome"); 
    arrowY = -0.5;
}else if(isFirefox){
    console.log("FireFox"); 
    arrowY = -2;
}else if(isSafari){
    console.log("isSafari"); 
    arrowY = -2;
}else if(isOpera){
    console.log("isOpera");
    arrowY = -3;
}
function initCollapsedAd(){
var count=0;
var tl = new TimelineMax({paused: true});//
    tl.to(relax, 0.5,{alpha: 1}).to(relax, 0.2,{alpha: 0, scaleX:1.5, scaleY: 1.5, delay:2});
    tl.to(theCar, 0.5,{alpha: 1, delay:0.2}).to(theCar, 0.2,{alpha: 0, scaleX:1.5, scaleY: 1.5, delay:2});
    tl.to(bg_container, 0.6 ,{x: -200, ease:Power1.easeIn});
    tl.add(TweenMax.spriteSheet(man, {
        width: 1500, 
        offsetX: 0,
        offsetY:2,
        stepX: 150, 
        stepY: 141, 
        count: 30
    }, 2 ));//{repeat: -1 }*/
    tl.to(getTheTxt, 0.3,{alpha: 1, scaleX:1, scaleY: 1}, "-=0.5").to(getTheTxt, 0.2,{alpha: 0, scaleX:1.5, scaleY: 1.5, delay:2});
    tl.to(bg_container, 0.5 ,{alpha: 0, ease:Power1.easeOut});
    tl.to(endFrame, 0.5 ,{alpha: 1, ease:Power1.easeOut}, "-=1");
    tl.to(endMsg, 0.5 ,{alpha: 1, ease:Power1.easeIn});
    //tl.to(arrow, 0.5 ,{alpha: 1,  x: 24, y:arrowY, ease:Power1.easeIn}).addLabel("endFramne").call(onRepeatHandler);
    tl.to(arrow, 0.5 ,{alpha: 1,  x: 24, y:arrowY}).to(arrow, 0.4 ,{x: "-=4", yoyo:true, repeat: 1}).call(onRepeatHandler);  

tl.play();

function onRepeatHandler(){
    
    TweenMax.delayedCall(3, function(){
    //Reset sprite animation on loop  
    man.style.backgroundPosition = "0px -2px";
    if(count !=2){
    tl.time(0);
    tl.play();
    count++;
    console.log(tl);
        }
    })
 
}

    

    startCollapsedAd = function (){
        if(count!=2){
        tl.play();
        }else{
        console.log("endFrame");
         tl.seek(12);
        }
    }
    stopCollapsedAd = function (){
        tl.time(0);
        tl.stop();
        //console.log("fired");
    }

}
