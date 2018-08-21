function Student(name, age) {
    this.name = 'tang'
    this.age = age
    this.sayMyName = function () {
        console.log(this.name)
    }
}


Student.constructor.prototype.name = 'woshi prototype'
// Student.prototype.sayMyAge = function () {
//     console.log(this.name)
//     // console.log('hello my name')
// }


let stu = new Student()

// stu.__proto__.sayMyAge = function(){
//     console.log(this.name)
// }
console.log(Student.prototype.name)
console.log(stu._proto_name)
stu.sayMyName();

// console.log(stu.__proto__.__proto__)
// console.log(stu)

// stu.sayMyName()
            


// console.log(Student.prototype._proto_)

// Student.prototype.__proto__ = {

// }
// Student.prototype.__proto__.__proto__ = {

// }
// Student.prototype.__proto__.__proto__ = {

// }
// Student.prototype.__proto__.__proto__.__proto__.sayMyName = function () {
//     console.log('nihao zhe shi di wushu ceng') 
// }