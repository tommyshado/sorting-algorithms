"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const SelectionSortAlgorithm_1 = require("../SelectionSortAlgorithm");
describe("Selection Sort Algorithm", () => {
    it("should sort two numbers", () => {
        let sortedArray = (0, SelectionSortAlgorithm_1.SelectionSortAlgorithm)([10, 5]);
        assert_1.default.deepEqual([5, 10], sortedArray);
    });
    it("should sort more numbers", () => {
        let sortedArray = (0, SelectionSortAlgorithm_1.SelectionSortAlgorithm)([2, -5, 10, 7, 3]);
        assert_1.default.deepEqual([-5, 2, 3, 7, 10], sortedArray);
    });
});
