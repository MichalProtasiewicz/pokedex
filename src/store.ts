import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {pokemonsReducer} from './reducer';

const store = createStore(pokemonsReducer, compose(applyMiddleware(thunk)));

export default store;
