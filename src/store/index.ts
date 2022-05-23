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
            console.log(`pokemon adicionado em pokemons`)
        },
        addPokemonInMyTeam(state, id) {
            const poke = store.state.pokemons[id - 1]
            state.myTeam.push({ ...poke })
            console.log(`pokemon adicionado no time`)
        },
        remuvePokemon(state, id) {
            state.myTeam.splice(id, 1)
            console.log(`pokemon foi removido`)
        },
        setNamePokemon(state, { name, index }) {
            state.myTeam[index].name = name
            console.log(`Nome trocado`)
        }
    },
    plugins: [vuexLocal.plugin]
})

export default store