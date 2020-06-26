let originArray: number[] = [1, 5, 8, 2, 7, 3, 4, 9, 6, 10, 48, 11];

interface tsSortInterface {
    (origin: number[]): number[];
}

let tsSort: tsSortInterface;

tsSort = function (originArray) {
    let moment: number = 0;
    for (let i: number = 0; i < originArray.length; i++) {
        for (let j: number = 0; j < originArray.length; j++) {
            if (j != 0) {
                if (originArray[j - 1] > originArray[j]) {
                    moment = originArray[j - 1];
                    originArray[j - 1] = originArray[j];
                    originArray[j] = moment;
                }
                moment = 0;
            }
        }
    }
    return originArray;
}

console.log(tsSort(originArray));