//Date time
let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());

//The datatype of date is object

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());
//we can create t3he format of the date as we want

let ts = Date.now()
console.log(ts);//it always gives in ms

// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

//we can also use methods like getdate getMonth
//we can also create thing in our way

newDate.toLocaleString('default', {
    weekday: "long",
    
})