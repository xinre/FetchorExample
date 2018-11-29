let originArray:number[] = [1,5,8,2,7,3,4,9,6,10,48,11]; 

interface tsSortInterface{
    (origin:number[]):number[];
}

let tsSort:tsSortInterface;

tsSort = function(originArray){
    let juageBool:boolean = true;
    let momentArr:number[] = [];
    let saveMax:number = 0;
    for(let i:number = 0; i<originArray.length; i++){
        for(let j:number = 0; j<originArray.length; j++){
            for(let k:number=0;k<momentArr.length;k++){
                if(momentArr[k]==originArray[j]){
                    juageBool=false;
                    break;
                }else{
                    juageBool=true;
                }
            }
            if(juageBool==true){
                if(originArray[j]>saveMax){
                    saveMax=originArray[j];
                }
            }
        }
        momentArr.push(saveMax);
        saveMax=0;
    }
    return momentArr;
}

console.log(tsSort(originArray));