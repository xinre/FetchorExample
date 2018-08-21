// interface LabelledValue {
//     label:string;
// }
// function printLabel(labelledObj:LabelledValue){
//     console.log(labelledObj.label);
// }
// let myObj = {size: 10, label: "size 10 Object"};
// printLabel(myObj);
//可选
// interface SquareConfig {
//     color?: string;
//     width?: number;
// }
// function createSquare(config:SquareConfig) {
//     let newSquare = {color:"white", area:100};
//     if(config.color){
//         newSquare.color = config.color;
//     }
//     if(config.width){
//         newSquare.area = config.width * config.width;
//     }
//     return newSquare;
// }
// let mySquare = createSquare({color:"black",width:66});
// console.log(mySquare)
// interface Point{
//     readonly x:number;
//     readonly y:number;
// }
// let p1: Point = {x:10,y:20};
// p1.x=6;
// interface mySearchFunc {
//     (source: string, subString:string): boolean;
// }
// let searchFunc: mySearchFunc
// searchFunc = function(src,sub){
//     let result = src.search(sub);
//     return result>3
// }
// interface StringArray{
//     [index: number]: string;
// }
// let myArray: StringArray;
// myArray = ["Bob", "Fred"];
// let myStr = myArray[0];
// console.log(myStr);
// class Animal {
//     name: string;
// }
// class Dog extends Animal {
//     breed: string='eeee';
// }
// interface NotOkay {
//     // [x: number]: Animal;
//     [x: string]: Dog;
// }
// interface ReadonlyStringArray {
//     readonly [index: number]: string;
// }
// let myArray: ReadonlyStringArray = ["Alice", "Bob"];
// console.log(myArray[1])
// interface Clockinterface {
//     currentTime:Date;
// }
// class Clock implements Clockinterface {
//     currentTime:Date;
// }
// interface Shape {
//     color: string;
// }
// interface PenStroke {
//     penWidth: number;
// }
// interface Square extends Shape, PenStroke {
//     sideLength: number;
// }
// let square = {} as Square;
// square.color = "blue";
// square.sideLength = 10;
// square.penWidth = 5.0;
// console.log(square.color)
