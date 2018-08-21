interface Person {
    fristName:string;
    lastName:string;
}
function greeter(person: Person){
    return "hello" + person.fristName+" " + person.lastName;
}

let user = { fristName:"jane",lastName:"user"};
document.body.innerHTML = greeter(user);