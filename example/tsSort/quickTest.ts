// 快速排序
let testArr:number[] = [6,5,1,3,7,5,8,9,4,6,];

let rankFun:(arr:number[]) => number[] = (testArr) => {
    if (testArr.length <= 1) return testArr;
    let centerKey:number = Math.floor(testArr.length/2)-1;
    let centerNum:number = testArr.splice(centerKey, 1)[0];
    let leftArr:number[] = [];
    let rightArr:number[] = [];

    for(let i:number = 0; i<testArr.length; i++){
        if(testArr[i]>centerNum){
            rightArr.push(testArr[i]);
        }else{
            leftArr.push(testArr[i]);
        }
    }
    return rankFun(leftArr).concat([centerNum],rankFun(rightArr))
}

console.log(rankFun(testArr),'6666');