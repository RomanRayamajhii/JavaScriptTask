
        /* Async/await  =async makes a function return a pomise.
        await makes async function wait for promise .
        It allow you to write asynchronous code in synchronous manner
        it has no resolve and reject parameters*/
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
    return new Promise((resolve,reject)=>{
      
            const gotoCampus=true;
            if(gotoCampus){
                setTimeout(()=>
                    {
            resolve("went to school 🚌");
            },1500);
        }
            else{
                reject("you didn't go to school");
            }
        });
        }
        async function works(){
            try{
                const walkdogresult=await walkdog();
                console.log(walkdogresult);
                const cleanroomresult=await cleanroom();
                console.log(cleanroomresult);
                const gotoCampusresult=await gotoCampus();
                console.log(gotoCampusresult);
                console.log("task completed");
        }
        catch(error){
            console.error(error);
        }
    }
works();