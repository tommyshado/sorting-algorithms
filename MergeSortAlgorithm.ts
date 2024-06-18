export function MergeSortAlgorithm(arr: number[]): number[] {
    // Base case
    if (arr.length < 2) return arr;

    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    // Recursive case
    MergeSortAlgorithm(left);
    MergeSortAlgorithm(right);
    return Merge(left, right);
};

function Merge(leftArray: number[], rightArray: number[]): number[] {
    let sortedArray: number[] = [];
    let i = 0;
    let j = 0;

    while(i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] <= rightArray[j]) {
            sortedArray.push(leftArray[i]);
            i++;
        } else {
            sortedArray.push(rightArray[j]);
            j++;
        };
    };
    // Concatenate any remaining elements from the left and right arrays
    return sortedArray.concat(leftArray.slice(i)).concat(rightArray.slice(j));
};



// Create a function to handle the sorting of numbers in each sub-array.
    // Store the middle index using the given array.
    // Create an empty array to store the left halve of the sub-array.
    // Create another empty array to store the right halve of the sub-array.

    // Loop until the length of the middle index in the actual array
        // Make a recursive call using the MergeSortAlgorithm on the left halve of the array
        // Make another recursive call using the MergeSortAlgorithm on the right halve of the array
        // Return the Merge function that takes in the left and right halves arrays

// Create another function called Merge that takes in two unsorted arrays and to compare the first numbers in each sub array
    // Create an empty array to store the sorted array
    // Initialize two variables i and j to 0.
    // Then create a while loop to iterate until the length of each sub-array
        // Compare the elements at i and j
            // Insert smaller element into the empty array.
        // Otherwise, insert the bigger element at the end of the array