//CONVERSIONS
let score = "95acx"
console.log(typeof(score));

let ore = Number(score)
console.log(typeof(ore));//here it will try to convert 95abx also to number but actually its NaN

console.log(ore);//this is an problem in js
//also it converts null to 0 during type conversion in Number

let x = null;

let y = Number(x);

console.log(y);
//if we try to convert undifined into number we will get Nan


//1->true,0->false,""->false,"abcdadv"->true
