class User{
    constructor(username,email,password){
            this.username = username;
            this.email = email;
            this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}
const ddv = new User("ddv","ddv@gmail.com",2311)
console.log(ddv.encryptPassword());
console.log(ddv.changeUserName());

//Behind the scenses it works as prototypes 
function Users(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password
}

Users.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

Users.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`

}
const darshit = new User("darshit","darshit@123gamil.com",231)
console.log(darshit.encryptPassword());
console.log(darshit.changeUserName());