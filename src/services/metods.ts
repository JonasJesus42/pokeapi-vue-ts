import axios from "./index";

export const pokeList = async () => {
    let arrayPokemons: Array<object> = []
    try {
        let response = await axios.getAllPokemons();
        let pokemonsData = response.data.results
        arrayPokemons = pokemonsData
    } catch (e) {
        console.error(e);
    }
    return arrayPokemons
}


export const allPokemon = async () => {
    const pokeArray = []
    for (let i = 1; i <= 150; i++) {
        const objectPokemon = await axios.onlyPokemon(i)
        pokeArray.push(objectPokemon.data)
    }
    return pokeArray
  }