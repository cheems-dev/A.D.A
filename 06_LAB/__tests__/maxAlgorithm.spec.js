import { MaxAlgorithm } from "../classes/MaxAlgorithm.js";

describe("Max Algorithm", () => {
  test("it should get max value in [4, 6, 7, 2, 1, 9, 2, 5, 8, 5] is 9: ", () => {
    const input = new MaxAlgorithm([4, 6, 7, 2, 1, 9, 2, 5, 8, 5]);
    expect(input.max()).toEqual(9);
  });
});
