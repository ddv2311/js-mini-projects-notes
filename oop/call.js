function SetUsername(username){
    this.username = username
    console.log("Bulava aya haii");
}

function createUser(username,email,password){

    //SetUsername(username)//this will not set username for adding this function in call stack we need to use call
        SetUsername.call(this,username)//thus this executional context will be used in the above function
    this.email = email
    this.password = password
}

const person = new createUser("ddv","ddv@gmial.com",2311)
console.log(person);