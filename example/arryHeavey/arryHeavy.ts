let originArray:Array<number> = [1,2,3,4,56,8,7,9,1,3,5,12,6,];

interface arrHeyInterface {
    (arr:number[]) : number[];
}

let arrayHeaveyFun:arrHeyInterface;

arrayHeaveyFun = function(arr:number[]):number[]{
    let SaveNumber:number[] = [];
    let judagePush:boolean =false; 
    for (let j:number = 0; j < arr.length; j++) {
                if (SaveNumber.length === 0) {
                    SaveNumber.push(arr[j])
                }else{
                    for (let k:number = 0; k < SaveNumber.length; k++) {
                        if(arr[j]===SaveNumber[k]){
                            judagePush=false;
                            break;
                        }else{
                            judagePush=true;
                        }
                    }
                    if(judagePush===true){
                        SaveNumber.push(arr[j])
                    }
                }
    }
    return SaveNumber;
}

console.log(arrayHeaveyFun(originArray));