import { performance } from "perf_hooks";

/**
 * Bubble Sort - Algoritmo de ordenacion burbuja
 * @param {Array} array - un arreglo de enteros aleatorios
 * @returns - retorna el tiempo de aplicar el  algoritmo
 */
export const bubbleSort = (array) => {
  if (Array.isArray(array)) {
    let account = 0;
    let start = performance.now();
    for (let i = 1; i < array.length; i++) {
      account += 8;
      for (let j = 0; j < array.length - i; j++) {
        account += 8;
        let tmp;
        if (array[j] > array[j + 1]) {
          // x2
          tmp = array[j]; // x8
          array[j] = array[j + 1]; // x8
          array[j + 1] = tmp; // x8
          account += 8 * 3 + 2;
        }
      }
    }
    // console.log(`Bubble Sort Cost: ${account}`);
    let end = performance.now();
    return { time: +(end - start).toFixed(4), cost: account };
  }
};
