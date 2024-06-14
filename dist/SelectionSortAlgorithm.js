"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectionSortAlgorithm = void 0;
function SelectionSortAlgorithm(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        // Store the index for a minimum number in the list
        let minIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            // Check the first && second element in the list then
            if (arr[i] > arr[j]) {
                // Update the {minIdx} variable with the index for minimum number in the list
                minIdx = j;
            }
        }
        // Keep track of the arr[i];
        const temp = arr[i];
        // Use the minIdx to get the minimum number in the list
        arr[i] = arr[minIdx]; // Swap the minimum number with the element at arr[i]
        // Swap arr[i] with {temp} variable
        arr[minIdx] = temp;
    }
    return arr;
}
exports.SelectionSortAlgorithm = SelectionSortAlgorithm;
;
