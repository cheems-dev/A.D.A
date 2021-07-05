/**
 * Author: Luis Alberto Ccalluchi Lopez <daprimovaria@gmail.com>
 */

import { MaxAlgorithm } from "./classes/MaxAlgorithm.js";
import { QuickSort } from "./classes/QuickSort.js";
import { QuickSortPivotRandom } from "./classes/QuickSortPivotRandom.js";
import generateArrayRandom from "./functions/generateArrayRandom.js";

let exponent = 8;
const ARRAY_SIZE = Array.from({ length: 13 }, () => 2 ** exponent++);
const NUMBER_VECTOR = 200;

// tiempo promedio de max algorithm
function main_max_algorithm() {
  console.log("n,promedio,ln(n) - 0.5");
  ARRAY_SIZE.forEach((n) => {
    let account = 0;
    for (let i = 0; i < NUMBER_VECTOR; i++) {
      const array = generateArrayRandom(n);
      account += new MaxAlgorithm(array).run();
    }
    console.log(
      `${n},${account / NUMBER_VECTOR},${(0.5 - Math.log(n)).toFixed(2)}`
    );
  });
}

// tiempo promedio de quicksort con pivot random
function main_quicksort_random() {
  console.log("n,promedio,n*log(n)");
  ARRAY_SIZE.forEach((n) => {
    let account = 0;
    for (let i = 0; i < NUMBER_VECTOR; i++) {
      const array = generateArrayRandom(n);
      account += new QuickSortPivotRandom(array).run();
    }
    console.log(
      `${n},${account / NUMBER_VECTOR},${(n * Math.log(n)).toFixed(2)}`
    );
  });
}

// tiempo promedio de quicksort con pivot normal
function main_quicksort() {
  console.log("n,promedio,n*log(n)");
  ARRAY_SIZE.forEach((n) => {
    let account = 0;
    for (let i = 0; i < NUMBER_VECTOR; i++) {
      const array = generateArrayRandom(n);
      account += new QuickSort(array).run();
    }
    console.log(
      `${n},${account / NUMBER_VECTOR},${(n * Math.log(n)).toFixed(2)}`
    );
  });
}

main_quicksort_random();
// console.log("---------------------------");
// main_quicksort();
