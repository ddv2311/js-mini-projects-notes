//OBJECTS IN DEPTH
const User = {}//this can create and object

User.id = "123"
User.name = "Darshit"
User.isLoggedIn = false

// console.log(User);
//we can also create objects inside the objects

const regUser = {
    email : "abc@gmail.com",
    fullname:{
        userFullname:{
            fname : "Darshit",
            lname : "Vyas"
        }
    }
}
// console.log(regUser);
//console.log(regUser.fullname.userFullname.lname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"b"}
//for merging both objects and putting it into object 3

const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);
//also we can do same thing using spread operator with more ease

const obj4 = {...obj1,...obj2}
console.log(obj4);

console.log(User);

console.log(Object.keys(User));
console.log(Object.values(User));
console.log(Object.entries(User));

console.log(User.hasOwnProperty('isLoggedIn'));

//we can also use her eth concept of object destructuring

const course = {
    coursename : " bhai ki shadi",
    price : "699",
    courseInstructor:"ddv"
}

//if we want to access course instructor instreda of using whole name use can simply use destructuring

const{courseInstructor:d} = course
//now if i want to print course instructor I need not to write course.courseInstructor instead use courseInstructor directly
// console.log(courseInstructor);
//even here I can give short form 
console.log(d);

// {
//     "name":"dsadf",
//     "age":"12321",

// }//this is json format as it has both the side strings
