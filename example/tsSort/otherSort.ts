let originArray: number[] = [1, 5, 8, 2, 7, 3, 4, 9, 6, 10, 48, 11];

interface tsSortInterface {
    (origin: number[]): number[];
}

let tsSort: tsSortInterface;

tsSort = function (originArray) {
    let saveNumber: number = 0;
    for (let i: number = 0; i < originArray.length; i++) {
        for (let j: number = i; j < originArray.length; j++) {
            if (originArray[j] > originArray[i]) {
                saveNumber = originArray[j];
                originArray[j] = originArray[i];
                originArray[i] = saveNumber;
            }
        }
    }
    return originArray
}

console.log(tsSort(originArray));