let myHeros = ["thor", "ironman"]
let heroPower = {
    thor:"Hammer",
    ironman:"Suit",
    getIronPower: function(){
        console.log(`power is ${this.ironman}`);
    }
}
//if we want to add our method in prototyupe we can do that 
Object.prototype.ddv = function(){
    console.log("ddv har jagah");
}
//heroPower.ddv()//as object is upper level o farray means ddv() will also be presetn is array

//myHeros.ddv()

//but we we add method in arraay then it wont be present    in obj
Array.prototype.darshit = function(){
    console.log("ddv phirse");
}

//myHeros.darshit()//it will
//heroPower.darshit()//it wont


//INHERITENCE

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport//it inherists the propeties of teachingsupport
}
Teacher.__proto__ = User


//NOW THE MODERN SYNTAX FOR INHERITANCW IS

Object.setPrototypeOf(TeachingSupport,Teacher)//this will let TEachingsupport inherit from teacher

let newusername = "darshit   "

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`${this.trim().length}`);
}
newusername.truelength()
