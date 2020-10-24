import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchItems as fetchItemsAction } from '../actions';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PokemonListPage from './PokemonListPage';
import DetailsPage from './DetailsPage';

const Root = ({fetchPokemon}: any) => {
  useEffect(() => {
    for(let i=1; i<=100; i++){
      fetchPokemon(i)
    }
  }, []);
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={PokemonListPage} />
        <Route path='/:id' component={DetailsPage}/>
      </Switch>
    </BrowserRouter>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  fetchPokemon: (id: any) => dispatch(fetchItemsAction(id)),
});

export default connect(null, mapDispatchToProps)(Root);

