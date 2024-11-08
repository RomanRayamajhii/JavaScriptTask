let grade=[45,50,60,75];
let highestmarks=grade.reduce((previouselement ,nextelement) => Math.max(previouselement ,nextelement));
console.log(highestmarks);
// total price 
let price=[100,130,75,60];
function totalprice(x,y){
    return x+y;
}
let t_price=price.reduce(totalprice);
console.log(t_price);