import axios from "axios"

export const getPokemon = (id: number) => {
    const getPokemonUrl = (id: number) => `https://pokeapi.co/api/v2/pokemon/${id}`
    
    const pokemon = axios.get(getPokemonUrl(id)).then(async response => await response.data)
    return pokemon
}

/*     const numberOfPokemon = 2

    const pokePromises = []

    for (let i = 1; i <= numberOfPokemon; i++) {
    }
    const array:any = []
    
    .then(async (pokemons) => {
            await pokemons.map((elemento, indice, arrayBase)=>{
                array.push({
                    id: elemento.id,
                    name: elemento.name,
                    type: elemento.types[0].type.name,
                    image: elemento.sprites.other.dream_world.front_default
                })
                
            })
            
        }) */


/*             const listPokemons = pokemons.reduce((pokemons, pokemonAtual) => {
                console.log(pokemons)
                const array = []
                array.push({
                    id: pokemonAtual.id,
                    name: pokemonAtual.name,
                    type: pokemonAtual.type,
                    image: pokemonAtual.sprites.other.dream_world.front_default
                })

                return array
            },{}) */
