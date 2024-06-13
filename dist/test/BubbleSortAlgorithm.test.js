"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const BubbleSortAlgorithm_1 = require("../BubbleSortAlgorithm");
const bubbleSort = new BubbleSortAlgorithm_1.BubbleSortAlgorithm();
describe("Bubble Sort Algorithm", () => {
    it("should return an empty array", () => {
        let sortedArray = bubbleSort.sortArray([]);
        assert_1.default.deepEqual([], sortedArray);
    });
    it("should not sort numbers", () => {
        let sortedArray = bubbleSort.sortArray([1, 6, 9, 10, 25]);
        assert_1.default.deepEqual([1, 6, 9, 10, 25], sortedArray);
    });
    it("should sort two numbers", () => {
        let sortedArray = bubbleSort.sortArray([20, 10]);
        assert_1.default.deepEqual([10, 20], sortedArray);
    });
    it("should sort more numbers", () => {
        let sortedArray = bubbleSort.sortArray([5, -1, -3, 10]);
        assert_1.default.deepEqual([-3, -1, 5, 10], sortedArray);
    });
});
