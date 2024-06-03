//ARRAYS
// const arr = [1,2,3,'fadf',true];
// //array can contain any datatype within it

// arr.push(5);//adds elemet at last
// console.log(arr);

// arr.pop();//deletes element from last
// console.log(arr);

// arr.unshift(99);//adds element at first
// console.log(arr);
// arr.shift();//delete elment from the statrt
// console.log(arr);

// console.log(arr.includes(3));//gives true or false based on the presence of elemnt in the array
// //we can also find the index of a particular elemnt if we want
// //console.log(myArr.indexOf(3));
// const newArr = arr.join();
// console.log(newArr);

// //slice does not change the actual array while splice changes the actual array
// //also splice includes last while slice doesnt
//     const a =arr.slice(1,3)
//     console.log(a);
//     console.log("A",arr)

//     const b = arr.splice(1,3)
//     console.log(b)
//     console.log("B",arr);

const arr = [1,2,3,4,5]
const arr1 = [6,7,8,9,10]
//arr.push(arr1)//it will push entire array arr1 into arr which we definetly dont want
//console.log(arr);
//we can also use here concat which gives us new array while push changes actual array
//const ans = arr.concat(arr1);

const ans = [...arr,...arr1]
console.log(ans);//but it is better to use ...(spread) operater
//if we have arrays inside array then we can use flat to convert them all into one single array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
//we can convert string or object to array using .from
console.log(Array.from({name: "ddv"})) // interesting as it return empty array
