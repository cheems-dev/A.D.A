/**
 * Author : Luis Ccalluchi Lopez <Daprimovaria@gmail.com>
 */
import ArrayRandom from "./classes/Array.js";
import getTimeAndCost from "./functions/getTimeAlgorithm.js";

const LIMIT = 1000;
function main() {
  // Por la propiedad de la unicidad procedemos a empezar de un arreglo de tamaño 2 hasta 1000
  console.log("n, Insert, Merge");
  for (let i = 2; i <= LIMIT; i++) {
    const arrayRandom = new ArrayRandom(i).getArrayRandom();
    // console.log(arrayRandom);
    const time = getTimeAndCost(arrayRandom.insert, arrayRandom.merge);
    // Datos a capturar para guardar en un archivo ".csv"
    console.log(`${i},${time.Insert},${time.Merge}`);
  }
}

main();
