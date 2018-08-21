function animate(name){
    this.name=name;
    this.namecon=function(){
        console.log(this.name);
    }
}

function dog(name){
    animate.call(this,arguments[0]);
}

let dogc=new dog('foll,dog');
dogc.namecon();