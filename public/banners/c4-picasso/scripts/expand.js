(function () {
  console.log("IFFE firing");

  var assetArray,
    asset,
    buttonArray,
    button,
    disablerArray,
    disabledAsset,
    i,
    type,
    acitivePanel,
    f_acitivePanel;
  var expandedIn = false;
  var redCarActive = false;
  var featuresMode = false;
  var toggelBtnArray = [
    redCarBtn,
    blueCarBtn,
    tvc_hitArea,
    comfort_logo_hitArea,
    ctaDiscover,
    three60ToggleBtn,
    auto_hitArea,
    logo_hitArea,
  ];

  function expandInit() {
    console.log("expandInit firing");
    // $(window).bind("orientationchange load resize", function () {
    //   var wrapper = document.querySelector("#wrapper"),
    //     ad = document.querySelector("#ad");
    //   console.log("resize");
    //   fit(ad, wrapper, {
    //     hAlign: fit.CENTER,
    //     vAlign: fit.CENTER,
    //     cover: false,
    //     watch: true,
    //     apply: true,
    //   });
    // });
    gsap.to(loader, 0.5, {
      autoAlpha: 0,
      display: "none",
      ease: Quad.easeInOut,
      overwrite: false,
    });
    if (!expandedIn) {
      initThree60();
      expandedIn = true;
      initVideo();
      initVideo2();
      hotspot = {
        w: 662,
        h: 336,
      };
      buttonArray = [
        ctaDiscover,
        close_btn,
        tvc_close_btn,
        boot_btn,
        windscreen_btn,
        three60_btn,
        features_btn,
        three60_hitArea,
        relax_hitArea,
        handsfree_hitArea,
        arrow_right_hitArea,
        arrow_left_hitArea,
        redCarBtn,
        blueCarBtn,
        tvc_hitArea,
        fBtn1,
        fBtn2,
        fBtn3,
        auto_hitArea,
        logo_hitArea,
        comfort_logo_hitArea,
        three60ToggleBtn,
        ct_vid,
        pan_left,
        pan_right,
        three60_car,
        closeBtn_hit,
        close_ad_hit,
      ];
      /*

        */
      gsap.set(".infoPanelFooter", {
        width: 796,
        height: 38,
        autoAlpha: 1,
        y: 161,
        backgroundSize: "796px 38px",
      });
      gsap.set(".footer1", {
        width: 262,
        height: 38,
        autoAlpha: 1,
        backgroundSize: "262px 38px",
      });
      gsap.set(".footer2", {
        width: 262,
        height: 38,
        autoAlpha: 1,
        x: 262,
        backgroundSize: "262px 38px",
      });
      gsap.set(".footer3", {
        width: 262,
        height: 38,
        autoAlpha: 1,
        x: 524,
        backgroundSize: "262px 38px",
      });
      /*
        connectNav, assistance_hitArea, assistance, connectNav_hitArea,
        */
      assetArray = [
        unitBackground,
        logos,
        redCarSmall,
        blueCar,
        advanced_comfort,
        tvcLink,
        ctaDiscover,
        hotspots,
        relax,
        three60,
        handsfree,
        relax_hitArea,
        three60_hitArea,
        handsfree_hitArea,
        videoUnit,
        videoPanel,
        closeImg,
        close_btn,
        tvc_close_btn,
        boot_btn,
        windscreen_btn,
        three60_btn,
        features_btn,
        arrow_right_hitArea,
        arrow_left_hitArea,
        relax_panel,
        handsfree_panel,
        assistance_panel,
        connectNav_panel,
        redCarBtn,
        blueCarBtn,
        redCar,
        blueCarSmall,
        wheel1,
        wheel2,
        wheel3,
        wheel4,
        pool,
        polaroid1,
        polaroid2,
        polaroid3,
        polaroid4,
        cantWaitTxt,
        tvc_hitArea,
        videoPanel2,
        auto_hitArea,
        logo_hitArea,
        comfort_logo_hitArea,
        redCarBG,
        redCar_footer,
        cta_arrow,
        tvc_arrow,
        blueCar_footer,
        three60Toggle,
        three60ToggleBtn,
        ct_vid,
        ct_vid2,
        three60_container,
        three60_panel,
        pan_left,
        pan_right,
        closeBtn_hit,
        three60_car,
        carBG,
        close_ad_hit,
        redCar_arrow,
        footer2_arrow,
        footer3_arrow,
      ];
      // console.log(relax)
      for (i = 0; i < assetArray.length; i++) {
        asset = assetArray[i];
        asset.ox = asset.offsetLeft;
        asset.oy = asset.offsetTop;
        asset.ow = asset.offsetWidth;
        asset.oh = asset.offsetHeight;
        switch (asset) {
          case footer2_arrow:
            gsap.set(asset, {
              autoAlpha: 0,
              width: 262,
              height: 38,
              position: "absolute",
              backgroundPosition: "0px 0px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "262px 38px",
            });
            break;
          case footer3_arrow:
            gsap.set(asset, {
              autoAlpha: 0,
              width: 262,
              height: 38,
              position: "absolute",
              backgroundSize: "262px 38px",
            });
            break;
            close_main_hit;
          case close_ad_hit:
            gsap.set(asset, {
              autoAlpha: 1,
              width: 70,
              height: 35,
              position: "absolute",
              x: 1200,
              y: 85,
            });
            break;
          case carBG:
            gsap.set(asset, {
              autoAlpha: 0,
              width: 1130,
              height: 688,
              position: "absolute",
              x: 85,
              y: 55,
              backgroundRepeat: "no-repeat",
            });
            break;
          case closeBtn_hit:
            gsap.set(asset, {
              autoAlpha: 0,
              width: 300,
              height: 60,
              position: "absolute",
              x: 60,
              y: 50,
            });
            break;
          case pan_left:
            gsap.set(asset, {
              autoAlpha: 0,
              width: "50%",
              height: "100%",
              position: "absolute",
            });
            break;
          case pan_right:
            gsap.set(asset, {
              x: 630,
              autoAlpha: 0,
              width: "50%",
              height: "100%",
              position: "absolute",
            });
            break;
          case three60_container:
            gsap.set(asset, {
              autoAlpha: 0,
              position: "absolute",
              x: 100,
              y: 70,
              width: 1077,
              height: 585,
              backgroundPosition: "0px 0px",
              overflow: "hidden",
            });
            break;
          //
          case ct_vid2:
            gsap.set(asset, {
              autoAlpha: 0,
              x: 200,
              y: 100,
              width: 850,
              height: 430,
              position: "absolute",
            });
            break;
          case ct_vid:
            gsap.set(asset, {
              autoAlpha: 0,
              x: 0,
              y: 0,
              width: 810,
              height: 350,
              position: "absolute",
            });
            break;
          case three60ToggleBtn:
            gsap.set(asset, {
              autoAlpha: 0,
              x: 50,
              y: 250,
              width: 130,
              height: 120,
              position: "absolute",
            });
            break;
          case redCar_arrow:
          case tvc_arrow:
          case cta_arrow:
          case three60_car:
          case blueCar_footer:
          case redCar_footer:
            gsap.set(asset, { autoAlpha: 0 });
            break;
          case comfort_logo_hitArea:
            gsap.set(asset, {
              autoAlpha: 1,
              x: 30,
              y: 570,
              width: 200,
              height: 150,
              position: "absolute",
            });
            break;
          case auto_hitArea:
            gsap.set(asset, {
              autoAlpha: 1,
              x: 50,
              y: 10,
              width: 100,
              height: 150,
              position: "absolute",
            });
            break;
          case logo_hitArea:
            gsap.set(asset, {
              autoAlpha: 1,
              x: 1150,
              y: 0,
              width: 100,
              height: 100,
              position: "absolute",
            });
            break;
          case three60Toggle:
          case polaroid1:
          case pool:
          case unitBackground:
          case redCarSmall:
          case advanced_comfort:
          case tvcLink:
          case logos:
          case videoUnit:
          case cantWaitTxt:
            gsap.to(asset, 0, {
              autoAlpha: 0,
              ease: Quad.easeInOut,
              overwrite: false,
            });
            break;
          case hotspots:
            gsap.set(asset, {
              autoAlpha: 0,
              x: 0,
              y: 0,
              position: "absolute",
            });
            break;
          case videoPanel2:
          case videoPanel:
            gsap.to(asset, 0, {
              display: "none",
              autoAlpha: 0,
              ease: Quad.easeInOut,
              overwrite: false,
            });
            break;
          case blueCar:
            gsap.set(asset, {
              autoAlpha: 0,
              x: -600,
              y: -100,
              scaleX: 0.5,
              scaleY: 0.5,
            });
            break;
          case closeImg:
            gsap.set(asset, {
              backgroundImage: "images/vid_panel/close_btn.png",
            });
            break;
          case redCarBG:
            gsap.set(asset, {
              x: 240,
              y: 110,
              width: 780,
              height: 400,
              position: "absolute",
              display: "none",
            });
            break;
          case redCar:
            gsap.set(asset, {
              autoAlpha: 0,
              x: 600,
              y: -100,
              scaleX: 0.5,
              scaleY: 0.5,
            });
            break;
          case ctaDiscover:
            gsap.to(asset, 0, {
              width: 408,
              height: 67,
              x: 431,
              y: 618,
              ease: Quad.easeInOut,
              overwrite: false,
            });
            break;
          case tvc_close_btn:
          case close_btn:
            gsap.set(asset, {
              width: 408,
              height: 50,
              x: 150,
              y: 20,
              autoAlpha: 1,
              zIndex: 1000,
            });
            break;
          case features_btn:
            gsap.set(asset, {
              width: 250,
              height: 50,
              x: 720,
              y: 20,
              autoAlpha: 1,
              zIndex: 1000,
            });
            break;
          case boot_btn:
            gsap.set(asset, {
              width: 200,
              height: 220,
              x: 970,
              y: 90,
              autoAlpha: 1,
              zIndex: 1000,
            });
            break;
          case windscreen_btn:
            gsap.set(asset, {
              width: 200,
              height: 220,
              x: 970,
              y: 290,
              autoAlpha: 1,
              zIndex: 1000,
            });
            break;
          case three60_btn:
            gsap.set(asset, {
              width: 200,
              height: 220,
              x: 970,
              y: 490,
              autoAlpha: 1,
              zIndex: 1000,
            });
            break;
          //mirrors_panel, wheels_panel, graphics_panel, airbumps_panel
          case relax_panel:
          case handsfree_panel:
          case assistance_panel:
          case connectNav_panel:
          case three60_panel:
            gsap.set(asset, { autoAlpha: 0, scaleX: 0.9, scaleY: 0.9 });
            break;
          //Set hotspot buttons
          case three60:
            gsap.set(".label", {
              width: hotspot.w,
              height: hotspot.h,
              x: -10,
              autoAlpha: 0,
            });
            gsap.set(".hotspot_off", {
              width: hotspot.w,
              height: hotspot.h,
              autoAlpha: 1,
            });
            gsap.set(".hotspot_on", {
              width: hotspot.w,
              height: hotspot.h,
              autoAlpha: 0,
            });
            break;
          case wheel1:
            gsap.set(asset, {
              autoAlpha: 1,
              width: 114,
              height: 115,
              transformOrigin: "50% 50%",
              backgroundSize: "114px 115px ",
            });
            gsap.set(wContainer1, {
              x: 515,
              y: 366,
              width: 113,
              height: 113,
              scaleX: 0.5,
              position: "absolute",
            });
            break;
          case tvc_hitArea:
            gsap.set(asset, {
              x: 1050,
              y: 565,
              width: 200,
              height: 200,
              position: "absolute",
            });
            break;
          case wheel2:
            gsap.set(asset, {
              autoAlpha: 1,
              width: 91,
              height: 91,
              transformOrigin: "50% 50%",
              backgroundSize: "91px 91px ",
            });
            gsap.set(wContainer2, {
              x: 254,
              y: 348,
              width: 100,
              height: 100,
              scaleX: 0.4,
              position: "absolute",
            });
            //gsap.to(asset, 2, { ease: Power0.easeNone, rotation:360, repeat:-1 });
            break;
          case wheel3:
            gsap.set(asset, {
              autoAlpha: 1,
              width: 114,
              height: 115,
              transformOrigin: "50% 50%",
              backgroundSize: "114px 115px ",
            });
            gsap.set(wContainer3, {
              x: 680,
              y: 365,
              width: 113,
              height: 113,
              scaleX: 0.5,
              position: "absolute",
              autoAlpha: 1,
              zIndex: 3000,
            });
            //gsap.to(asset, 2, { ease: Power0.easeNone, rotation:360, repeat:-1 });
            break;
          case wheel4:
            gsap.set(asset, {
              autoAlpha: 1,
              width: 90,
              height: 90,
              transformOrigin: "50% 50%",
              backgroundSize: "90px 90px ",
            });
            gsap.set(wContainer4, {
              x: 952,
              y: 349,
              width: 100,
              height: 100,
              scaleX: 0.4,
              position: "absolute",
            });
            break;
          case arrow_right_hitArea:
            gsap.set(asset, {
              width: 100,
              height: 160,
              x: 690,
              y: 0,
              autoAlpha: 1,
              position: "absolute",
            });
            break;
          case arrow_left_hitArea:
            gsap.set(asset, {
              width: 100,
              height: 160,
              x: 0,
              y: 0,
              autoAlpha: 1,
              position: "absolute",
            });
            break;
          case redCarBtn:
            gsap.set(asset, {
              width: 200,
              height: 200,
              x: 1000,
              y: 120,
              position: "absolute",
            });
            break;
          case blueCarSmall:
            gsap.set(asset, { autoAlpha: 0 });
            break;
          case blueCarBtn:
            gsap.set(asset, {
              width: 200,
              height: 200,
              x: 100,
              y: 120,
              position: "absolute",
              display: "none",
            });
            break;
          case polaroid2:
          case polaroid3:
          case polaroid4:
            gsap.set(asset, { autoAlpha: 0, scaleY: 1.5, scaleX: 1.5 });
            break;
        }
      }
      // assistance, connectNav
      disablerArray = [
        arrow_right,
        arrow_left,
        blueCar,
        redCar,
        advanced_comfort,
        tvcLink,
        redCarSmall,
        blueCarSmall,
        pool,
        logos,
        polaroid1,
        polaroid2,
        polaroid3,
        polaroid4,
        cantWaitTxt,
        relax,
        three60,
        handsfree,
        panelBG,
        closeBtn_360,
        blueCar_footer,
        three60Toggle,
        close_btn_main,
        redCar_arrow,
        tvc_arrow,
        cta_arrow,
      ];
      for (i = 0; i < disablerArray.length; i++) {
        disabledAsset = disablerArray[i];
        disabledAsset.style.cursor = "none";
        disabledAsset.style.pointerEvents = "none";
      }
      // $(window).trigger("resize");
      setHotspots(blueCar);
      secondaryLoad(
        [
          { url: "images/car_360.jpg", div: "three60_container" },
          { url: "images/redCar_footer.png", div: "redCar_footer" },
          { url: "images/blueCar_footer.png", div: "blueCar_footer" },
          { url: "images/blueCarSmall.png", div: "blueCarSmall" },
          { url: "images/redCarSmall.png", div: "redCarSmall" },
          { url: "images/redCar.png", div: "redCar" },
          { url: "images/wheel1.png", div: "wheel1" },
          { url: "images/wheel1.png", div: "wheel2" },
          { url: "images/wheel1.png", div: "wheel3" },
          { url: "images/wheel1.png", div: "wheel4" },
          { url: "images/blueCar.png", div: "blueCar" },
          { url: "images/advanced_comfort.png", div: "advanced_comfort" },
          { url: "images/tvcLink.png", div: "tvcLink" },
          { url: "images/vid_panel/video_frame.png", div: "video_frame" },
          { url: "images/vid_panel/relax_panel.png", div: "relax_panel" },
          {
            url: "images/vid_panel/handsfree_panel.png",
            div: "handsfree_panel",
          },
          {
            url: "images/vid_panel/assistance_panel.png",
            div: "assistance_panel",
          },
          { url: "images/vid_panel/three60_panel.png", div: "three60_panel" },
          {
            url: "images/vid_panel/connectNav_panel.png",
            div: "connectNav_panel",
          },
          { url: "images/label_three60.png", div: "label_three60" },
          { url: "images/label_relax.png", div: "label_relax" },
          { url: "images/label_handsfree.png", div: "label_handsfree" },
          { url: "images/vid_panel/leftArrow.png", div: "arrow_left" },
          { url: "images/vid_panel/rightArrow.png", div: "arrow_right" },
          {
            url: "images/vid_panel/infoPanelbg.jpg",
            div: "infoPanelContainer",
          },
          { url: "images/360Toggle.png", div: "three60Toggle" },
          { url: "images/cta_arrow.png", div: "cta_arrow" },
          { url: "images/tvc_arrow.png", div: "tvc_arrow" },
          { url: "images/redCar_arrow.png", div: "redCar_arrow" },
          //redCar_arrow
        ],
        function () {
          console.log(":: LOADER - all secondary loads complete ::");
        }
      );
      gsap.delayedCall(0.5, expandStepAnim, [1]);
    }
  }

  function expandStepAnim($stepNum) {
    if (expandedIn == false) return;
    console.log("expand frame: " + $stepNum);
    switch ($stepNum) {
      case 1:
        gsap.to(wrapper, 0.3, {
          autoAlpha: 1,
          ease: Quad.easeInOut,
          overwrite: false,
        });
        gsap.to(pool, 0.3, {
          autoAlpha: 1,
          ease: Quad.easeInOut,
          overwrite: false,
        });
        gsap.delayedCall(1.5, expandStepAnim, [2]);
        break;
      case 2:
        gsap.to([unitBackground, logos], 0.9, {
          autoAlpha: 1,
          ease: Quad.easeInOut,
          overwrite: false,
        });
        gsap.to(pool, 0.9, {
          autoAlpha: 0,
          ease: Quad.easeInOut,
          overwrite: false,
        });
        gsap.to(polaroid1, 1.4, {
          autoAlpha: 1,
          rotation: 20,
          scale: 0.9,
          ease: Quad.easeInOut,
          overwrite: false,
        });
        gsap.delayedCall(1.9, expandStepAnim, [3]);
        break;
      case 3:
        gsap.to(polaroid2, 0.8, {
          autoAlpha: 1,
          scaleY: 1,
          scaleX: 1,
          ease: Quad.easeOut,
        });
        gsap.to(polaroid3, 0.8, {
          delay: 0.8,
          autoAlpha: 1,
          scaleY: 1,
          scaleX: 1,
          ease: Quad.easeOut,
        });
        gsap.to(polaroid4, 0.8, {
          delay: 1.6,
          autoAlpha: 1,
          scaleY: 1,
          scaleX: 1,
          ease: Quad.easeOut,
        });
        gsap.delayedCall(3, expandStepAnim, [4]);
        break;
      case 4:
        gsap.to([polaroid2, polaroid1, polaroid3], 0.8, {
          autoAlpha: 0,
          ease: Quad.easeOut,
        });
        gsap.delayedCall(1.2, expandStepAnim, [5]);
        break;
      case 5:
        gsap.to(polaroid4, 1.4, {
          y: 150,
          x: 315,
          rotation: 10,
          ease: Quad.easeOut,
        });
        gsap.to(cantWaitTxt, 1, {
          delay: 1.3,
          autoAlpha: 1,
          ease: Quad.easeOut,
        });
        gsap.delayedCall(4, expandStepAnim, [6]);
        break;
      case 6:
        gsap.to(polaroid4, 1, { autoAlpha: 0, ease: Quad.easeOut });
        gsap.to(cantWaitTxt, 1, {
          delay: 1.3,
          autoAlpha: 0,
          ease: Quad.easeOut,
        });
        gsap.delayedCall(2.5, expandStepAnim, [7]);
        break;
      case 7:
        playCarIn(blueCar);
        gsap.delayedCall(2, expandStepAnim, [8]);
        break;
      case 8:
        addListeners();
        gsap.to(
          [
            advanced_comfort,
            tvcLink,
            blueCar_footer,
            cta_arrow,
            tvc_arrow,
            redCar_arrow,
            three60ToggleBtn,
            three60Toggle,
          ],
          1,
          {
            delay: 0.5,
            autoAlpha: 1,
            ease: Quad.easeInOut,
            overwrite: false,
            onComplete: function () {
              gsap.fromTo(
                [cta_arrow, tvc_arrow, redCar_arrow],
                0.5,
                { autoAlpha: 1 },
                { autoAlpha: 0, repeat: 7, yoyo: true, ease: Linear.easeNone }
              );
            },
          }
        );
        break;
    }
  }

  function expandButtonHandler($e) {
    button = $e.currentTarget;
    type = $e.type;
    switch (button) {
      case close_ad_hit:
        if (type == "mouseover") {
          gsap.to(close_btn_main, 0.4, { autoAlpha: 0.7 });
        } else if (type == "mouseout") {
          gsap.to(close_btn_main, 0.4, { autoAlpha: 1 });
        } else if (type == "click") {
        }
        break;

      case closeBtn_hit:
        if (type == "click") {
          unload360Car();
          console.log("fired");
        }
        break;
      //Pause sprite animation when mouse off car
      case three60_car:
        if (type == "mouseout") {
          tl.pause();
        }
        break;
      case pan_left:
        if (type == "mouseover") {
          if (tl.reversed() == false) {
            tl.reverse();
            tl.reversed(true);
          } else {
            tl.play();
            tl.reversed(false);
          }
        } else if (type == "mouseout") {
          // tl.pause()
        }
        break;
      case pan_right:
        if (type == "mouseover") {
          console.log("pan_right");
          if (tl.reversed() == false) {
            tl.reverse();
            tl.reversed(true);
          } else {
            tl.play();
            tl.reversed(false);
          }
          //tl.paused(false);
        } else if (type == "mouseout") {
          // tl.pause()
        }
        break;
      case three60ToggleBtn:
        if (type == "mouseover") {
          gsap.to(three60Toggle, 0.2, { autoAlpha: 0.5, overwrite: true });
          //toggleLabel(button, true);
        } else if (type == "mouseout") {
          gsap.to(three60Toggle, 0.2, { autoAlpha: 1, overwrite: true });
        } else if (type == "click") {
          load360Car();
        }
        break;
      case fBtn1:
        if (type == "mouseover") {
          gsap.to(".footer1", 0.2, { autoAlpha: 0.5, overwrite: true });
        } else if (type == "mouseout") {
          gsap.to(".footer1", 0.2, { autoAlpha: 1, overwrite: true });
        } else if (type == "click") {
        }
        break;
      case fBtn2:
        if (type == "mouseover") {
          gsap.to(".footer2", 0.2, { autoAlpha: 0.5, overwrite: true });
        } else if (type == "mouseout") {
          gsap.to(".footer2", 0.2, {
            autoAlpha: 1,
            overwrite: true,
          });
        } else if (type == "click") {
        }
        break;
      case fBtn3:
        if (type == "mouseover") {
          gsap.to(".footer3", 0.2, {
            autoAlpha: 0.5,
            overwrite: true,
          });
        } else if (type == "mouseout") {
          gsap.to(".footer3", 0.2, {
            autoAlpha: 1,
            overwrite: true,
          });
        } else if (type == "click") {
        }
        break;
      case tvc_hitArea:
        if (type == "mouseover") {
          console.log("TVC button over");
          gsap.to([tvcLink, tvc_arrow], 0.2, {
            autoAlpha: 0.5,
            x: 0,
            overwrite: true,
          });
          //toggleLabel(button, true);
        } else if (type == "mouseout") {
          gsap.to([tvcLink, tvc_arrow], 0.2, {
            autoAlpha: 1,
            x: 0,
            overwrite: true,
          });
        } else if (type == "click") {
          loadTVC();
          turnOffMouseEvents();
        }
        break;
      case blueCarBtn:
        if (type == "mouseover") {
          console.log("bluCarSmall button over");
          if (redCarActive) {
            gsap.to(blueCarSmall, 0.2, {
              autoAlpha: 0.5,
              x: 0,
              overwrite: true,
            });
          }
          //toggleLabel(button, true);
        } else if (type == "mouseout") {
          if (redCarActive) {
            gsap.to(blueCarSmall, 0.2, {
              autoAlpha: 1,
              x: 0,
              overwrite: true,
            });
          }
        } else if (type == "click") {
          playCarIn(blueCar);
        }
        break;
      case redCarBtn:
        if (type == "mouseover") {
          console.log("redCarSmall button over");
          if (!redCarActive) {
            gsap.to([redCarSmall, redCar_arrow], 0.2, {
              autoAlpha: 0.5,
              x: 0,
              overwrite: true,
            });
          }
          //toggleLabel(button, true);
        } else if (type == "mouseout") {
          if (!redCarActive) {
            gsap.to([redCarSmall, redCar_arrow], 0.2, {
              autoAlpha: 1,
              x: 0,
              overwrite: true,
            });
          }
        } else if (type == "click") {
          playCarIn(redCar);
        }
        break;
      case ctaDiscover:
        if (type == "mouseover") {
          /*pulse = gsap.fromTo(arrow, 0.7, { autoAlpha: 1 }, { autoAlpha: 0.2, repeat: -1, yoyo: true, ease: Linear.easeNone });
           */
        } else if (type == "mouseout") {
          // pulse.pause(0);
        }
        break;
      case handsfree_hitArea:
      case relax_hitArea:
      case three60_hitArea:
        // case connectNav_hitArea:
        // case assistance_hitArea:
        var btnDiv = button.id.substring(0, button.id.indexOf("_hitArea"));
        if (type == "mouseover") {
          gsap.to("#" + btnDiv + " .label", 0.2, {
            autoAlpha: 1,
            x: 0,
            overwrite: true,
          });
          gsap.to("#" + btnDiv + " .hotspot_off", 0.1, {
            autoAlpha: 0,
            overwrite: true,
          });
          gsap.to("#" + btnDiv + " .hotspot_on", 0.2, {
            autoAlpha: 1,
            overwrite: true,
          });
          //toggleLabel(button, true);
        } else if (type == "mouseout") {
          gsap.to("#" + btnDiv + " .label", 0.1, {
            autoAlpha: 0,
            x: -10,
            overwrite: true,
          });
          gsap.to("#" + btnDiv + " .hotspot_off", 0.1, {
            autoAlpha: 1,
            overwrite: true,
          });
          gsap.to("#" + btnDiv + " .hotspot_on", 0.1, {
            autoAlpha: 0,
            overwrite: true,
          });
          //
        } else if (type == "click") {
          turnOffMouseEvents();
          var rippleTween = gsap.to("#" + btnDiv + " .ripple", 1.5, {
            autoAlpha: 0.8,
            overwrite: true,
            ease: Linear.easeNone,
            onComplete: function () {
              loadVideo(btnDiv);
              gsap.delayedCall(0.5, function () {
                rippleTween.pause(0);
              });
            },
          });
        }
        break;
      case close_btn:
        if (type == "mouseover") {
          //console.log(closeImg);
          gsap.to(closeImg, 0.2, { autoAlpha: 0.5, x: 0, overwrite: true });
          //toggleLabel(button, true);
        } else if (type == "mouseout") {
          gsap.to(closeImg, 0.2, { autoAlpha: 1, x: 0, overwrite: true });
        } else if (type == "click") {
          stopVideo();
          turnOnMouseEvents();
          unLoadVideo();
          featuresMode = false;
        }
        break;
      case tvc_close_btn:
        if (type == "mouseover") {
          //console.log(closeImg);
          gsap.to(tvc_closeImg, 0.2, {
            autoAlpha: 0.5,
            x: 0,
            overwrite: true,
          });
          //toggleLabel(button, true);
        } else if (type == "mouseout") {
          gsap.to(tvc_closeImg, 0.2, {
            autoAlpha: 1,
            x: 0,
            overwrite: true,
          });
        } else if (type == "click") {
          stopVideo2();
          turnOnMouseEvents();
          gsap.to(videoPanel2, 0.2, {
            autoAlpha: 0,
            ease: Quad.easeInOut,
            overwrite: false,
            onComplete: function () {
              gsap.set(videoPanel2, { display: "none" });
            },
          });
        }
        break;
      case boot_btn:
        if (type == "mouseover") {
          console.log("boot_btn");
          gsap.to(boot, 0.2, { autoAlpha: 0.7, overwrite: true });
        } else if (type == "mouseout") {
          gsap.to(boot, 0.2, { autoAlpha: 1, overwrite: true });
        } else if (type == "click") {
          // if(!featuresMode){
          sPlay("handsfree");
          //  }
        }
        break;
      case windscreen_btn:
        if (type == "click") {
        }
        break;
      case three60_btn:
        if (type == "mouseover") {
          gsap.to(three60Polaroid, 0.2, {
            autoAlpha: 0.7,
            overwrite: true,
          });
        } else if (type == "mouseout") {
          gsap.to(three60Polaroid, 0.2, { autoAlpha: 1, overwrite: true });
        } else if (type == "click") {
          // if(!featuresMode){
          sPlay("three60");
          //  }
        }
        break;
      case features_btn:
        if (!featuresMode) {
          if (type == "mouseover") {
            gsap.to(features, 0.2, { autoAlpha: 0.7, overwrite: true });
          } else if (type == "mouseout") {
            gsap.to(features, 0.2, { autoAlpha: 1, overwrite: true });
          } else if (type == "click") {
            featuresMode = true;
            loadFeatures();
            turnOffMouseEvents();
          }
        }
        break;
      case arrow_left_hitArea:
      case arrow_right_hitArea:
        var imgToFade = button.id.substring(0, button.id.indexOf("_hitArea"));
        var direction;
        if (type == "mouseover") {
          gsap.to("#" + imgToFade, 0.2, {
            autoAlpha: 0.5,
            overwrite: true,
          });
        } else if (type == "mouseout") {
          gsap.to("#" + imgToFade, 0.1, { autoAlpha: 1, overwrite: true });
        } else if (type == "click") {
          //toggleLabel(button, true);
          var endX;
          var beginX;
          var nextVideo;
          if (imgToFade == "arrow_left") {
            endX = 150;
            beginX = -150;
            direction = "left";
          } else {
            endX = -150;
            beginX = 150;
            direction = "right";
          }
          nextVideo = getNextVideo(direction);
          //on arrow button click fade out video and info panel
          stopVideo();
          gsap.to(acitivePanel, 0.3, {
            autoAlpha: 0,
            scaleX: 0.9,
            scaleY: 0.9,
            onComplete: function () {
              acitivePanel = "#" + nextVideo + "_panel";
            },
          });
          gsap.to(videoUnit, 0.3, {
            autoAlpha: 0,
            x: endX,
            scaleX: 0.9,
            scaleY: 0.9,
            overwrite: true,
            onComplete: function () {
              //the fade back in
              video.setAttribute("src", "");
              gsap.set(videoUnit, { x: beginX });
              gsap.set(acitivePanel, { display: "block" });
              gsap.to(acitivePanel, 0.5, {
                autoAlpha: 1,
                scaleX: 1,
                scaleY: 1,
              });
              gsap.to(videoUnit, 0.3, {
                autoAlpha: 1,
                x: 0,
                scaleX: 1,
                scaleY: 1,
                overwrite: true,
                onComplete: function () {
                  playVideo(nextVideo);
                },
              });
            },
          });
          gsap.to("#" + imgToFade, 0.1, { autoAlpha: 1, overwrite: true });
        }
        break;
    }
  }
  /*************************************************************************************************/
  //Custom functions
  /*************************************************************************************************/
  function loadFeatures() {
    stopVideo();
    unLoadVideo();
    gsap.delayedCall(0.3, loadVideo, ["connectNav"]);
  }

  function loadTVC() {
    gsap.set([videoPanel2, videoUnit2, ct_vid2], {
      display: "block",
    });
    gsap.to([videoPanel2, videoUnit2, ct_vid2], 0.5, {
      autoAlpha: 1,
      ease: Quad.easeInOut,
      overwrite: false,
      onComplete: playVideo2,
      onCompleteParams: ["videos/tvc.mp4"],
    });
  }

  function loadVideo(vID) {
    acitivePanel = "#" + vID + "_panel";
    // playVideo(vID);
    // console.log(vID)
    video.setAttribute("src", "");
    gsap.set(
      [
        videoPanel,
        videoUnit,
        acitivePanel,
        ct_vid,
        footer2_arrow,
        footer3_arrow,
      ],
      {
        display: "block",
      }
    );
    gsap.to(
      [videoPanel, videoUnit, ct_vid, footer2_arrow, footer3_arrow],
      0.5,
      {
        autoAlpha: 1,
        ease: Quad.easeInOut,
        overwrite: false,
        onComplete: function () {
          playVideo(vID);
          gsap.fromTo(
            [footer2_arrow, footer3_arrow],
            0.5,
            { autoAlpha: 1 },
            { autoAlpha: 0.2, repeat: 7, yoyo: true, ease: Linear.easeNone }
          );
        },

        // playVideo,
        //  onCompleteParams: [vID]
      }
    );
    gsap.to(acitivePanel, 0.5, {
      autoAlpha: 1,
      scaleX: 1,
      scaleY: 1,
      delay: 0.5,
    });
  }

  function getNextVideo(d) {
    if (!featuresMode) {
      var videoArray = ["handsfree", "relax", "three60"];
    } else {
      var videoArray = ["assistance", "connectNav"];
    }
    console.log(videoArray);
    //var infoPanelArray = []
    var v = video.src;
    var direction = d;
    var vid = v.substring(v.lastIndexOf("/") + 1);
    var videoFile = vid.substring(0, vid.indexOf("_video.mp4"));
    // console.log(videoFile)
    // var fileToLoad;
    var itemIndex = videoArray.indexOf(videoFile);
    if (direction == "left") {
      var fileToLoad = videoArray[itemIndex - 1];
      if (fileToLoad == undefined) {
        fileToLoad = videoArray[videoArray.length - 1];
      }
    } else {
      var fileToLoad = videoArray[itemIndex + 1];
      if (fileToLoad == undefined) {
        fileToLoad = videoArray[0];
      }
    }
    //console.log(fileToLoad);
    return fileToLoad;
  }

  function playCarIn(car) {
    gsap.to(car, 0.5, { autoAlpha: 1 });
    gsap.to(car, 1.5, { x: 0, y: 0, scaleX: 1, scaleY: 1 });

    if (car.id == "redCar") {
      redCarActive = true;
      // gsap.set([wheel3, wheel4],{autoAlpha:1})
      gsap.to([wheel3, wheel4], 1.5, {
        rotation: -360,
        ease: Quad.easeOut,
        overwrite: false,
      });
      gsap.to(blueCarSmall, 2, {
        autoAlpha: 1,
        delay: 1.7,
        ease: Quad.easeOut,
      });
      gsap.set(redCarBG, { display: "block" });
      gsap.set(redCarBtn, { display: "none" });
      gsap.set(blueCarBtn, { display: "block" });
      gsap.to([blueCar, hotspots, redCarSmall, redCar_arrow], 0.3, {
        autoAlpha: 0,
        onComplete: function () {
          gsap.set(blueCar, { x: -600, y: -100, scaleX: 0.5, scaleY: 0.5 });
          gsap.set([wheel1, wheel2], { rotation: 0 });
          setHotspots(car);
        },
      });
      gsap.to([blueCar_footer, three60Toggle, three60ToggleBtn], 0.5, {
        autoAlpha: 0,
      });
      gsap.to([redCar_footer], 0.8, { autoAlpha: 1, delay: 0.3 });
    } else {
      redCarActive = false;
      gsap.set(blueCarBtn, { display: "none" });
      gsap.set(redCarBtn, { display: "block" });
      gsap.to([redCar, hotspots, blueCarSmall], 0.3, {
        autoAlpha: 0,
        onComplete: function () {
          gsap.set(redCar, {
            autoAlpha: 0,
            x: 600,
            y: -100,
            scaleX: 0.5,
            scaleY: 0.5,
          });
          gsap.set([wheel3, wheel4], { rotation: 0 });
          setHotspots(car);
        },
      });
      gsap.to([redCar_footer], 0.5, { autoAlpha: 0 });
      gsap.to([blueCar_footer, three60Toggle, three60ToggleBtn], 0.8, {
        autoAlpha: 1,
        delay: 0.3,
      });
      gsap.set(redCarBG, { display: "none" });
      gsap.to([wheel1, wheel2], 1.5, {
        rotation: 360,
        ease: Quad.easeOut,
        overwrite: false,
      });
      gsap.to([redCarSmall, redCar_arrow], 0.5, {
        autoAlpha: 1,
        delay: 1.7,
        ease: Quad.easeOut,
      });
    }
    gsap.to(hotspots, 1, { autoAlpha: 1, delay: 2.5 });
  }

  function setHotspots(car) {
    if (car.id == "redCar") {
      console.log(car.id);
      gsap.set(three60, {
        width: hotspot.w,
        height: hotspot.h,
        x: 280,
        y: 0,
        autoAlpha: 1,
      });
      gsap.set(three60_hitArea, {
        width: 100,
        height: 100,
        x: 480,
        y: 130,
        autoAlpha: 1,
      });
      gsap.set(relax, {
        width: hotspot.w,
        height: hotspot.h,
        x: 510,
        y: 70,
        autoAlpha: 1,
      });
      gsap.set(relax_hitArea, {
        width: 100,
        height: 100,
        x: 700,
        y: 200,
        autoAlpha: 1,
      });
      gsap.set(handsfree, {
        width: hotspot.w,
        height: hotspot.h,
        x: 740,
        y: 70,
        autoAlpha: 1,
      });
      gsap.set(handsfree_hitArea, {
        width: 100,
        height: 100,
        x: 950,
        y: 190,
        autoAlpha: 1,
      });
    } else {
      console.log(car.id);
      gsap.set(relax, {
        width: hotspot.w,
        height: hotspot.h,
        x: 300,
        y: 70,
        autoAlpha: 1,
      });
      gsap.set(relax_hitArea, {
        width: 100,
        height: 100,
        x: 500,
        y: 200,
        autoAlpha: 1,
      });
      gsap.set(handsfree, {
        width: hotspot.w,
        height: hotspot.h,
        x: 40,
        y: 70,
        autoAlpha: 1,
      });
      gsap.set(handsfree_hitArea, {
        width: 100,
        height: 100,
        x: 250,
        y: 200,
        autoAlpha: 1,
      });
      gsap.set(three60, {
        width: hotspot.w,
        height: hotspot.h,
        x: 500,
        y: 0,
        autoAlpha: 1,
      });
      gsap.set(three60_hitArea, {
        width: 100,
        height: 100,
        x: 700,
        y: 130,
        autoAlpha: 1,
      });
    }
  }

  function turnOffMouseEvents() {
    for (i = 0; i < toggelBtnArray.length; i++) {
      gsap.set(toggelBtnArray[i], {
        cursor: "none",
        pointerEvents: "none",
      });
    }
  }

  function turnOnMouseEvents() {
    for (i = 0; i < toggelBtnArray.length; i++) {
      gsap.set(toggelBtnArray[i], {
        cursor: "pointer",
        pointerEvents: "auto",
      });
    }
  }

  function addListeners() {
    for (i = 0; i < buttonArray.length; i++) {
      button = buttonArray[i];
      button.addEventListener("mouseover", expandButtonHandler, false);
      button.addEventListener("mouseout", expandButtonHandler, false);
      button.addEventListener("mousedown", expandButtonHandler, false);
      button.addEventListener("click", expandButtonHandler, false);
      button.addEventListener("mouseup", expandButtonHandler, false);
    }
  }

  function closeFeatures() {
    gsap.to(f_acitivePanel, 0.3, {
      autoAlpha: 0,
      scaleX: 0.9,
      scaleY: 0.9,
    });
    gsap.to(featuresPanel, 0.2, {
      autoAlpha: 0,
      ease: Quad.easeInOut,
      overwrite: false,
      onComplete: function () {
        gsap.set(featuresPanel, {
          display: "none",
        });
      },
    });
  }

  function unLoadVideo() {
    gsap.to(acitivePanel, 0.3, {
      autoAlpha: 0,
      scaleX: 0.9,
      scaleY: 0.9,
    });
    gsap.to(videoPanel, 0.2, {
      autoAlpha: 0,
      ease: Quad.easeInOut,
      overwrite: false,
      onComplete: function () {
        gsap.set(videoPanel, {
          display: "none",
        });
      },
    });
  }

  function sPlay(v) {
    var vidToPlay = v;
    var endX = -150;
    var beginX = 150;
    var direction = "right";
    nextVideo = getNextVideo(direction);
    //on arrow button click fade out video and info panel
    stopVideo();
    gsap.to(acitivePanel, 0.3, {
      autoAlpha: 0,
      scaleX: 0.9,
      scaleY: 0.9,
      onComplete: function () {
        acitivePanel = "#" + vidToPlay + "_panel";
      },
    });
    gsap.to(videoUnit, 0.3, {
      autoAlpha: 0,
      x: endX,
      scaleX: 0.9,
      scaleY: 0.9,
      overwrite: true,
      onComplete: function () {
        //the fade back in
        video.setAttribute("src", "");
        gsap.set(videoUnit, { x: beginX });
        gsap.set(acitivePanel, { display: "block" });
        gsap.to(acitivePanel, 0.5, { autoAlpha: 1, scaleX: 1, scaleY: 1 });
        gsap.to(videoUnit, 0.3, {
          autoAlpha: 1,
          x: 0,
          scaleX: 1,
          scaleY: 1,
          overwrite: true,
          onComplete: function () {
            playVideo(vidToPlay);
          },
        });
      },
    });
  }
  var tl;

  function initThree60() {
    var frameWidth = 1077,
      frameHeight = 585,
      numCols = 6,
      numRows = 12;
    gsap.registerPlugin(SteppedEase);
    const steppedEase = SteppedEase.config(numCols - 1);
    tl = gsap.timeline({ repeat: -1, paused: true });
    console.log(tl);
    for (var i = 0; i < numRows; i++) {
      tl.add(
        gsap.fromTo(
          three60_container,
          0.5,
          { backgroundPosition: "0 -" + frameHeight * i + "px" },
          {
            backgroundPosition:
              "-" +
              frameWidth * (numCols - 1) +
              "px -" +
              frameHeight * i +
              "px",
            ease: steppedEase,
          }
        )
      );
    }
  }

  function load360Car() {
    turnOffMouseEvents();
    gsap.to(
      [
        three60_car,
        three60_container,
        pan_left,
        pan_right,
        closeBtn_hit,
        carBG,
      ],
      0.5,
      {
        autoAlpha: 1,
        ease: Quad.easeInOut,
        overwrite: false,
      }
    );
  }

  function unload360Car() {
    turnOnMouseEvents();
    tl.pause(0);
    gsap.to(
      [
        three60_car,
        three60_container,
        pan_left,
        pan_right,
        closeBtn_hit,
        carBG,
      ],
      0.5,
      {
        autoAlpha: 0,
        ease: Quad.easeInOut,
        overwrite: false,
      }
    );
  }

  function loadSecondaryImages($object, $callback) {
    console.log(String(":: LOADER - secondary loading " + $object.url + " ::"));
    var holder = document.getElementById($object.div),
      image = new Image();
    image.onload = function () {
      holder.style.backgroundImage = "url('" + image.src + "')";
      $callback();
      console.log(
        String(":: LOADER - successfully secondary loaded " + image.src + " ::")
      );
    };
    image.src = $object.url;
  }

  function secondaryLoad($urls, $onComplete) {
    var l = $urls.length,
      loaded = 0,
      checkSecondaryLoadProgress = function () {
        if (++loaded === l && $onComplete) $onComplete();
      };
    for (i = 0; i < l; i++)
      loadSecondaryImages($urls[i], checkSecondaryLoadProgress); //Politely load images
  }

  window.expandInit = expandInit;
})();
