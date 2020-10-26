export interface PokemonProps {
  id: number;
  name: string;
  weight: number;
  height: number;
  types: any;
  sprites: any;
  stats: any;
}

export interface PokemonState {
  pokemons: PokemonProps[]
  pokemon: Object,
}

export interface ParamTypes {
  id: string
}
