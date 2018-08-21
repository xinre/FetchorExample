function class1(arg1){
    this.confun = function(){
        console.log(arg1);
    }
}

function class2(arry){
    class1.apply(this,arguments);
}

let arry=[1,2]
let a=new class2(arry);
a.confun();