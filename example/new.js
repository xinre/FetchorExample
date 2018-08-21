const Student = (() => {
  function Student (name, age) {
    this.name = name
    this.age = age
  }
  
  Student.prototype = {
    constructor: Student,
    showMe () {
      console.log('我叫' + this.name + ' 年龄' + this.age)
    }
  }

  return Student
})()

const New = (constructor) => {
  return (...args) => {
    let f = {}

    constructor.call(f, ...args)
    f.__proto__ = constructor.prototype
  
    return f
  }
}

var stu = New(Student)('tang', 15)
// var stu2 = new Student('tang', 17)


stu.showMe()