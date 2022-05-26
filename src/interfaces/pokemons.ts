export interface Pokemons{
    id?: number;
    name?: string;
    type?: string;
    image?: string;
    types?: object;
    sprites?: Sprite;
    url?: string;
    index?: number
}

interface Sprite {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
}
