let actualPageIndex
// SCARICA ESTENSIONE CORS SU FIREFOX
getNextPage();

function getNextPage() {
    if (actualPageIndex === undefined) {
        actualPageIndex = 0;
    } else {
        actualPageIndex++;
    }
    PokeService.getPage(actualPageIndex).then(pokemons => {
       
        displayPokemons(pokemons)
    })
}

function getPreviousPage() {
    actualPageIndex--;
    PokeService.getPage(actualPageIndex).then(pokemons => {
        displayPokemons(pokemons)
    })
}

function displayPokemons(pokemons) {
    const pokemonContainer = document.getElementById('pokemon-container');
    pokemonContainer.innerHTML = '';

    for (const pokemon of pokemons) {
        console.log(pokemons)
        
        pokemonContainer.innerHTML += `
        <details id="pokemon-linea">
            <summary>
                <span>${pokemon.id}</span>
                <img class ="list-image" src="${pokemon.sprites.front_default}" alt="">
                <span>${pokemon.name}</span>
                <div class="spacer"></div>
                ${pokemon.types.map(obj => `<span class="type">${obj.type.name}</span> `).join('/')}
         
            </summary>
                ${createAll(pokemon)}
    
        </details>
        `
    }
}


function createAbilitiesList(pokemon){
    let abilitiesHtml = '';
        
    for (const object of pokemon.abilities) {
        abilitiesHtml += `<li>${object.ability.name}</li>`
    }return abilitiesHtml;

}

function createWeightAndHeight(pokemon){
    let heightAndWeight = '';

    heightAndWeight += `Height:  ${pokemon.height*10}cm<br>Weight:  ${pokemon.weight/10}kg</li>`
    return heightAndWeight
}

function createStats(pokemon){
    let statsHTML = '';
    for (const object of pokemon.stats) {
        statsHTML += `<li>${object.stat.name}: ${object.base_stat}</li>`
    }
    return statsHTML
}


function createAll(pokemon){
    const abilitiesHtml = createAbilitiesList(pokemon);
    const heightAndWeight = createWeightAndHeight(pokemon);
    const statsHTML = createStats(pokemon);
    
    const shinySprite = `<div id ="shiny-sprite" ><h3>Shiny version:</h3><img src="${pokemon.sprites.front_shiny}" alt=""></div>`;
    
    const allHtml = `
        <ul>
            <div id="abilities"><h3>Abilities</h3>${abilitiesHtml}</div>
            ${shinySprite}
            <div id="height-weight">${heightAndWeight}</div>
            <div id="poke-stats"><h3>Stats</h3>${statsHTML}</div>
           
        </ul>
    `;
    
    return allHtml;
    
    }
    
    function displayPokemonsDetails(pokemon){
        const pokemonDetails = document.getElementById('pokemon-details')
        pokemonDetails.innerHTML.createAll(pokemon)
    }