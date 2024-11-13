
        /* promise = An object that manage asynchronous operations.
new promise((resolve,reject)=>{asynchronous code}) */
// lets do the job
// 1. walk the dog
//2. Clean the room
//3. go to campus
function walkdog(){
    return new Promise((resolve,reject)=>{setTimeout(()=>
        {
            const walkdog=true;
            if(walkdog){
            resolve("walk the dog 🐕");
            }else{  
                reject("can't walk the dog 🐕");
        }},3000);});

}
function cleanroom(){
    return new Promise((resolve,reject)=>{setTimeout(()=>
{
    const cleanroom=true;
    if(cleanroom){
        resolve("clean the room 🧹");
    }
    else{
        reject("you didn't clean the room 🧹"); 
    }
   
},1000)});
}
function gotoCampus(){
    return new Promise((resolve,reject)=>{setTimeout(()=>
        {
            const gotoCampus=false;
            if(gotoCampus){
            resolve("went to school 🚌");
            }
            else{
                reject("you didn't go to school");
            }
        },1500)});
        }
        
  
walkdog().then(value=> {console.log(value); 
     return  cleanroom().then(value=> {console.log(value);
         return gotoCampus().then(value=> {console.log(value);  
                console.log("The job completed!");})})})
                .catch(error=>console.error(error));
