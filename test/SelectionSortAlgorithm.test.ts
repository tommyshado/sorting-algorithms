import assert from "assert";
import { SelectionSortAlgorithm } from "../SelectionSortAlgorithm";

describe("Selection Sort Algorithm", () => {
    it("should sort two numbers", () => {
        let sortedArray = SelectionSortAlgorithm([10, 5]);
        assert.deepEqual([5, 10], sortedArray);
    });
    it("should sort more numbers", () => {
        let sortedArray = SelectionSortAlgorithm([2, -5, 10, 7, 3]);
        assert.deepEqual([-5, 2, 3, 7, 10], sortedArray);
    });
});