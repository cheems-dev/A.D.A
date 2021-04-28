import { performance } from "perf_hooks";

/**
 * Bubble Sort - Algoritmo de ordenacion burbuja
 * @param {Array} array - un arreglo de enteros aleatorios
 * @returns - retorna el tiempo de aplicar el  algoritmo
 */
export const bubbleSort = (array) => {
  if (Array.isArray(array)) {
    let start = performance.now();
    for (let i = 1; i < array.length; i++) {
      for (let j = 0; j < array.length - i; j++) {
        let tmp;
        if (array[j] > array[j + 1]) {
          tmp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = tmp;
        }
      }
    }
    let end = performance.now();
    return end - start;
  }
};
