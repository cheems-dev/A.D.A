import { random } from "../functions/random.js";

/**
 * Clase que genera un arreglo aleatorio
 */
export default class ArrayRandom {
  array = new Array();
  constructor(n, option) {
    this.n = n;
    this.createArray(option);
  }

  /**
   * Funcion que crea un arreglo aleatorio
   */
  createArray(option) {
    switch (option) {
      case "desc":
        this.setArrayRandomDesc();
        break;
      case "asc":
        this.setArrayRandomAsc();
        break;
      default:
        this.setArrayRandom();
        break;
    }
  }

  setArrayRandom() {
    for (let j = 0; j < this.n; j++) {
      this.array.push(random(this.n));
    }
  }

  setArrayRandomDesc() {
    let account = 0;
    for (let j = this.n; j >= 0; --j) {
      account += random(this.size, false);
      this.array[j] = account;
    }
  }

  setArrayRandomAsc() {
    let account = 0;
    for (let j = 0; j < this.size; j++) {
      account += random(this.size, false);
      this.array.push(account);
    }
  }

  getArrayRandom() {
    const bubbleArray = Array.from(this.array);
    const insertArray = Array.from(this.array);
    return { bubbleArray, insertArray };
  }
}
