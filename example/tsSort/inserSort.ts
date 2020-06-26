// 插入排序
let originArray: number[] = [1, 5, 8, 2, 7, 3, 4, 9, 6, 10, 48, 11]

interface tsSortInterface {
  (origin: number[]): number[]
}

let tsSort: tsSortInterface = function (arr) {
  let nowIndex: number, nowNumber: number

  for (let i = 0; i < arr.length; i++) {
    nowIndex = i - 1;
    nowNumber = arr[i]

    while (nowIndex >= 0 && arr[nowIndex] > nowNumber) {
      arr[nowIndex + 1] = arr[nowIndex]
      nowIndex--
    }

    arr[nowIndex + 1] = nowNumber
  }

  return arr
}

console.log(tsSort(originArray));