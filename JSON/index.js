// json .stringify()
const names=["Roman","pranisha","pranish","roshna"];
const person={
    "name":"roman",
    "age":30,
    "isEmployee":true,
    "hobbie":["gamming","programming"]
};
const people=[{
    "name":"roman",
    "age":30,
    "isEmployee":true
},
    {
       "name":"pranisha",
    "age":20,
    "isEmployee":true 
    },
    {
        "name":"pranish",
     "age":20,
     "isEmployee":true 
     },
    {
        "name":"roshna",
        "age":25,
        "isEmployee":false

    }];
var jsonstring=JSON.stringify(names);
console.log(jsonstring);
var jsonstring=JSON.stringify(person);
console.log(jsonstring);
var jsonstring=JSON.stringify(people);
console.log(jsonstring);