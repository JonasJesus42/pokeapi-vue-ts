interface Pokemons{
    id?: number;
    name?: string;
    type?: string;
    image?: string;
    myTeam: pokemonsObjeto;
    types: [];
    sprites: string
}

export type pokemonsObjeto = object | Pokemons;

export default Pokemons