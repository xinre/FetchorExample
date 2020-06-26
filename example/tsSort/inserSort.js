// 插入排序
var originArray = [1, 5, 8, 2, 7, 3, 4, 9, 6, 10, 48, 11];
var tsSort = function (arr) {
    var nowIndex, nowNumber;
    for (var i = 0; i < arr.length; i++) {
        nowIndex = i - 1;
        nowNumber = arr[i];
        while (nowIndex >= 0 && arr[nowIndex] > nowNumber) {
            arr[nowIndex + 1] = arr[nowIndex];
            nowIndex--;
        }
        arr[nowIndex + 1] = nowNumber;
    }
    return arr;
};
console.log(tsSort(originArray));
