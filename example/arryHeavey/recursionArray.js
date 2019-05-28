var originArray = [1, 2, 3, 4, 56, 8, 7, 9, 1, 3, 5, 12, 6, 1, 1];
var arrayHeaveyFun;
arrayHeaveyFun = function (arr) {
    var saveHeavyArr = [];
    var SaveNumber = [];
    var judagePush = false;
    for (var j = 0; j < arr.length; j++) {
        for (var h = j + 1; h < arr.length; h++) {
            if (arr[j] == arr[h]) {
                if (saveHeavyArr.length == 0) {
                    judagePush = true;
                    break;
                }
                else {
                    for (var k = 0; k < saveHeavyArr.length; k++) {
                        if (arr[j] == saveHeavyArr[k]) {
                            judagePush = false;
                            break;
                        }
                        else {
                            judagePush = true;
                        }
                    }
                    if (judagePush == true) {
                        break;
                    }
                }
            }
            else {
                judagePush = false;
            }
        }
        if (judagePush == true) {
            saveHeavyArr.push(arr[j]);
        }
        else {
            var juagePush = true;
            for (var k = 0; k < saveHeavyArr.length; k++) {
                if (arr[j] == saveHeavyArr[k]) {
                    juagePush = false;
                }
            }
            if (juagePush == true) {
                SaveNumber.push(arr[j]);
            }
        }
    }
    return SaveNumber;
};
console.log(arrayHeaveyFun(originArray));
