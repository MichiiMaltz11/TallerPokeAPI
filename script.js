const searchBtn = document.getElementById('search-btn');
const pokemonCard = document.getElementById('pokemon-card');
const pokemonName = document.querySelector('.pokemon-name');
const pokemonImg = document.querySelector('.pokemon-img');
const pokemonType = document.getElementById('pokemon-type');
const pokemonHeight = document.getElementById('pokemon-height');
const pokemonWeight = document.getElementById('pokemon-weight');
const pokemonAbilities = document.getElementById('pokemon-abilities');

const getPokemonData = async (id) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) {
            throw new Error('Pokémon no encontrado');
        }
        const data = await response.json();
        
        pokemonName.textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        pokemonImg.src = data.sprites.front_default; 
        pokemonType.textContent = data.types.map(type => type.type.name).join(', ');
        pokemonHeight.textContent = (data.height / 10).toFixed(1); 
        pokemonWeight.textContent = (data.weight / 10).toFixed(1); 
        
    
        pokemonAbilities.textContent = data.abilities.map(ability => ability.ability.name).join(', ');

        pokemonCard.style.display = 'block';
    } catch (error) {
        alert('Error: ' + error.message);
    }
};

searchBtn.addEventListener('click', () => {
    const pokemonId = document.getElementById('pokemon-id').value;
    
    if (pokemonId && pokemonId > 0 && pokemonId <= 1010) {
        getPokemonData(pokemonId); 
    } else {
        alert('Por favor, ingresa un ID valido entre 1 y 1010.');
    }
});
