export class QuickSort {
  constructor(_array) {
    this.array = _array;
    this.account = 0;
  }

  get() {
    // Hacemos uso de la funcion quicksort
    this.quickSort(this.array);
    // console.log(this.quickSort(this._array)) // salida de consola
    // Obtenemos el total de veces que se hizo un swap
    return this.account;
  }

  quickSort(arr, left = 0, right = arr.length - 1) {
    if (arr.length > 1) {
      const position = this.partition(arr, left, right);
      if (left < position - 1) this.quickSort(arr, left, position - 1);
      if (position < right) this.quickSort(arr, position, right);
    }
    return arr;
  }

  partition(arr, left, right) {
    const pivot = arr[Math.floor(Math.random() * (right - left + 1) + left)];

    while (left <= right) {
      while (arr[left] < pivot) {
        left++;
      }
      while (arr[right] > pivot) {
        right--;
      }
      if (left <= right) {
        this.swap(arr, left, right);
        left++;
        right--;
        this.account++;
      }
    }
    return left;
  }

  swap(arr, left, right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
  }
}
