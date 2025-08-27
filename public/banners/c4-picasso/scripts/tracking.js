var clickthroughArray, clickthroughAsset
    , userInteractionArray, userInteractionAsset
    , i;
//unitBackground,
function trackingInit() {
    mmbuildVersion.file = "09122015 tracking";
    if (mmbuildVersion.test == true) console.log("Build: " + mmbuildVersion.build + " " + mmbuildVersion.file);
    var introVideo = document.getElementById("introVideo");
    clickthroughArray = [
         ctaDiscover, auto_hitArea, logo_hitArea, fBtn1, fBtn2, fBtn3, comfort_logo_hitArea, unitBackground, redCarBG, ct_vid, ct_vid2, close_ad_hit
				        ];
    //connectNav_hitArea, assistance_hitArea,
    userInteractionArray = [
          handsfree_hitArea, relax_hitArea, three60_hitArea, tvc_hitArea, redCarBtn, blueCarBtn, features_btn, arrow_left_hitArea, arrow_right_hitArea, three60_btn, boot_btn, infoPanelContainer, close_btn, closeBtn_hit
				          ];
    
    for (i = 0; i < clickthroughArray.length; i++) {
        clickthroughAsset = clickthroughArray[i];
        clickthroughAsset.addEventListener("click", clickthroughHandler, false);
    }
    for (i = 0; i < userInteractionArray.length; i++) {
        userInteractionAsset = userInteractionArray[i];
        userInteractionAsset.addEventListener("click", userInteractionHandler, false);
    }
}

function clickthroughHandler($e) {
    clickthroughAsset = $e.currentTarget;
    console.log(":: clickthrough asset - " + clickthroughAsset.id + " ::");
    // Populate the switch case below with the corresponding assets within the clickthrough array and change the clickthrough label accordingly.
    // Keep all label names lowercase and keep every word separated by an underscore e.g. ct_cta_button
    // Keep labels as detailed and as short as possible for the account managers, especially thumbnails.
    //closeBtn_hit
   switch (clickthroughAsset) {
    
    case close_ad_hit:
        EB.clickthrough("ct_manual_close");
        video2.setAttribute("src", '');
        video.setAttribute("src", '');
        break;
  case unitBackground:
        EB.clickthrough("ct_background");
        break;
case redCarBG:
         EB.clickthrough("ct_red_car_background");
         break;     
  
    case ct_vid:
           
          EB.clickthrough("ct_video_panel");
          video.setAttribute("src", '');
            
        break;
    case ct_vid2:
        EB.clickthrough("ct_tvc_video_panel");
             video2.setAttribute("src", '');
        break;
    case auto_hitArea:
        EB.clickthrough("ct_auto_express_logo");
        break;
    case logo_hitArea:
        EB.clickthrough("ct_citroen_logo");
        break;
    case comfort_logo_hitArea:
        EB.clickthrough("ct_citroen_advanced_comfort_logo");
        break;
    case ctaDiscover:
        EB.clickthrough("ct_main_cta");
        break;
    case fBtn1:
        EB.clickthrough("ct_video_panel_cta");
        break;
  
    case fBtn2:
        EB.clickthrough("ct_view_c4");
        break;
  
    case fBtn3:
        EB.clickthrough("ct_view_grand_c4");
        break;
   
    }
    collapse();
}

function userInteractionHandler($e) {
    userInteractionAsset = $e.currentTarget;
    console.log(":: interaction asset - " + userInteractionAsset.id + " ::");
    // Populate the switch case below with the corresponding assets within the interaction array and change the counter label accordingly.
    // Keep all label names lowercase and keep every word separated by an underscore e.g. int_back_button
    // Keep labels as detailed and as short as possible for the account managers, especially thumbnails.
    switch (userInteractionAsset) {
        case closeBtn_hit:
        EB.userActionCounter("int_three60_closed");
        break;    
            
        case close_btn:
            if (redCarActive) {
            console.log('int_red_video_panel_closed');
            EB.userActionCounter("int_red_video_panel_closed");
        } else {
            console.log('int_blue_video_panel_closed');
            EB.userActionCounter("int_blue_video_panel_closed");
        }
         break;  
            
        case infoPanelContainer:
             if (redCarActive) {
                 console.log('int_red_info_panel_interaction');
            EB.userActionCounter("int_red_info_panel_interaction");
        }
        else {
             console.log('int_blue_info_panel_interaction');
            EB.userActionCounter("int_blue_info_panel_interaction");
        }
            break;
    case handsfree_hitArea:
        if (redCarActive) {
            EB.userActionCounter("int_red_handsfree_opening_tailgate");
        }
        else {
            EB.userActionCounter("int_blue_handsfree_opening_tailgate");
        }
        break;
    case relax_hitArea:
        if (redCarActive) {
            EB.userActionCounter("int_red_relax_function");
        }
        else {
            EB.userActionCounter("int_blue_relax_function");
        }
        break;
    case three60_hitArea:
        if (redCarActive) {
            EB.userActionCounter("int_red_360_vision");
        } else {
            EB.userActionCounter("int_blue_360_vision");
        }
        break;
 
    case tvc_hitArea:
        EB.userActionCounter("int_watch_tv_ad");
        break;
    case redCarBtn:
        EB.userActionCounter("int_explore_5_seater_version_red");
        break;
    case blueCarBtn:
        EB.userActionCounter("int_explore_7_seater_version_red");
        break;
    case features_btn:
        if (redCarActive) {
            EB.userActionCounter("int_red_car_features");
        } else {
            EB.userActionCounter("int_blue_car_features");
        }
        break;
    case arrow_left_hitArea:
        if (redCarActive) {
            EB.userActionCounter("int_red_left_arrow");
        } else {
            EB.userActionCounter("int_blue_left_arrow");
        }
        break;    
    case arrow_right_hitArea:
        if (redCarActive) {
            EB.userActionCounter("int_red_right_arrow");
        } else {
            EB.userActionCounter("int_blue_right_arrow");
        }
        break;          
    case three60_btn:
        if (redCarActive) {
            EB.userActionCounter("int_red_video_360_vision");
        } else {
            EB.userActionCounter("int_blue_video_360_vision");
        }
        break;
     case boot_btn:
        if (redCarActive) {
            EB.userActionCounter("int_red_video_handsfree");
        } else {
            EB.userActionCounter("int_blue_video_handsfree");
        }
        break;  
    }
}