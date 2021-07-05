import MapCoordinate from "./classes/MapCoordinate.js";

function main() {
  const mapCoordinate = new MapCoordinate(9, 9);
  mapCoordinate.print();
  mapCoordinate.createSquare(3, 4, 4);
  mapCoordinate.print();
}

main();
