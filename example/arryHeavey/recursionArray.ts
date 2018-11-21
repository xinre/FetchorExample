let originArray:Array<number> = [1,2,3,4,56,8,7,9,1,3,5,12,6,1,1];

interface arrHeyInterface {
    (arr:number[]) : number[];
}

let arrayHeaveyFun:arrHeyInterface;

arrayHeaveyFun = function(arr:number[]):number[]{
    let saveHeavyArr:number[] = [];
    let SaveNumber:number[] = [];
    let judagePush:boolean =false; 
    for (let j:number = 0; j < arr.length; j++) {
        for (let h:number = j+1; h < arr.length; h++) {
            if (arr[j] == arr[h]) {
                if(saveHeavyArr.length==0){
                    judagePush=true;   
                    break;
                }else{
                    for(let k:number=0;k<saveHeavyArr.length;k++){
                        if(arr[j]==saveHeavyArr[k]){
                            judagePush=false;  
                            break;                
                        }else{
                            judagePush=true;
                        }
                    }
                    if(judagePush==true){
                        break;
                    }
                }
            }else{
                judagePush=false; 
            }
        }
        if(judagePush==true){
                saveHeavyArr.push(arr[j]);            
        }else{
            let juagePush:boolean =true; 
            for(let k:number=0;k<saveHeavyArr.length;k++){
                if(arr[j]==saveHeavyArr[k]){
                    juagePush=false;
                }
            }
            if(juagePush==true){
                SaveNumber.push(arr[j]);
            }
        }
    }
    return SaveNumber;
}

console.log(arrayHeaveyFun(originArray));