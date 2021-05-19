import { random } from "../functions/random.js";

/**
 * Clase que genera un arreglo aleatorio
 */
export default class ArrayRandom {
  array = new Array();
  constructor(n) {
    this.n = n;
    this.createArray();
  }

  /**
   * Funcion que crea un arreglo aleatorio
   */
  createArray() {
    this.setArrayRandom();
  }

  setArrayRandom() {
    for (let j = 0; j < this.n; j++) {
      this.array.push(random(this.n));
    }
  }

  getArrayRandom() {
    const mergeArray = Array.from(this.array);
    const intercalaArray = Array.from(this.array);
    return {
      merge: mergeArray,
      intercala: intercalaArray,
    };
  }
}
