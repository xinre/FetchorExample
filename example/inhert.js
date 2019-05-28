var B = function() {
        this.name = 'tang'
    }
    // B.prototype.name = 'hong'
    // let b = new B()
    // b.__proto__.age = 22
    // console.log(B.prototype.name)
    // console.log(b.__proto__.name)
    // console.log(B.prototype.age)
    // console.log(b.__proto__ === B.prototype)
    // console.log(b.constructor.prototype === B.prototype)
    // console.log(b.constructor === B)
    // console.log(B.prototype)
    // console.log(b.name)

//此处为function版

let A = {

    }
    // console.log(A.__proto__.__proto__)
console.log(A.__proto__)
    // console.log(A.__proto__ === A.constructor.prototype)
console.log(B.__proto__.__proto__.__proto__)

//此处为字面量版

// let C = {t:1}
// let C1 = Object.create(C);

// console.log(C1.__proto__); //{t:1}
// console.log(C1.t) //1
// console.log(C1.__proto__===C.constructor.prototype)//false