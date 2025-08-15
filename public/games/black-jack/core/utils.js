export const randInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export function shadowFilter() {
  const DS = PIXI?.filters?.DropShadowFilter;
  if (!DS) return null; // filter script not present; caller can skip filters
  return new DS({
    color: 0x000000,
    distance: 3,
    angle: 70 * (Math.PI / 180), // radians
    blur: 4,
    alpha: 0.7,
  });
}

export function rankToCard(num) {
  const rankMap = {
    1: ["ace", 1],
    2: ["two", 2],
    3: ["three", 3],
    4: ["four", 4],
    5: ["five", 5],
    6: ["six", 6],
    7: ["seven", 7],
    8: ["eight", 8],
    9: ["nine", 9],
    10: ["ten", 10],
    11: ["j", 10],
    12: ["q", 10],
    13: ["k", 10],
  };

  return rankMap[num];
}
