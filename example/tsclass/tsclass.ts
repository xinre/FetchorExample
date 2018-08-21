// class Greeter{
//     greeting: string;
//     constructor(message:string){
//         this.greeting = message
//     }
//     greet(){
//         return "hello"+this.greeting;
//     }
// }

// let gre = new Greeter("wrold");

// console.log(gre.greet());

// class Animal{
//     move(distanceIn: number = 8){
//         console.log(`Animal moved ${distanceIn}m.`)
//     }
// }

// class Dog extends Animal {
//     bark(){
//         console.log('Woof Woof')
//     }
// }

// const dog = new Dog();
// dog.bark();
// dog.move(10);
// dog.bark();


// class Animal {
//     name: string;
//     constructor(theName: string) { this.name = theName; }
//     move(distanceInMeters: number = 0) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }

// class Snake extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 5) {
//         console.log("Slithering...");
//         super.move(distanceInMeters);
//     }
// }

// class Horse extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 66) {
//         console.log("Galloping...");
//         super.move(distanceInMeters);
//     }
// }

// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");

// sam.move();
// tom.move(34);

// class Animal {
//     private name: string;
//     age: number;
//     kkk: number = 66;
//     constructor(theName: string,theage: number) { 
//         this.name = theName;
//         this.age = theage;
//      }
// }

// class Rhino extends Animal {
//     // constructor(theName: string,theage: number) { 
//     //     super(theName,theage)
//     //  }
//     // move(){
//     //     console.log(this.age)
//     // }
//     constructor() { super("Rhino",44); }
//     move(){
//         console.log(this.age)
//         console.log(this.kkk)
//     }
// }

// let animal = new Animal("Goat",66);
// let rhino = new Rhino();

// rhino.move()

// class Animal {
//     constructor(private name: string) { }
//     move(distanceInMeters: number) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }

// let anima = new Animal('rrr')

// anima.move(55)




// let passcode = "secret passcode";

// class Employee {
//     private _fullName: string;

//     get fullName(): string {
//         return this._fullName;
//     }

//     set fullName(newName: string) {
//         if (passcode && passcode == "secret passcode") {
//             this._fullName = newName;
//         }
//         else {
//             console.log("Error: Unauthorized update of employee!");
//         }
//     }
// }

// let employee = new Employee();
// employee.fullName = "Bob Smith";
// if (employee.fullName) {
//     console.log(employee.fullName);
// }


class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));