import axios from "axios"

const api = axios.create({
    baseURL:  'https://pokeapi.co/api/v2/'
})



export default {
    getAllPokemons() {
        return api.get('pokemon?limit=150')
    }
}