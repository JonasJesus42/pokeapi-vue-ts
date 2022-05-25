import axios from "./index";

export const pokeList = async () => {
    let arrayPokemons: Array<object> = []
    try {
        const response = await axios.getAllPokemons();
        const pokemonsData = response.data.results
        arrayPokemons = pokemonsData
    } catch (e) {
        console.error(e);
    }
    return arrayPokemons
}
