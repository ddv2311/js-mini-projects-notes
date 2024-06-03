const promise1 = new Promise(function(resolve,reject){
    //Do ansync task
    //Db and network call
    setTimeout(function(){
        console.log('Async tak is complete');
        resolve()//to connet then with resolve
    },1000)
});//making of promise
promise1.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("ASYNC task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Astync 2 resolved");
})

const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Darshit",email:"ddv@gmail.com"})

    },1000)
})
promise3.then(function(user){
console.log(user);
})
const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"darshit",pass:"1234"})
        }
        else{
            reject('ERROR something went wrong')
        }
    },1000)
})
promise4.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("pati gyu mara bhai");
})
const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"vyas",pass:"2004"})
        }
        else{
            reject('puru bhai something went wrong')
        }
    },1000)

})
//here in place of then we can also use async await 
async function consumePromiseFive(){
  try{
    const response = await promise5;
    console.log(response);
}
catch(error){
    console.log(error);
}
}

consumePromiseFive()
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))