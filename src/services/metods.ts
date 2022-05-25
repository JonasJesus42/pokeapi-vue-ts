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
