// enum Direction {
//     up = 1,
//     down = 2,
//     set = 3
// }

// console.log(Direction.up)




enum E {
    X, Y, Z
}

function f(obj: { X: number }) {
    return obj.X;
}

// Works, since 'E' has a property named 'X' which is a number.
console.log(f(E));

