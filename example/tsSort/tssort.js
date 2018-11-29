var originArray = [1, 5, 8, 2, 7, 3, 4, 9, 6, 10, 48, 11];
var tsSort;
tsSort = function (originArray) {
    var moment = 0;
    for (var i = 0; i < originArray.length; i++) {
        for (var j = 0; j < originArray.length; j++) {
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
};
console.log(tsSort(originArray));
