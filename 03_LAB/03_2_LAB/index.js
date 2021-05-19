import ArrayRandom from "./classes/Array.js";
import intercala from "./functions/intercala.js";
import merge from "./functions/merge.js";

const LIMIT = 200;
function main() {
  console.log(
    "n, Tiempo Intercala, Tiempo Merge, n, Costo Intercala, Costo Merge"
  );
  for (let i = 2; i <= LIMIT; i++) {
    const arrayRandom = new ArrayRandom(i).getArrayRandom();
    // ejecutamos los algoritmos de merge y insert para 2 hasta n = 200
    const data_intercala = intercala(
      arrayRandom.intercala,
      0,
      Math.floor(arrayRandom.intercala.length / 2) - 1,
      arrayRandom.intercala.length - 1
    );
    const data_merge = merge(
      arrayRandom.merge,
      0,
      Math.floor(arrayRandom.merge.length / 2) - 1,
      arrayRandom.merge.length - 1
    );

    // Datos a capturar para guardar en un archivo ".csv"
    console.log(
      `${i},${data_intercala.Time_Complexity},${data_merge.Time_Complexity},${i},${data_intercala.Cost_Total},${data_merge.Cost_Total}`
    );
  }
}
main();
