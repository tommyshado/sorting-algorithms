import assert from "assert";
import { MergeSortAlgorithm } from "../MergeSortAlgorithm";

describe("Merge Sort Algorithm", () => {
    it("should sort two numbers", () => {
        let results = MergeSortAlgorithm([2, 1]);
        assert.deepEqual([1, 2], results);
    });
    it("should sort three numbers", () => {
        let results = MergeSortAlgorithm([3, 1, 5]);
        assert.deepEqual([1, 3, 5], results);
    });
});