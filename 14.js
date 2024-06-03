//this and arrow function
const user = {
    username:"Darshit",
    price:999,

    welcome: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this)
    }
}
// user.welcome();
// user.username = "ddv"
// user.welcome()

function fun(){
    let username = "vyas"
    console.log(this.username);
}
//this cannot be used inside a function as it gives undifined
// fun();

const f = function fun(){
    let username = "vyas"
    console.log(this.username);
}//it still gives undefined

const f1 = ()=>{
    let username = "vyas"
    console.log(this.username);
}

// const addTwo =(num1,num2)=>{
//     return num1+num2
// }
//const addTwo =(num1,num2)=> num1+num2//here we need not specify the return keyword
//const addTwo =(num1,num2)=> (num1+num2)//we will use such in react

const addTwo =(num1,num2)=> ({username:"ddv",age:21})




const ans = console.log(addTwo(1,2))
