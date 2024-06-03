//SWITCH
// const month =3
// switch (month) {
//     case 1:
//         console.log("Jan");
//         break;
//     case 2:
//         console.log("Feb");
//         break;
//     case 3:
//         console.log("MAr");
//         break;
//     case 4:
//         console.log("apr");
//         break;

//     default:
//         console.log("javade ey loda");
//         break;
// }


//Truthy and falsy
//falsy values-: false,0,-0,BigInt 0n,"",null,undefined,NaN
//thruthy-:all except falsy


//Nullish Coalasing operator for null and undefined

let val;
//val = null ?? 55
//val = undefined ?? null//if first if undefined or null it will definetly take second whaterver it may also null or undefined    
//val = 5 ?? 10//if first value is null or undefined then it chooses the second value otherwise it chooses the first one
val = null??undefined??1
//console.log(val);

//TERNARY

const x=7
x==5?console.log("ahhh"):console.log("oyeahhh");;
