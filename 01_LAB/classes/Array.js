import { bubbleSort } from "../functions/bubbleSort.js";
import { insertSort } from "../functions/insertSort.js";
import { random } from "../functions/random.js";
/**
 * Clase que genera un arreglo aleatorio
 */
export default class ArrayRandom {
  arrayBubble = [];
  arrayInsert = [];
  constructor(n, size) {
    this.n = n;
    this.size = size;
    this.createArray();
  }
  /**
   * Funcion que crea un arreglo aleatorio
   */
  createArray() {
    for (let i = 0; i < this.n; i++) {
      let tmp = [];
      for (let j = 0; j < this.size; j++) {
        tmp.push(random(this.size));
      }
      this.arrayBubble.push(Array.from(tmp));
      this.arrayInsert.push(Array.from(tmp));
    }
  }

  /**
   * Funcion que ordena los arreglos aleatorios
   * @returns Obtenemos el tiempo promedio en "ms" de bubbleSort y InsertSort
   */
  getTimeAlgorithm() {
    let account_time_bubble = 0,
      account_time_insert = 0;
    for (let i = 0; i < this.n; i++) {
      account_time_bubble += bubbleSort(this.arrayBubble[i]);
      account_time_insert += insertSort(this.arrayInsert[i]);
    }
    const total_time_bubble = (account_time_bubble / this.n).toFixed(5);
    const total_time_insert = (account_time_insert / this.n).toFixed(5);
    return { total_time_bubble, total_time_insert };
  }
}
