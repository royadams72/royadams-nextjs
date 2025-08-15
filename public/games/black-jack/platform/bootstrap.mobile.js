// game/platform/bootstrap.mobile.js
import GameEngine from "../core/GameEngine.js";
import config from "./config.mobile.js";

export async function startMobile(clientlibUrl) {
  const engine = new GameEngine({
    config,
    clientlibUrl,
    mountOverlay: document.getElementById("mContainer"),
  });
  await engine.load((p) => {
    /* update your loadingTxt % if you want */
  });
  engine.initStage();
  engine.start();
}
