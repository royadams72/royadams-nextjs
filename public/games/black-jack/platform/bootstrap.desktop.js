// game/platform/bootstrap.desktop.js
import GameEngine from "../core/GameEngine.js";
import config from "./config.desktop.js";

export async function bootstrapDesktop(clientlibUrl) {
  const engine = new GameEngine({
    config,
    clientlibUrl,
    mountOverlay: document.getElementById("sContainer"),
  });
  await engine.load((p) => {
    /* update your loadingTxt % if you want */
  });
  engine.initStage();
  engine.start();
}
