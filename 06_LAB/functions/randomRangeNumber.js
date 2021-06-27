export default function randomRangeNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
