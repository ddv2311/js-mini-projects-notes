class User {
    constructor(username){
        this.username = username
    }
    static createId(){
        return `123`
    }//this is used as static because we need it not to change


    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)//here we can directly use super to refer to the parent class unlike __proto__ in protypes but it works here also bts
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);