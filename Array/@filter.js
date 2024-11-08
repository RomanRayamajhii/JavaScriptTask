let array=[1,2,3,4,5];
console.log(array);
// filter() : It is used to create new array by filtering out element
let array1=array.filter((x,i)=>x);
console.log(array1);

// print odd number 1. with out function
let array2=array.filter(x=>x%2!=0);
console.log(array2);
// 2.with function
function odd(element){
    return element % 2 !==0;
}
let oddnum=array.filter(odd);
console.log(oddnum);


