import { bubbleSort } from "./bubbleSort.js";
import { insertSort } from "./insertSort.js";
/**
 * Funcion que ordena los arreglos aleatorios
 * @returns Obtenemos el tiempo en "ms" de bubbleSort y InsertSort
 */
export default function getTimeAndCost(arrayBubble, arrayInsert) {
  const Bubble = bubbleSort(arrayBubble);
  const Insert = insertSort(arrayInsert);

  return { Bubble, Insert };
}
