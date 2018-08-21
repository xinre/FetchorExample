// function identity<T>(arg:T): T{
//     return arg;
// }

// // let output = identity<string>("mystring");
// let output = identity("mystring");
// console.log(output);



// function logging<T>(arg: T[]): T[] {
//     console.log(arg.length);
//     return arg;
// }

// let output2 = logging<string>(['e','r','c']);
// console.log(output2)



// interface generic{
//     <T>(arg: T): T;
// }

// function indentity(arg){
//     return arg;
// }

// let myIndentity: generic = indentity(6);
// console.log(myIndentity)


// class Generic<T> {
//     zeroValue: T;
//     add: (x: T,y: T) => T
// }

// let myGenericNumber = new Generic<number>()

// myGenericNumber.zeroValue = 8;
// myGenericNumber.add = function(x,y){
//     // console.log(x+y);
//     // console.log(this.zeroValue);
//     let sum=x+y;
//     return sum +this.zeroValue;
// }

// console.log(myGenericNumber.add(6,6));



// interface Lengthwise {
//     length: number;
// }

// function loggingIdentity<T extends Lengthwise>(arg: T): T {
//     console.log(arg.length); 
//     return arg;
// }

// // loggingIdentity(3);

// loggingIdentity({length: 10, value: 3});




