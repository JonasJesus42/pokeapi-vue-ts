import { Pokemons } from "@/interfaces/pokemons";
import { store } from "@/store";
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
export const getAllDataPokemon = async () => {
    try {
        let pokemonsPromesis = []
        for (let i = 1; i <= 150; i++) {
            pokemonsPromesis.push(axios.getPokemon(i))
        }

        let pokemonJson = await Promise.all(pokemonsPromesis)
        let pokemonObj: Pokemons[] = pokemonJson.map((elem) => {
            return <Pokemons>{
                id: elem.data.id,
                name: elem.data.name,
                types: elem.data.types,
                sprites: elem.data.sprites,
                abilities: elem.data.abilities,
                stats: elem.data.stats
            }
        }, {})
        store.state.detalesPokemon.push(...pokemonObj)
    } catch (e) {
        console.error(e);
    }
}
