// enum Direction {
//     up = 1,
//     down = 2,
//     set = 3
// }
// console.log(Direction.up)
var E;
(function (E) {
    E[E["X"] = 0] = "X";
    E[E["Y"] = 1] = "Y";
    E[E["Z"] = 2] = "Z";
})(E || (E = {}));
function f(obj) {
    return obj.X;
}
// Works, since 'E' has a property named 'X' which is a number.
console.log(f(E));
