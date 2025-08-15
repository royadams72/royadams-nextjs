// game/platform/config.mobile.js
export default {
  isMobile: true,
  renderer: { w: 450, h: 450, viewId: "mobile_game", mountId: "mContainer" },
  positions: {
    dealerY: 250,
    playerY: 420,
    cardStartX: 600,
    cardX: 260,
    cardScale: 0.5,
    updateCardX: 21,
    msg: { xFromCenter: 0, y: 90 },
    logo: { xCenter: true, y: 6, scale: 0.5 },
    btn: {
      x: 20,
      startY: 124,
      gap: 170,
      scale: 0.5,
      glow: { x: -18, y: -14, scale: 0.52 },
    },
    chips: { startX: 160, gap: 100, y: 250 },
  },
  fonts: {
    fill: 0xffffff,
    clickFont: "italic 50px Arial",
    winTxtS: "italic 35px Arial",
    winTxtL: "italic 40px Arial",
    lineH: 45,
    padding: 20,
  },
  assets: { bg: "m_gameBG", msgBG: "m_msgBG", cta: "m_ctaImg" },
};
