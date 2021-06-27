import { random } from "./random.js";

export default function generateArrayRandom(size) {
  return Array.from({ length: size }, () => random(size));
}
