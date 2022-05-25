export interface Pokemons{
    id?: number;
    name?: string;
    type?: string;
    image?: string;
    types?: Array<object>;
    sprites?: Sprite
    url?: string
}

interface Sprite {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
}
