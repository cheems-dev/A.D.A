import randomRangeNumber from "../functions/randomRangeNumber.js";

export class QuickSortPivotRandom {
  constructor(_array) {
    this.array = _array;
    this.account = 0;
  }

  run() {
    this.quickSort(this.array);
    return this.account;
  }

  quickSort(array = this.array, lower = 0, higher = array.length - 1) {
    if (lower < higher) {
      const pivot = this.randomPartition(array, lower, higher);
      this.quickSort(array, lower, pivot - 1);
      this.quickSort(array, pivot + 1, higher);
    }
    return array;
  }

  partition(array, lower, higher) {
    let i = lower - 1;
    const pivot = array[higher];
    for (let j = lower; j < higher; j++) {
      if (array[j] <= pivot) {
        i++;
        [array[i], array[j]] = [array[j], array[i]];
        this.account++; // contador
      }
    }
    [array[i + 1], array[higher]] = [array[higher], array[i + 1]];
    return i + 1;
  }

  randomPartition(array, lower, higher) {
    // Obtener un pivote aleatorio entre el valor izquierdo al derecho
    const pivot = randomRangeNumber(lower, higher);

    // intercambia la posicion pivote con la posicion de la derecha
    [array[higher], array[pivot]] = [array[pivot], array[higher]];

    return this.partition(array, lower, higher);
  }
}
