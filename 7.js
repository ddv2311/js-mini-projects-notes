//nums and math
const score = new Number(100);
console.log(score.toString().length);

console.log(score.toFixed(3));//numbers of digits after point

console.log(Math.abs(-4));
console.log(Math.round(-4.5));
console.log(Math.ceil(-4.5));
console.log(Math.floor(-4.5));

console.log(Math.min(1,3,6,8,9));
console.log(Math.max(1,3,6,8,9));

console.log(Math.random());//it gives from 0 to 1
console.log(Math.random()*10 +1);//it gives from 0 to 1

//to get a rondom number in desired range
const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1)+min));


