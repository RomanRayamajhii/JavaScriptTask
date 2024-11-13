// json .parse()
const jsonnames=`["Roman","pranisha","pranish","roshna"]`;
const jsonperson=`{"name":"roman","age":30,
    "isEmployee":true, "hobbie":["gamming","programming"]
}`;
const jsonpeople=`[{
    "name":"roman","age":30,"isEmployee":true},
    {"name":"pranisha","age":20,"isEmployee":true  },
    { "name":"pranish","age":20,"isEmployee":true },
    {"name":"roshna","age":25,"isEmployee":false}]`;
var jsonname=JSON.parse(jsonnames);
console.log(jsonname);
var jsonpersons=JSON.stringify(jsonperson);
console.log(jsonpersons);
var jsonpeoples=JSON.stringify(jsonpeople);
console.log(jsonpeoples);