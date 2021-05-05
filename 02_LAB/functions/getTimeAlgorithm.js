import { bubbleSort } from "./bubbleSort.js";
import { insertSort } from "./insertSort.js";
/**
 * Funcion que ordena los arreglos aleatorios
 * @returns Obtenemos el tiempo en "ms" de bubbleSort y InsertSort
 */
export default function getTimeAndCost(arrayBubble, arrayInsert) {
  console.log("-----------------------------");
  console.log(arrayBubble);
  console.log(arrayInsert);
  console.log("-----------------------------");
  const time_bubble = bubbleSort(arrayBubble).toFixed(4);
  const time_insert = insertSort(arrayInsert).toFixed(4);
  console.log("-----------------------------");
  console.log(arrayBubble);
  console.log(arrayInsert);
  console.log("-----------------------------");
  return { time_bubble, time_insert };
}
