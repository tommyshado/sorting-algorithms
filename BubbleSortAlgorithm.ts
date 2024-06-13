export class BubbleSortAlgorithm {
    sortArray(arr: number[]): number[] {
        let arrLength = arr.length;
        for (let i = 0; i < arrLength; i++) {
            for (let j = 0; j < arrLength; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
        return arr;
    }
}