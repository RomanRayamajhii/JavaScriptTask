async function fetchdata() {
    try {
        const pokemonInput = document.getElementById("pokemonname");
        const pokemonImage = document.getElementById("pokemon");
        
        const pokemonname = pokemonInput.value.toLowerCase().trim();
        
        if (!pokemonname) {
            alert("Please enter a Pokemon name");
            return;
        }

        // Show loading state
        pokemonImage.style.display = "none";
        
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`);
        
        if (!response.ok) {
            throw new Error(`Pokemon "${pokemonname}" not found. Please check the spelling.`);
        }
        
        const data = await response.json();
        pokemonImage.src = data.sprites.front_default;
        pokemonImage.style.display = "block";
        
    } catch (error) {
        console.error("Error:", error);
        alert(error.message || "Failed to fetch Pokemon. Please try again.");
    }
}


fetchdata();
