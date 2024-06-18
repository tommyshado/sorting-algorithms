"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const MergeSortAlgorithm_1 = require("../MergeSortAlgorithm");
describe("Merge Sort Algorithm", () => {
    it("should sort three numbers", () => {
        let sortedArray = (0, MergeSortAlgorithm_1.MergeSortAlgorithm)([12, 36, 1]);
        assert_1.default.deepEqual([1, 12, 36], sortedArray);
    });
});
