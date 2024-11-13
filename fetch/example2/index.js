// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
// .then(response=>{
//     if(!response.ok){
//         throw new Error("Failed to fetch data")
//     }
//     return response.json();
// })
// .then(data=>console.log(data.id))
// .catch(error=>console.error(error));
async function fetchdata(){
    try{
        const pokemonname=document.getElementById("pokemonname").value.toLowerCase();
const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`);
if(!response.ok){
    throw new error("Failed to fetch data");
}
const data=await response.json();
console.log(data.id);
    }
    catch(error){
        console.error(error);
    }
}
fetchdata();