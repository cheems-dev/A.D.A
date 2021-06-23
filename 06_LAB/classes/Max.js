export class Max {
  constructor(_array) {
    this.array = _array;
    this.account = 0;
  }

  get() {
    let max = this.array[0];
    this.array.forEach((value) => {
      if (value > max) {
        max = value;
        this.account++;
      }
    });
    return this.account;
  }
}
