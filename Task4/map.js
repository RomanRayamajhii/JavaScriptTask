 /* map :It is used to create a new array from original
  with out changing the original array. */
  // 1. 
let array=[1,2,3,4,5];
let mapArray=array.map((value)=>{
    return value;
    });
    console.log(mapArray);
    console.log(array);
    // 2.
    let array2=[9,0,7,6];
    let maparray2=array2.map(element => element);
    console.log(maparray2);
    // 2. square the given array
    let maparray3=array2.map(element=> element *element);
    console.log(maparray3);
