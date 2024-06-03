//Higher order loops(array specific loop)

// const arr = [1,2,3,4,5]
// for (const i of arr) {
//     console.log(i);
// }

// const name = "darshit"
// for(const i of name)
//     {
//         console.log(i);
//     }


    //maps they are unique and order of insertion is maintained
    const map = new Map()
    map.set('in',"Indai")
    map.set('in',"Indai")
    map.set('us',"usasa")
    map.set('uk',"ukaaa")

    // console.log(map);
    // for(const key of map){
    //     console.log(key);
    // }//also here we can use destructuring
    // for(const[key,value] of map){
    //     console.log(key,'-:',value);
    // }
//forof fails in obj we can use forin here
    const obj ={
        js:'javascript',
        cpp:'c++',
        swift:"swiftieee"
    }
    // for (const key in obj) {
    //     //console.log(obj[key]);
    //    console.log("${key} is shortcut for ${obj[key]}");
    // }
//for in loop always refers to the key so for finding trhe value we might use arr[key]

    // const arr = [1,2,3,4,5]
    // for(const key in arr){
    //     console.log('key-:' ,key);
    //     console.log('val-:',arr[key]);
    // }

    //FOREACh

    const lang = ['c','c++','py','js']
    // lang.forEach( function(items){console.log(items);})

    // lang.forEach( (item)=>{console.log(item);})
    //we can also use the already present function if we want
    
    function print( item){
        console.log(item);
    }

   // lang.forEach(print)//here we only need to give the reference of the function


    lang.forEach( (item,index,arr)=>{console.log(item,index,arr);
    })//here not only item but index and array are also recieved as the parametres
//as here used array we can also use object