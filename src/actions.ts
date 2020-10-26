import axios, { AxiosResponse } from 'axios';
import {PokemonProps} from './interface';

export const fetchItems = (id: number) => (dispatch: Function) => {
  dispatch({ type: 'FETCH_REQUEST' });
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((payload: AxiosResponse<PokemonProps>) => {
      dispatch({ type: 'FETCH_SUCCESS', payload });
    })
    .catch((error: MessageChannel) => {
      console.log(error);
      dispatch({ type: 'FETCH_FAILURE' });
    });
};
