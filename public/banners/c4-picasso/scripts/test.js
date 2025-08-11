function initEB() {
  !EB.isInitialized()
    ? EB.addEventListener(EBG.EventName.EB_INITIALIZED, politeInit)
    : politeInit();
}
// lazyload script
/**Loads scripts */
function loadScript($url, $callback) {
  console.log(String(":: LOADER - loading " + $url + " ::"));
  const filetype = $url.split(".").pop();
  switch (filetype) {
    case "js":
      let script = document.createElement("script");
      script.type = "text/javascript";
      if (script.readyState) {
        //IE
        script.onreadystatechange = function () {
          if (
            script.readyState == "loaded" ||
            script.readyState == "complete"
          ) {
            script.onreadystatechange = null;
            console.log(
              String(":: LOADER - successfully loaded " + $url + " ::")
            );
            $callback();
          }
        };
      } else {
        //Others
        script.onload = function () {
          $callback();
          console.log(
            String(":: LOADER - successfully loaded " + $url + " ::")
          );
        };
      }
      script.src = $url;
      document.getElementsByTagName("head")[0].appendChild(script);
      break;
    case "css":
      let extCSS = document.createElement("link");
      extCSS.setAttribute("rel", "stylesheet");
      extCSS.setAttribute("type", "text/css");
      extCSS.setAttribute("href", $url);
      document.getElementsByTagName("head")[0].appendChild(extCSS);
      console.log(String(":: LOADER - successfully loaded " + $url + " ::"));
      $callback();
      break;
  }
}

function loadImage($object, $callback) {
  console.log(String(":: LOADER - loading " + $object.url + " ::"));
  const holder = document.getElementById($object.div),
    image = new Image();
  image.onload = function () {
    holder.style.backgroundImage = "url('" + image.src + "')";
    console.log(String(":: LOADER - successfully loaded " + image.src + " ::"));
    $callback();
  };
  image.src = $object.url;
}

//Thanks to Jack @ Greensock for this sweet loader https://greensock.com/
function politeLoad($urls, $onComplete) {
  let l = $urls.length,
    loaded = 0,
    checkProgress = function () {
      if (++loaded === l && $onComplete) $onComplete();
    },
    i,
    varType;
  for (i = 0; i < l; i++) {
    varType = typeof $urls[i];
    switch (varType) {
      case "string":
        loadScript($urls[i], checkProgress); //Using the Enabler script loader to politely load the javascript
        break;
      case "object":
        loadImage($urls[i], checkProgress); //Politely load images
        break;
    }
  }
}

function politeInit() {
  politeLoad(
    [
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/EasePack.min.js",
      "styles/style.css",
      "styles/video.css",
      "scripts/fit.min.js",
      "scripts/vars.js",
      "scripts/videoUnit.js",
      "scripts/expand.js",
      { url: "images/pool.jpg", div: "pool" },
      { url: "images/polaroid1.png", div: "polaroid1" },
      { url: "images/polaroid2.png", div: "polaroid2" },
      { url: "images/polaroid3.png", div: "polaroid3" },
      { url: "images/polaroid4.png", div: "polaroid4" },
      { url: "images/cantWaitTxt.png", div: "cantWaitTxt" },
      { url: "images/background.jpg", div: "unitBackground" },
      { url: "images/logos.png", div: "logos" },
      { url: "images/closeBtn_360.png", div: "closeBtn_360" },
      { url: "images/three60_carBG.png", div: "carBG" },
      { url: "images/close_btn_main.png", div: "close_btn_main" },
    ],
    function () {
      console.log(":: LOADER - all initial loads complete ::");
      // function in expand.js
      expandInit();
    }
  );
}

window.addEventListener("load", politeInit);
