//COMPARISION

console.log("2">1);//here styring will be converted to integer before comparision
console.log(null>0);
console.log(null==0);
console.log(null>=0);//it will give true as null will be converted to 0 and then compared
//the woeking of == and >= are diffrent thus == will not give true
console.log(undefined>0);
console.log(undefined==0);
console.log(undefined>=0);
//in case of undefined all of the following will be false


//=== is string comparision and compares both data types nd values
console.log("2"===2);