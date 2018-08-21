function greeter(person) {
    return "hello" + person.fristName + " " + person.lastName;
}
var user = { fristName: "jane", lastName: "user" };
document.body.innerHTML = greeter(user);
