export function SelectionSortAlgorithm(arr: number[]): number[] {
    for (let i = 0; i < arr.length - 1; i++) {
        // Store the index for a minimum number in the list
        let minIdx: number = i;
        for (let j = i + 1; j < arr.length; j++) {
            // Check the first && second element in the list then
            if (arr[i] > arr[j]) {
                // Update the {minIdx} variable with the index for minimum number in the list
                minIdx = j;
            }
        }
        // Keep track of the arr[i];
        const temp: number = arr[i];
        // Use the minIdx to get the minimum number in the list
        arr[i] = arr[minIdx] // Swap the minimum number with the element at arr[i]
        // Swap arr[i] with {temp} variable
        arr[minIdx] = temp;
    }
    return arr;
};