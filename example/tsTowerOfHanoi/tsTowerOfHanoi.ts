let a:number[]=[1,2,3,4,5];
let b:number[]=[];
let c:number[]=[];
let count:number=0;
function move(source:number[],target:number[]):void{
    target.push(source.pop());
    count++;
}

function hanio(n:number,one:number[],two:number[],three:number[]):void{
    if(n==1){
        move(one,three);
    }else{
        console.log(0)
        hanio(n-1,one,three,two);
        console.log(1)
        move(one,three);
        console.log(2)
        hanio(n-1,two,one,three);
        console.log(3)
    }
}

hanio(a.length,a,b,c)
// console.log(count);
