let originArray = [1,2,3,4,56,8,7,9,1,3,5,12,6,];

function arrHeavy(arr){
    arr.sort();
    function loop(index){
        if(index>=1){
            if(arr[index] === arr[index-1]){
                arr.splice(index,1);
               }
            loop(index - 1); //递归loop函数进行去重
        }
    }
    loop(arr.length);
    return arr;
}

console.log(arrHeavy(originArray));

