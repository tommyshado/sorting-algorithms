export function BubbleSort(arr: number[]): number[] {
    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        for (let j = 0; j < arrLength - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Keep track of arr[j]
                const temp: number = arr[j];
                // Swap the numbers
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}