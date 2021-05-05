import { performance } from "perf_hooks";

/**
 *  Insert Sort - Algoritmo de ordenacion por insercion
 * @param {Array} array - un arreglo de enteros aleatorios
 * @returns - retorna el tiempo de aplicar el  algoritmo
 */
export const insertSort = (array) => {
  if (Array.isArray(array)) {
    let start = performance.now(),
      arr = 0,
      j = 0;
    for (let i = 1; i < array.length; i++) {
      arr = array[i];
      j = i - 1;

      while (j >= 0 && array[j] > arr) {
        array[j + 1] = array[j];
        j -= 1;
      }

      array[j + 1] = arr;
    }
    let end = performance.now();
    return end - start;
  }
};
