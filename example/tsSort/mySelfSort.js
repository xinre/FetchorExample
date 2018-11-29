var originArray = [1, 5, 8, 2, 7, 3, 4, 9, 6, 10, 48, 11];
var tsSort;
tsSort = function (originArray) {
    var juageBool = true;
    var momentArr = [];
    var saveMax = 0;
    for (var i = 0; i < originArray.length; i++) {
        for (var j = 0; j < originArray.length; j++) {
            for (var k = 0; k < momentArr.length; k++) {
                if (momentArr[k] == originArray[j]) {
                    juageBool = false;
                    break;
                }
                else {
                    juageBool = true;
                }
            }
            if (juageBool == true) {
                if (originArray[j] > saveMax) {
                    saveMax = originArray[j];
                }
            }
        }
        // originArray[i] = saveMax;
        momentArr.push(saveMax);
        saveMax = 0;
    }
    return momentArr;
};
console.log(tsSort(originArray));
