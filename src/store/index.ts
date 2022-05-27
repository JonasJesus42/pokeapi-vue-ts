import { Pokemons } from "@/interfaces/pokemons"
import Vuex from "vuex"
import VuexPersistence from "vuex-persist"

interface State {
    pokemons: Array<object>,
    detalesPokemon: Pokemons[]
}

interface StateMytem {
    myTeam: Pokemons[],
}

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})
export const storeMyteam = new Vuex.Store<StateMytem>({
    state: {
        myTeam: [],
    },
    mutations: {
        addPokemonInMyTeam(state, objPokemon: Pokemons) {
            state.myTeam.push({ ...objPokemon })
        },
        remuvePokemon(state, id) {
            state.myTeam.splice(id, 1)
        },
        setName(state, payload) {
            state.myTeam[payload.index].name = payload.name
        }
    },
    plugins: [vuexLocal.plugin]
})

export const store = new Vuex.Store<State>({
    state: {
        pokemons: [],
        detalesPokemon: [],
    },
    mutations: {
        addInPokemons(state, objectPokemon) {
            state.detalesPokemon.push({ ...objectPokemon })
        },
    },
})
