import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchItems as fetchItemsAction } from '../actions';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PokemonListPage from './PokemonListPage';
import DetailsPage from './DetailsPage';
import LoginPage from './LoginPage';

const Root = ({fetchPokemon}: any) => {
  useEffect(() => {
    for(let i=1; i<=151; i++){
      fetchPokemon(i)
    }
  }, []);
  return(
    <BrowserRouter>
    {(localStorage.getItem("user") === null) ? <Redirect to='/login' /> : <Redirect to='/' />}
      <Switch>
        <Route exact path='/' component={PokemonListPage} />
        <Route exact path='/login' component={LoginPage}/>
        <Route path='/:id' component={DetailsPage}/>
      </Switch>
    </BrowserRouter>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  fetchPokemon: (id: any) => dispatch(fetchItemsAction(id)),
});

export default connect(null, mapDispatchToProps)(Root);

