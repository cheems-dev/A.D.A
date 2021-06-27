import { QuickSortPivotRandom } from "../classes/QuickSortPivotRandom.js";

describe("Quick Sort with pivot random", () => {
  test("it should order a array [4, 6, 7, 2, 1, 9, 2, 5, 8, 5]: ", () => {
    const input = new QuickSortPivotRandom([4, 6, 7, 2, 1, 9, 2, 5, 8, 5]);
    expect(input.quickSort()).toEqual([1, 2, 2, 4, 5, 5, 6, 7, 8, 9]);
  });
});
