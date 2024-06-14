"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleSort = void 0;
function BubbleSort(arr) {
    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        for (let j = 0; j < arrLength - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Keep track of arr[j]
                const temp = arr[j];
                // Swap the numbers
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
exports.BubbleSort = BubbleSort;
