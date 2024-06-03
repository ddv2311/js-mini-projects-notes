//FUNCTIONS

function sum(a,b){
        return a+b;
}

ans = sum(4,5)
console.log(ans);


function login(username){
    if(!username){
        console.log("enetr name");
        return
    }
    return `${username} just logged in`
}

// console.log(login("sda"));

function calculateCartPrice(val,val1,...num){
    return num;
}//this is rest operator
console.log(calculateCartPrice(23,321,3,2312,421434))

//we can also send array and object in functoion parameter
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));