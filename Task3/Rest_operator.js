// rest operator: it is used to combine separte elements into an array
fruit="apple";
fruit2='orange';
fruit3="grape";
function fruits(...fruits){
    console.log(...fruits);
}
fruits(fruit,fruit2,fruit3);
// array distructing with rest
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2