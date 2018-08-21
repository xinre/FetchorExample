function top(){
    console.log('top')
}
void function life(){
    console.log('life')
    var bar = function(){
        console.log('bar')
    }
    var baz = function(){
        console.log('baz')
    }
    bar()
    baz()
}()
top()
