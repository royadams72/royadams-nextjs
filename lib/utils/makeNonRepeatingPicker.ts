import getRandomInt from "./getRandomInt";

function makeNonRepeatingPicker(items: string[]) {
  let last: string | null = null;
  return () => {
    if (!items.length) return "";
    if (items.length === 1) return items[0];
    let idx = getRandomInt(0, items.length - 1);
    let candidate = items[idx];
    // avoid immediate repeat
    if (candidate === last) {
      idx = (idx + 1) % items.length;
      candidate = items[idx];
    }
    last = candidate;
    return candidate;
  };
}

export default makeNonRepeatingPicker;
