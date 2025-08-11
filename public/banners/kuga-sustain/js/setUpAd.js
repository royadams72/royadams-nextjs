        
//Elements/images that are polite loaded to page after intial 
//*****************************************************************//
//**********************Global Vars*******************************//
function setUpAd(){
var ctaAnim, manAnim, bg_container, man, stopCollapsedAd, stopExpandedAd, startExpandedAd, playCTA, mouseOutHandler, handleMouseOver, handleMouseOut;

var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
var isSafari = navigator.userAgent.indexOf("Safari") != -1//Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    
var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
var isIE = /*@cc_on!@*/false || !!document.documentMode; // At least IE6    

var close_btn = document.getElementById("close_btn");
var ex_clickThrough = document.getElementById("ex_clickThrough");
var container_dc = document.getElementById('container_dc');
var	ad_container = document.getElementById('ad_container');
var	ex_ad_container =  document.getElementById('ex_ad_container');
var expandAd = document.getElementById("expandAd");
//need to display block so expand animation can be seen
    ex_ad_container.style.display = "block";
    container_dc.style.display = "block";
//*******************Unexpanded Ad*******************************//
  var getTheTxt = document.getElementById("getTheTxt"); 
         var getTheTxtImg = document.createElement("img");
             getTheTxtImg.setAttribute("src", "images/getTheTxt.png");
             getTheTxt.appendChild(getTheTxtImg);
            
         var theCar = document.getElementById("theCar"); 
         var theCarImg = document.createElement("img");
             theCarImg.setAttribute("src", "images/theCarTxt.png");
             theCar.appendChild(theCarImg);
            
         var relax = document.getElementById("relax"); 
         var relaxImg = document.createElement("img");
             relaxImg.setAttribute("src", "images/relaxTxt.png");
             relax.appendChild(relaxImg);
            
         var endFrame = document.getElementById("endFrame"); 
         var endFrameImg = document.createElement("img");
             endFrameImg.setAttribute("src", "images/endImage.jpg");
             endFrame.appendChild(endFrameImg);
            
         var endMsg = document.getElementById("endMsg"); 
         var endMsgImg = document.createElement("img");
             endMsgImg.setAttribute("src", "images/endMsg.png");
             endMsg.appendChild(endMsgImg);
//**************************************************************//
//*************************Expanded Ad***********************//

         var ex_msg2 = document.getElementById("ex_msg2"); 
         var ex_msg2Img = document.createElement("img");
             ex_msg2Img.setAttribute("src", "images/expanded/msg2.png");
             ex_msg2.appendChild(ex_msg2Img);
            
         var ex_msg1 = document.getElementById("ex_msg1"); 
         var ex_msg1_img = document.createElement("img");
             ex_msg1_img.setAttribute("src", "images/expanded/msg1.png");
             ex_msg1.appendChild(ex_msg1_img);
            
         var ex_endFrame = document.getElementById("ex_endFrame"); 
         var ex_endFrameImg = document.createElement("img");
             ex_endFrameImg.setAttribute("src", "images/expanded/endBG.jpg");
             ex_endFrame.appendChild(ex_endFrameImg);
            
         var ex_endMsg = document.getElementById("ex_endMsg"); 
         var ex_endMsgImg = document.createElement("img");
             ex_endMsgImg.setAttribute("src", "images/expanded/endTxt.png");
             ex_endMsg.appendChild(ex_endMsgImg);
            
         var man_nothingDiv = document.getElementById("man_nothing"); 
         var man_nothingImg = document.createElement("img");
             man_nothingImg.setAttribute("src", "images/expanded/man/man_nothing.png");
             man_nothingDiv.appendChild(man_nothingImg); 
            
         var man_luxury_standingDiv = document.getElementById("man_luxury_standing"); 
         var man_luxury_standingImg = document.createElement("img");
             man_luxury_standingImg.setAttribute("src", "images/expanded/man/man_standing_bags.png");
             man_luxury_standingDiv.appendChild(man_luxury_standingImg); 
            
         var man_golf_standingDiv = document.getElementById("man_golf_standing"); 
         var man_golf_standingImg = document.createElement("img");
             man_golf_standingImg.setAttribute("src", "images/expanded/man/man_standing_golf.png");
             man_golf_standingDiv.appendChild(man_golf_standingImg); 
            
         var man_fishing_standingDiv = document.getElementById("man_fishing_standing"); 
         var man_fishing_standingImg = document.createElement("img");
             man_fishing_standingImg.setAttribute("src", "images/expanded/man/man_standing_fishing.png");
             man_fishing_standingDiv.appendChild(man_fishing_standingImg); 
            
         var luxury_bag = document.getElementById("bag1");
         var luxury_bagImg = document.createElement("img");
             luxury_bagImg.setAttribute("src", "images/expanded/buttons/bags.png");
             luxury_bag.appendChild(luxury_bagImg); 
            
         var golf_bag = document.getElementById("bag2"); 
         var golf_bagImg = document.createElement("img");
             golf_bagImg.setAttribute("src", "images/expanded/buttons/golfbag.png");
             golf_bag.appendChild(golf_bagImg);    
            
         var fishing_bag = document.getElementById("bag3");
         var fishing_bagImg = document.createElement("img");
             fishing_bagImg.setAttribute("src", "images/expanded/buttons/hinge.png");
             fishing_bag.appendChild(fishing_bagImg);  

         var ex_bgContainer = document.getElementById("ex_bgContainer");
         var ex_bgImage = document.createElement("img");
             ex_bgImage.setAttribute("src", "images/expanded/ex_bg.jpg");
             ex_bgContainer.appendChild(ex_bgImage);  

         var ex_plinth = document.getElementById("ex_plinth");
         var ex_plinthImage = document.createElement("img");
             ex_plinthImage.setAttribute("src", "images/expanded/plinth.png");
             ex_plinth.appendChild(ex_plinthImage);  
    
//**************************Add Event listeners to expaned ad interactive buttons***************************//
            luxury_bag.style.cursor = "pointer";
            golf_bag.style.cursor = "pointer"; 
            fishing_bag.style.cursor = "pointer"; 
            close_btn.style.cursor = "pointer";

            close_btn.addEventListener("mouseover", closeBtnOver);
            close_btn.addEventListener("mouseout", closeBtnOut)
            ex_clickThrough.addEventListener("mouseover", playCTA);
            ex_clickThrough.addEventListener("mouseout", mouseOutHandler);

            luxury_bag.addEventListener("click", function(){playAnim(this,man_luxury_standing, man_luxury_opening, 2500,150, -100,-100)});
            golf_bag.addEventListener("click", function(){playAnim(this,man_golf_standing, man_golf_opening, 2520, 157, 20, -120)});
            fishing_bag.addEventListener("click", function(){playAnim(this,man_fishing_standing, man_fishing_opening, 2520, 155, 170, -130)}); 


            luxury_bag.addEventListener("mouseover", handleMouseOver);
            golf_bag.addEventListener("mouseover", handleMouseOver);
            fishing_bag.addEventListener("mouseover", handleMouseOver);    

            luxury_bag.addEventListener("mouseout", handleMouseOut);
            golf_bag.addEventListener("mouseout", handleMouseOut);
            fishing_bag.addEventListener("mouseout", handleMouseOut);  
    
        function closeBtnOver(){
           close_btn.style.backgroundPosition = "-59px 0px";//set background position  
        }
        function closeBtnOut(){
          close_btn.style.backgroundPosition = "0px 0px";//reset background position  
        }

        function handleMouseOver(e){
            if(!playing){
                var bag = e.currentTarget.id;
                if(bag == "bag1"){
                TweenMax.to(luxury, 0.3,{scaleY: 1.1, scaleX:1.1, force3D:true})
                }
                if(bag == "bag2"){
                TweenMax.to(golf, 0.3,{scaleY: 1.1, scaleX:1.1, force3D:true})
                }
                if(bag == "bag3"){
                TweenMax.to(fishing, 0.3,{scaleY: 1.1, scaleX:1.1, force3D:true})
                }
            }
        }

        function handleMouseOut(e){
            if(!playing){
                var bag = e.currentTarget.id;
                if(bag == "bag1"){
                TweenMax.to(luxury, 0.3,{scaleY: 1, scaleX:1, force3D:true})
                }
                if(bag == "bag2"){
                TweenMax.to(golf, 0.3,{scaleY: 1, scaleX:1 ,force3D:true})
                }
                if(bag == "bag3"){
                TweenMax.to(fishing, 0.3,{scaleY: 1, scaleX:1, force3D:true})
                }
            }
        }
 }