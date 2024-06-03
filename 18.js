//MPAS AND FILTER

//const nums = [1,2,3,4,5,6,7,8,9,10]

//as foreach does not pemit toreturn we use here filter

// const newnums = nums.filter( (num) =>num>4)

// console.log(newnums);

//to make chage we can use here 
// const newnums = nums.map((num) =>  num+10)

//we can aso use the chaining
// const newnums = nums.map((num)=>num+10).filter((num)=>num>12)
// console.log(newnums);


//++++++++++++++++++REDUCE++++++++++++++++++++++
const nums = [1,2,3,4,5,6,7,8]
const total = nums.reduce((acc,curr)=>acc+curr,0)
// console.log(total);

const cart = [
   { name:"js",
    price:299},
{ name:"py",
    price:399
},
   { name:"dsa",
    price:699},

   { name:"rusian",
    price:5999}

]

const order = cart.reduce((acc,item)=>acc+item.price,0)

console.log(order);