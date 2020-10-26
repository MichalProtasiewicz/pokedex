import { AxiosResponse } from 'axios';
import {PokemonProps, PokemonState} from './interface';

const initialState = {
  pokemons: [],
  pokemon: Object,
}

type FetchRequestAction = {type: 'FETCH_REQUEST', payload: AxiosResponse<PokemonProps>}
type FetchSuccessAction = {type: 'FETCH_SUCCESS', payload: AxiosResponse<PokemonProps>}
type Actions = FetchRequestAction | FetchSuccessAction;

export const pokemonsReducer = (state: PokemonState = initialState, action: Actions) => {
  switch(action.type){
     case 'FETCH_REQUEST':
      return {
        ...state,
        isLoading: true,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        pokemons: [...state.pokemons, action.payload.data].sort((a:PokemonProps,b:PokemonProps) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0)),
      };
    default:
      return state;
  }
}
