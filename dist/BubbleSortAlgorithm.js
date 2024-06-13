"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleSortAlgorithm = void 0;
class BubbleSortAlgorithm {
    sortArray(arr) {
        let arrLength = arr.length;
        let i = 0;
        while (i < arrLength) {
            let j = 0;
            while (j < arrLength) {
                // check the first two numbers from the list
                if (arr[i] > arr[j + 1]) {
                    [arr[i], arr[j + 1]] = [arr[j + 1], arr[i]];
                }
            }
            ;
            i++;
        }
        return arr;
    }
}
exports.BubbleSortAlgorithm = BubbleSortAlgorithm;
;
