var a = [1, 2, 3, 4, 5];
var b = [];
var c = [];
var count = 0;
function move(source, target) {
    target.push(source.pop());
    count++;
}
function hanio(n, one, two, three) {
    if (n == 1) {
        move(one, three);
    }
    else {
        console.log(0);
        hanio(n - 1, one, three, two);
        console.log(1);
        move(one, three);
        console.log(2);
        hanio(n - 1, two, one, three);
        console.log(3);
    }
}
hanio(a.length, a, b, c);
// console.log(count);
