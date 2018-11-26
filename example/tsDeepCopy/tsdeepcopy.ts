interface typeArray{
    a:number,
    b:string
}
interface tsdeepcopy{
    (arr:Array<any>|Object):Array<any>|Object
}
let complexData:Array<typeArray> = [{a:2,b:'tt'},{a:3,b:'hh'},{a:4,b:'yy'},{a:5,b:'hh'}];

let deepCopyFun:tsdeepcopy;

deepCopyFun=function(agument:Array<any>|Object):Array<any>|Object{
    let copyData:any = Array.isArray(agument)?[]:{};
    if(agument&&typeof agument=='object'){
        for(let i in agument){
            if(agument.hasOwnProperty(i)){
                if(agument[i]&&typeof agument[i]=='object'){
                    copyData[i]  =  deepCopyFun(agument[i])
                }else{
                    copyData[i] = agument[i]
                }
            }
        }
    }
    return copyData
}

console.log(deepCopyFun(complexData));

