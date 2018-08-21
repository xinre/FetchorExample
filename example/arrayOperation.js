let InitArray = [2, 3, 1,4, 2, 3, 4, 5, 6, 7, 8, 9, 4, 6, 5, 5,5,555];


function RemoveRepeat(arr) {
    let LastArray = [];
    let SaveNumber = [];
    let judagePush =false; 
    for (let i = 0; i < arr.length; i++) {
        LastArray[i] = arr[i];
    }
    for (let j = 0; j < arr.length; j++) {
        for (let h = j; h < arr.length; h++) {
            if (arr[j] == LastArray[h]) {
                if (SaveNumber.length === 0) {
                    SaveNumber.push(LastArray[h])
                }else{
                    for (let k = 0; k < SaveNumber.length; k++) {
                        if(LastArray[h]===SaveNumber[k]){
                            judagePush=false;
                            break;
                        }else{
                            judagePush=true;
                        }
                    }
                    if(judagePush===true){
                        SaveNumber.push(LastArray[h])
                    }
                }
            }
        }
    }
    return SaveNumber;
}

console.log(RemoveRepeat(InitArray));