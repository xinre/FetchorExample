var testArr = [6, 5, 1, 3, 7, 5, 8, 9, 4, 6,];
var rankFun = function (testArr) {
    if (testArr.length <= 1)
        return testArr;
    var centerKey = Math.floor(testArr.length / 2) - 1;
    var centerNum = testArr.splice(centerKey, 1)[0];
    var leftArr = [];
    var rightArr = [];
    for (var i = 0; i < testArr.length; i++) {
        if (testArr[i] > centerNum) {
            rightArr.push(testArr[i]);
        }
        else {
            leftArr.push(testArr[i]);
        }
    }
    return rankFun(leftArr).concat([centerNum], rankFun(rightArr));
};
console.log(rankFun(testArr), '6666');
