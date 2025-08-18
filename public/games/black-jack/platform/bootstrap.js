// game/platform/bootstrap.desktop.js
import GameEngine from "../core/GameEngine.js";
import config from "./config.js";

export async function bootstrapDesktop(clientlibUrl) {
  const engine = new GameEngine({
    config,
    clientlibUrl,
    mountOverlay: document.getElementById("canvasContainer"),
  });

  const loadingEl = document.createElement("div");
  loadingEl.id = "loadingTxt";
  Object.assign(loadingEl.style, {
    position: "absolute",
    inset: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
    fontSize: "28px",
    color: "#fff",
    textShadow: "0 2px 4px rgba(0,0,0,.6)",
    pointerEvents: "none",
    zIndex: 2,
  });
  loadingEl.textContent = "Loading 0%";
  document.getElementById("canvasContainer")?.appendChild(loadingEl);

  await engine.load((p) => {
    return (loadingEl.textContent = `Loading ${p}%`);
  });
  loadingEl.remove();
  engine.initStage();
  engine.start();
}
