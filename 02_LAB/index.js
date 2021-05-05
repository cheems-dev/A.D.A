import ArrayRandom from "./classes/Array.js";
import getTimeAndCost from "./functions/getTimeAlgorithm.js";
import input, { rl } from "./functions/input.js";
function program(n) {
  try {
    n = parseInt(n);
  } catch (error) {
    console.log("Exit program :D");
  }

  const { bubbleArray, insertArray } = new ArrayRandom(n).getArrayRandom();
  const { bubbleArrayAsc, insertArrayAsc } = new ArrayRandom(
    n,
    "asc"
  ).getArrayRandom();
  const { bubbleArrayDesc, insertArrayDesc } = new ArrayRandom(
    n,
    "desc"
  ).getArrayRandom();

  console.log(getTimeAndCost(bubbleArray, insertArray));

  // console.log(`${total_time_bubble} ms`);
  // console.log(`${total_time_insert} ms`);
  // // console.log(arraySort.arrayBubble);
  // // console.log(arraySort.arrayInsert);
  // await writeFileTxt(total_time_bubble, total_time_insert, "output.txt");
}

async function main() {
  const n = await input("Tamaño del vector:  ");
  // await writeFileTxt(n, size, "input.txt");
  rl.close();
  program(n);
}

main();
