var originArray = [1, 5, 8, 2, 7, 3, 4, 9, 6, 10, 48, 11];
var tsSort;
tsSort = function (originArray) {
    var saveNumber = 0;
    for (var i = 0; i < originArray.length; i++) {
        for (var j = i; j < originArray.length; j++) {
            if (originArray[j] > originArray[i]) {
                saveNumber = originArray[j];
                originArray[j] = originArray[i];
                originArray[i] = saveNumber;
            }
        }
    }
    return originArray;
};
console.log(tsSort(originArray));
