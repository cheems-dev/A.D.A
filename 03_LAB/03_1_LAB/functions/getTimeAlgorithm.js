import { performance } from "perf_hooks";
import insertSort from "./insertSort.js";
import mergeSort from "./mergeSort.js";

/**
 * Funcion para obtener el tiempo total de los algoritmos "Merge Sort, Insert Sort"
 * @param {Array<Number>} arrayMerge - Arreglo que sera ordenado por Merge Sort
 * @param {Array<Number>} arrayInsert  - Arreglo que sera ordenado por Insert Sort
 * @returns Retorna un JSON "JavaScript Object Notation" con el tiempo de total de "Merge Sort, Insert Sort"
 */
export default function getTimeAndCost(arrayInsert, arrayMerge) {
  let startInsert = performance.now();
  arrayInsert = insertSort(arrayInsert);
  let endInsert = performance.now();
  let startMerge = performance.now();
  arrayMerge = mergeSort(arrayMerge);
  let endMerge = performance.now();

  return {
    Insert: +(endInsert - startInsert).toFixed(8),
    Merge: +(endMerge - startMerge).toFixed(8),
  };
}
