function f1(){
    var i=999;
    ni = function(){
        i++
    }
    function f2(){
        // var h = 888;
        console.log(i);
    } 
    return f2
}

var result = new f1();
ni()
result();
// f1()

