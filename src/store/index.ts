import Vuex from "vuex"
import VuexPersistence from "vuex-persist"

interface State {
    pokemons: object[],
    myTeam: object[]
}

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

const store = new Vuex.Store<State>({
    state: {
        pokemons: [],
        myTeam: [],
    },
    mutations: {
        /* criar as gets e sets*/
        addInPokemons(state, objectPokemon) {
            state.pokemons.push(objectPokemon)
        },
        addPokemonInMyTeam(state, id) {
            const poke = store.state.pokemons[id - 1]
            state.myTeam.push({ ...poke })
        },
        remuvePokemon(state, id) {
            state.myTeam.splice(id, 1)
        },
    },
    plugins: [vuexLocal.plugin]
})

export default store