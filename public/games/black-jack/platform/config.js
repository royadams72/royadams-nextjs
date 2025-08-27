export default {
  isMobile: false,
  renderer: { w: 800, h: 500, viewId: "game", mountId: "canvasContainer" },
  positions: {
    dealerY: 190,
    playerY: 360,
    cardStartX: 1000,
    cardX: 590,
    cardScale: 0.6,
    cardWidth: 107,
    updateCardX: 22,
    msg: { xFromCenter: 0, y: 380 },
    logo: { x: 230, y: 60, scale: 0.5 },
    btn: {
      x: 125,
      startY: 130,
      gap: 130,
      scale: 0.5,
      glow: { x: -18, y: -14, scale: 0.52 },
    },
    chips: { startX: 60, gap: 100, yFromMsgCenter: 0 },
  },
  fonts: {
    fill: 0xffffff,
    small: {
      fontFamily: "Arial",
      fontSize: 22,
      fontStyle: "italic",
      fill: 0xffffff,
    },
    scoreFont: {
      fontFamily: "Arial",
      fill: 0x000000,
      align: "center",
      fontStyle: "bold",
    },
  },
  assets: { bg: "gameBG", msgBG: "msgBG", cta: "ctaImg" },
};
