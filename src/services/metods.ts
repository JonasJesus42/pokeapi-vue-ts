import axios from "./index";

export const pokelist = async () => {
    const arrayPokemons: Array<object> = []
    try {
        let response = await axios.getAllPokemons();
       let pokemonsData = response.data.results
       arrayPokemons.push({...pokemonsData})

    } catch (e) {
        console.error(e);
    }
    return arrayPokemons
}