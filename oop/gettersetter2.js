// 


//++++++++++++++++We can also make them using object(very unpopular)++++++++++++++++++++++++
const User = {
    _email:'ddv@123.com',
    _password:"abcxs",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}
const ddv = Object.create(User)
console.log(ddv.email);