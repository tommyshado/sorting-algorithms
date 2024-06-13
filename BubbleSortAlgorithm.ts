export class BubbleSortAlgorithm {
    sortArray(arr: number[]): number[] {
        let arrLength = arr.length;
        let swapped: boolean;

        for (let i = 0; i < arrLength; i++) {
            swapped = false;
            for (let j = 0; j < arrLength - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    swapped = true;
                }
            }
            if (!swapped) {
                break;
            }
        }
        return arr;
    }
}