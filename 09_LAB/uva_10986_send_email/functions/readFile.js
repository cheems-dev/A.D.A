import { readFileSync } from "fs";

export default function readFile(filename) {
  return readFileSync(filename).toString("UTF8").split("\n");
}
