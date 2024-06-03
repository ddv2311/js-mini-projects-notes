const desc = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(desc);


const person = {
    name : 'Darshit',
    age:20,
    isHonest : true
}
// console.log(Object.getOwnPropertyDescriptor(person,"name"));
// we can also define owr own properties 

Object.defineProperty(person,'name',{
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(person,"name"));
person.name= "ddv";
console.log(person.name);//thus as its  ot writable it is not changed to ddv from darshit

//if enumerable is false means we cant iterate through it
