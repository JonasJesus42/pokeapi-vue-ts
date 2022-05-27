export interface Pokemons {
    id: number;
    name: string;
    types: PokemonType[];
    sprites: Sprite;
    index?: number;
    abilities: PokemonAbility[];
    stats: PokemonStat[];
}
export interface Pokemon{
    name?: string;
    url?: string;
}
interface Sprite {
 front_default: string;
 front_shiny: string;
 front_female: string;
 front_shiny_female: string;
 back_default: string;
 back_shiny: string;
 back_female: string;
 back_shiny_female: string;
 other: OtherPokemonSprites;
}
interface OtherPokemonSprites {
    dream_world: DreamWorld;
}
interface DreamWorld {
    front_default: string;
    front_female: string;
}
interface PokemonType {
    slot: number;
    type: NamedAPIResource;
}
interface NamedAPIResource {
    name: string;
    url: string;
}
interface PokemonAbility {
    is_hidden: boolean;
    slot: number;
    ability: NamedAPIResource;
}

interface PokemonStat {
    stat: NamedAPIResource;
    effort: number;
    base_stat: number;
  }