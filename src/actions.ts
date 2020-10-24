import axios from 'axios';

export const fetchItems = (id: any) => (dispatch: any) => {
  dispatch({ type: 'FETCH_REQUEST' });
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((payload: any) => {
      dispatch({ type: 'FETCH_SUCCESS', payload });
    })
    .catch((error: any) => {
      console.log(error);
      dispatch({ type: 'FETCH_FAILURE' });
    });
};

