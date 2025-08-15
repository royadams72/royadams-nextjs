export const SUITS = ["hearts", "spades", "clubs", "diamonds"];
export const RANKS = [
  ["ace", 1],
  ["two", 2],
  ["three", 3],
  ["four", 4],
  ["five", 5],
  ["six", 6],
  ["seven", 7],
  ["eight", 8],
  ["nine", 9],
  ["ten", 10],
  ["j", 10],
  ["q", 10],
  ["k", 10],
];

export function buildCardManifests(base) {
  const out = [];
  for (const [rank] of RANKS) {
    for (const suit of SUITS) {
      out.push({
        name: `${rank}_${suit}`,
        url: `${base}img/cards/${rank}_${suit}.png`,
      });
    }
  }
  return out;
}

export function buildStaticManifests(base) {
  return [
    { name: "chip_100", url: `${base}img/100chip.png` },
    { name: "chip_50", url: `${base}img/50chip.png` },
    { name: "chipGlow", url: `${base}img/chipGlow.png` },
    { name: "logo", url: `${base}img/logo.png` },
    { name: "cardBack", url: `${base}img/card_back.png` },
    { name: "standImg", url: `${base}img/stand.png` },
    { name: "hitImg", url: `${base}img/hit.png` },
    { name: "btnGlow", url: `${base}img/btnGlow.png` },
  ];
}

export function buildPlatformManifests(base, isMobile) {
  return isMobile
    ? [
        { name: "m_ctaImg", url: `${base}img/mobile/cta.png` },
        { name: "m_gameBG", url: `${base}img/mobile/mobileBG.jpg` },
        { name: "m_msgBG", url: `${base}img/mobile/m_msgBG.png` },
      ]
    : [
        { name: "ctaImg", url: `${base}img/cta.png` },
        { name: "gameBG", url: `${base}img/backGround.jpg` },
        { name: "msgBG", url: `${base}img/msgBG.png` },
        { name: "star", url: `${base}img/star.png` },
      ];
}
