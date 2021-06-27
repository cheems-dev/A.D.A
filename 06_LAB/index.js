/**
 * Author: Luis Alberto Ccalluchi Lopez <daprimovaria@gmail.com>
 */

import QuickSortPivotRandom from "./classes/QuickSortPivotRandom.js";
import generateArrayRandom from "./functions/generateArrayRandom.js";

let exponent = 8;
const ARRAY_SIZE = Array.from({ length: 13 }, () => 2 ** exponent++);
const NUMBER_VECTOR = 200;

function main() {
  // console.log("n,promedio,ln(n)");
  console.log("n,promedio,n*log(n)*2");
  ARRAY_SIZE.forEach((n) => {
    let account = 0;
    // for (let i = 0; i < NUMBER_VECTOR; i++) {
    //   array = generateArrayRandom(n);
    //   account += new Max(array).get();
    // }
    // console.log(`${n},${account / NUMBER_VECTOR},${(Math.log(n) - 0.57).toFixed(3)}`);
    // account = 0;

    // // quicksort sin pivot random
    // for (let i = 0; i < NUMBER_VECTOR; i++) {
    //   const array = generateArrayRandom(n);
    //   // console.log(array);
    //   account += new QuickSort(array).run();
    // }
    // console.log(
    //   `${n},${account / NUMBER_VECTOR},${(n * Math.log10(n)).toFixed(3)}`
    // );

    // account = 0;
    // quicksort con pivot random
    for (let i = 0; i < NUMBER_VECTOR; i++) {
      const array = generateArrayRandom(n);
      account += new QuickSortPivotRandom(array).run();
    }
    console.log(
      `${n},${account / NUMBER_VECTOR},${(n * 2 * Math.log10(n)).toFixed(2)}`
    );
  });
}

main();

// Hacer lo mismo para quicksort
// Tener cuidado con log en base 2 o en base n
// Donde colocar el contador
