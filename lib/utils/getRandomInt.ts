function getRandomInt(min: number, max: number) {
  if (min > max) [min, max] = [max, min];
  const lo = Math.ceil(min);
  const hi = Math.floor(max);
  return Math.floor(Math.random() * (hi - lo + 1)) + lo;
}

export default getRandomInt;
