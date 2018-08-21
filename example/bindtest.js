let bar = function(){
    console.log(this.x);
}

let foo = {
    x:3,
}

// bar();
// bar.bind(foo)();

let func = bar.bind(foo);
func();