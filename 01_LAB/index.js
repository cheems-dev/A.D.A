import ArrayRandom from "./classes/Array.js";
import input, { rl } from "./functions/input.js";
import writeFileTxt from "./functions/writeFile.js";

async function program(n, size) {
  try {
    n = parseInt(n);
    size = parseInt(size);
  } catch (error) {
    console.log("Exit program :D");
  }

  const arraySort = new ArrayRandom(n, size);
  // console.log(arraySort.arrayBubble);
  // console.log(arraySort.arrayInsert);
  const {
    total_time_bubble,
    total_time_insert,
  } = await arraySort.getTimeAlgorithm();
  console.log(`${total_time_bubble} ms`);
  console.log(`${total_time_insert} ms`);
  // console.log(arraySort.arrayBubble);
  // console.log(arraySort.arrayInsert);
  await writeFileTxt(total_time_bubble, total_time_insert, "output.txt");
}

async function main() {
  const n = await input("Tamaño del arreglo? ");
  const size = await input("Cantidad de elementos? ");
  await writeFileTxt(n, size, "input.txt");
  rl.close();

  await program(n, size);
}

main();
