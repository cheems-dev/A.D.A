import ArrayRandom from "./classes/Array.js";
import getTimeAndCost from "./functions/getTimeAlgorithm.js";
import input, { rl } from "./functions/input.js";
import writeFile from "./functions/writeFile.js";

async function main() {
  // Entrada de ususario y conversion a entero
  const n = +(await input("Tamaño del vector:  "));
  rl.close();

  // console.log(typeof n);

  const arrayRandom = new ArrayRandom(n).getArrayRandom();
  const arrayAsc = await new ArrayRandom(n, "asc").getArrayRandom();
  const arrayDesc = new ArrayRandom(n, "desc").getArrayRandom();

  // console.log(getTimeAndCost(arrayRandom.bubble, arrayRandom.insert));
  // console.log(getTimeAndCost(arrayAsc.bubble, arrayAsc.insert));
  // console.log(getTimeAndCost(arrayDesc.bubble, arrayDesc.insert));

  const dataRandom = getTimeAndCost(arrayRandom.bubble, arrayRandom.insert);
  const dataAsc = getTimeAndCost(arrayAsc.bubble, arrayAsc.insert);
  const dataDesc = getTimeAndCost(arrayDesc.bubble, arrayDesc.insert);

  console.log(dataRandom);
  console.log(dataAsc);
  console.log(dataDesc);
  // Convertimos los JSON en un arreglo e iteramos sobre estos para poder crear un archivo csv
  const arrayData = [dataRandom, dataAsc, dataDesc];
  arrayData.forEach((data) => {
    let dataCost = {
      size: n,
      insert: data.Insert.cost,
      bubble: data.Bubble.cost,
    };
    let dataTime = {
      size: n,
      insert: data.Insert.time,
      bubble: data.Bubble.time,
    };

    if (dataRandom === data) {
      writeFile("./data/random_time.json", dataTime);
      writeFile("./data/random_cost.json", dataCost);
    }
    if (dataAsc === data) {
      writeFile("./data/asc_time.json", dataTime);
      writeFile("./data/asc_cost.json", dataCost);
    }
    if (dataDesc === data) {
      writeFile("./data/desc_time.json", dataTime);
      writeFile("./data/desc_cost.json", dataCost);
    }
  });
}

main();
