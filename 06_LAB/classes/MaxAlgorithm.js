export class MaxAlgorithm {
  constructor(_array) {
    this.array = _array;
    this.account = 0;
  }

  run() {
    this.max(this.array);
    return this.account;
  }

  max(array = this.array) {
    let max = array[0];
    array.forEach((value) => {
      if (value > max) {
        max = value;
        this.account++;
      }
    });
    return max;
  }
}
