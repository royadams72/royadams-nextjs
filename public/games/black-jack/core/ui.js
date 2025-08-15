// game/core/ui.js
import { shadowFilter } from "./utils.js";

export function buildButtons(resources, config, stage, btnArray) {
  const pos = config.positions.btn;
  const standImg = new PIXI.Sprite(resources.standImg.texture);
  const hitImg = new PIXI.Sprite(resources.hitImg.texture);
  standImg.scale.set(pos.scale);
  hitImg.scale.set(pos.scale);

  let y = pos.startY;
  for (const sprite of [standImg, hitImg]) {
    const c = new PIXI.Container();
    const glow = new PIXI.Sprite(resources.btnGlow.texture);
    glow.alpha = 0;
    glow.scale.set(pos.glow.scale);
    glow.x = pos.glow.x;
    glow.y = pos.glow.y;
    const sh = shadowFilter();
    if (sh) c.filters = [sh];
    c.addChild(glow, sprite);
    c.x = pos.x;
    c.y = y;
    y += pos.gap;
    stage.addChild(c);
    btnArray.push(c);
  }
}

// Return the two PIXI.Text nodes with consistent names
export function buildScoreLabels(resources, config, stage) {
  let y = config.isMobile ? 40 : 110;
  const dealerScoreTxt = makeLabel(resources, "Dealer", y, stage, config);
  y += config.isMobile ? 170 : 140;
  const playerScoreTxt = makeLabel(resources, "You", y, stage, config);
  return { dealerScoreTxt, playerScoreTxt };
}

function makeLabel(resources, title, y, stage, config) {
  const box = new PIXI.Container();
  const sh = shadowFilter();
  if (sh) box.filters = [sh];

  const star = resources.star ? new PIXI.Sprite(resources.star.texture) : null;

  if (star) {
    star.anchor.set(0.5);
    star.scale.set(config.isMobile ? 0.45 : 0.45); // tweak if needed
    star.x = 43;
    star.y = 50;
    box.addChild(star); // add first so it’s behind
  }

  const label = new PIXI.Text(title, {
    ...config.fonts.scoreFont,
    fontSize: 17,
  });
  label.anchor.set(0.5);
  label.x = 40;
  label.y = 42;

  const score = new PIXI.Text("0", { ...config.fonts.scoreFont, fontSize: 20 });
  score.anchor.set(0.5);
  score.x = label.x;
  score.y = label.y + 20;

  box.addChild(label, score);
  box.x = config.isMobile ? 200 : 300;
  box.y = y;
  stage.addChild(box);
  return score;
}

export function buildChips(resources, config, msgContainer, chipArray) {
  const pos = config.positions.chips;
  let x = pos.startX;
  for (const name of ["chip_50", "chip_100"]) {
    const c = new PIXI.Container();
    const glow = new PIXI.Sprite(resources.chipGlow.texture);
    glow.alpha = 0;
    glow.anchor.set(0.5);

    const chip = new PIXI.Sprite(resources[name].texture);
    chip.anchor.set(0.5);

    c.addChild(glow, chip);
    c.x = x;
    x += pos.gap;
    c.y = pos.y ?? msgContainer.height / 2;

    msgContainer.addChild(c);
    chipArray.push(c);
  }
}

export function buildMsgText(gameCopy, config, msgContainer) {
  const style = {
    align: "center",
    ...config.fonts?.small,
  };

  const txt = new PIXI.Text(
    `${gameCopy.click} ${gameCopy.bet} ${gameCopy.getStarted}`,
    style
  );

  txt.x = config.isMobile ? msgContainer.width / 2 : 230;
  txt.y = config.isMobile ? 30 : 40;
  if (config.isMobile) txt.anchor.set(0.5, 0);
  msgContainer.addChild(txt);
  return txt;
}
