import { QuickSort } from "../classes/QuickSort.js";

describe("Quick Sort", () => {
  test("it should order a array [4, 6, 7, 2, 1, 9, 2, 5, 8, 5]: ", () => {
    const input = new QuickSort([4, 6, 7, 2, 1, 9, 2, 5, 8, 5])
    expect(input.sort()).toEqual([1, 2, 2, 4, 5, 5, 6, 7, 8, 9]);
  });
});
