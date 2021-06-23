/**
 * Author: Luis Alberto Ccalluchi Lopez <daprimovaria@gmail.com>
 */
// import { Max } from "./classes/Max.js";
import { QuickSort } from "./classes/QuickSort.js";
import { random } from "./functions/random.js";

const ARRAY_SIZE = [256, 512, 1024, 2040, 4096, 8192, 10384];

function main() {
  console.log("n   contador/200  n*log(n)");
  ARRAY_SIZE.forEach((n) => {
    let account = 0;
    let array = [];
    for (let i = 0; i < 200; i++) {
      array = Array.from({ length: n }, () => random(n));
      // account += new Max(array).get();
      account += new QuickSort(array).get();
    }
    // console.log(`${n}, ${account / 200}, ${Math.log(n) -0.5}`);
    // Probar nlog(n)  - n
    console.log(
      `${n}, ${account / 200}, ${(n / 2.2) * Math.log(n).toFixed(2)}`
    );
  });
}
main();

// Hacer lo mismo para quicksort
// Tener cuidado con log en base 2 o en base n
// Donde colocar el contador
