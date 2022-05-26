import { Pokemons } from "@/interfaces/pokemons";
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
export const typePokemon = async (id:number) => {
    let objPokemons: Array<object> = []
    try {
        const response = await axios.getPokemon(id)
        const pokemonsData = response.data.types
        objPokemons = pokemonsData
    } catch (e) {
        console.error(e);
    }
    return objPokemons
}
