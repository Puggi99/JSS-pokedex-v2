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
        <details>
            <summary>
                <span>${pokemon.id}</span>
                <img class ="list-image" src="${pokemon.sprites.front_default}" alt="">
                <span>${pokemon.name}</span>
                <div class="spacer"></div>
                ${pokemon.types.map(obj => `<span class="type">${obj.type.name}</span> `).join('/')}
            </summary>
            <div>
                <ul>
                    ${createAbilitiesList(pokemon)}
                </ul>
            </div>
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
