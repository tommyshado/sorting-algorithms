import assert from "assert";
import { BubbleSort } from "../BubbleSortAlgorithm";

describe("Bubble Sort Algorithm", () => {
    it("should return an empty array", () => {
        let sortedArray = BubbleSort([]);
        assert.deepEqual([], sortedArray);
    });
    it("should not sort numbers", () => {
        let sortedArray = BubbleSort([1, 6, 9, 10, 25]);
        assert.deepEqual([1, 6, 9, 10, 25], sortedArray);
    });
    it("should sort two numbers", () => {
        let sortedArray = BubbleSort([20, 10])
        assert.deepEqual([10, 20], sortedArray);
    });
    it("should sort more numbers", () => {
        let sortedArray = BubbleSort([5, -1, -3, 10]);
        assert.deepEqual([-3, -1, 5, 10], sortedArray);
    });
});
