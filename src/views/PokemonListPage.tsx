import React from 'react';
import './PokemonListPage.scss';
import { connect } from 'react-redux';
import PokemonCard from '../components/PokemonCard';

function PokemonListPage({pokemons}: any) {
  return (
    <div className="grid">
      {pokemons.map((pokemon: any) =>{
        return <PokemonCard key={pokemon.id} {...pokemon} />
      })}
    </div>
  );
}

const mapStateToProps = ({ pokemons }: any) => ({
  pokemons,
});

export default connect(mapStateToProps)(PokemonListPage);
