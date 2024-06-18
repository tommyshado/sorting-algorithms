"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeSortAlgorithm = void 0;
function MergeSortAlgorithm(arr) {
    // Base case
    if (arr.length < 2)
        return arr;
    // Store the middle index
    let middle = Math.floor(arr.length / 2);
    let left = [];
    let right = [];
    for (let i = 0; i <= middle - 1; i++) {
        left.push(arr[i]);
    }
    for (let j = middle; j < arr.length - 1; j++) {
        right.push(arr[j]);
    }
    // Recursively call the functions
    MergeSortAlgorithm(left);
    MergeSortAlgorithm(right);
    return Merge(left, right, arr);
}
exports.MergeSortAlgorithm = MergeSortAlgorithm;
;
// create a helper function called Merge that takes in three unsorted arrays
function Merge(leftArray, rightArray, actualArray) {
    console.log("left array", leftArray);
    console.log("right array", rightArray);
    // initialize the indices for each array to 0
    let i = 0;
    let j = 0;
    let k = 0;
    // Loop over the length of the leftArray && rightArray
    while (i < leftArray.length && j < rightArray.length) {
        // Case where the element at leftArray is smaller
        if (leftArray[i] <= rightArray[j]) {
            // Update actualArray[k] with leftArray[i]
            actualArray[k] = leftArray[i];
            // Increment the indices for the leftArray
            i++;
            // Case where the element at leftArray is greater then
        }
        else {
            // Update the actualArray[k] with rightArray[j]
            actualArray[k] = rightArray[j];
            // Increment the indices for the rightArray
            j++;
        }
        ;
        k++;
    }
    ;
    return actualArray;
    // while(i < leftArray.length) {
    //     actualArray[k] = leftArray[i];
    //     i++;
    //     k++;
    // }
    // while(j < rightArray.length) {
    //     actualArray[k] = rightArray[j];
    //     j++;
    //     k++
    // };
}
;
