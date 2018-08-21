// let arry=[1,2,3];
// function* counttest(){
//     for(let i in arry){
//         yield arry[i]
//     }
// }

// const testResultc=counttest();
// for(let j in arry){
//     console.log(testResultc.next());
// }
// console.log(testResultc.next());
let result;
let genrtor;

function* g4(){
    yield* [1,2,3,4];
    yield* "jjk";
    return "foo";
}

function* g5(){
    genrtor=yield* g4();
}
result = g5();

for(let i=0;i<10;i++){
    console.log(result.next());
}
console.log(genrtor);