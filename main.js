const pokemonsId = [1, 4, 11, 12, 25]

const getPokemon = async id => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return await response.json()   
}

const logPokemon = async id => {
    const pokemon = await getPokemon(id)
console.log(`Pokemon obtido: ${pokemon.name}`)
}

pokemonsId.forEach(id => logPokemon(id))




