class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
//we cannot use get without set or vise versa
//also if the name of the function must be same as the name oft he property
//also we can change the name inside getter and setter to be saved form getting an error
    get password(){
        return `${this._password}ddv`
    }

    set password(value){
        this._password = value
    }
}

const ddv = new User("ddv@.ai", "abc")
console.log(ddv.email);