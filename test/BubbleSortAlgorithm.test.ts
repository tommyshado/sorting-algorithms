import assert from "assert";
import { BubbleSortAlgorithm } from "../BubbleSortAlgorithm";

const bubbleSort = new BubbleSortAlgorithm();

describe("Bubble Sort Algorithm", () => {
    it("should return an empty array", () => {
        let sortedArray = bubbleSort.sortArray([]);
        assert.deepEqual([], sortedArray);
    });
    it("should not sort numbers", () => {
        let sortedArray = bubbleSort.sortArray([1, 6, 9, 10, 25]);
        assert.deepEqual([1, 6, 9, 10, 25], sortedArray);
    });
    it("should sort two numbers", () => {
        let sortedArray = bubbleSort.sortArray([20, 10])
        assert.deepEqual([10, 20], sortedArray);
    });
    it("should sort more numbers", () => {
        let sortedArray = bubbleSort.sortArray([5, -1, -3, 10]);
        assert.deepEqual([-3, -1, 5, 10], sortedArray);
    });
});
