//STRINGS
const name = "ddv";
const mark = 90;
console.log(name+mark+" thaths mine!!");//this is an old way of writing things

console.log(`Heyy my name is ${name} and marks are ${mark}`);//its fugging modern and called  string intercolasion  

//also it can be defined as

const game = new String("abcdefgh")
console.log(game[2]);
console.log(game.length);

console.log(game.toLowerCase());
console.log(game.charAt(3));

console.log(game.indexOf('g'));

const str = game.substring(0,5);
console.log(str);

const newstr = game.slice(-6,5);
console.log(newstr);

const stri = "   darshit     ";
console.log(stri);
console.log(stri.trim());

const url = "ddv.2311#23.gmail.com";
console.log(url.replace('#','@'));