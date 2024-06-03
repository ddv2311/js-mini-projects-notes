//OBJECTS
//singleton

const mySym =   Symbol("key1")

const JsUser = {
    name:"ddv",
    [mySym]:"mykey1",
    age:21,
    location:"Jaipur",
    email:"ddv@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Sunday"]
}

//now we can access this using both . and [] but if its string then in [] it will work like [" sd"]
//console.log(JsUser.email);
//we would have also used 
console.log(JsUser["email"])

console.log(JsUser[mySym])//symbol cannot be used like . as it shows undefined in such

JsUser.email = "ddv.2311@gmail.com"
//Object.freeze(JsUser)//now as its freezed it cant be changed

JsUser.email = "ddv.122311@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hey hero");
}   
JsUser.greeting1 = function(){
    console.log(`hey hero ${this.name}`);
}
//using this we can access the properties of the current mentioned object
console.log(JsUser.greeting());
console.log(JsUser.greeting1());


