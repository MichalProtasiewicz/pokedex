import React from 'react';
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";
import {PokemonProps, ParamTypes} from '../interface';

const DetailsPage = ({pokemons}: any) => {
  const { id }: ParamTypes = useParams();
  const pokemon = pokemons.find((x: PokemonProps) => x.id.toString() === id || x.name === id);
  return(
    <div className="card">
      {pokemon ? (
        <>
          <img src={pokemon.sprites.front_default} alt="pokemon"/>
          <span style={{fontWeight:'bold'}}>#{pokemon.id} {pokemon.name}</span>
          <span>TYPE: {pokemon.types[0].type.name} {(pokemon.types[1])? (<>{pokemon.types[1].type.name}</>) : (null)} </span>
          <span>height: {pokemon.height} weight: {pokemon.weight}</span>
          <span>Stats:</span>
          <span>Health: {pokemon.stats[0].base_stat} Attack: {pokemon.stats[1].base_stat}</span>
          <span>Defense: {pokemon.stats[2].base_stat} Sp.Attack: {pokemon.stats[3].base_stat}</span>
          <span>Sp.Deffence: {pokemon.stats[4].base_stat} Speed: {pokemon.stats[5].base_stat}</span>
        </>
      ):(null)}
    </div>
  );
}

const mapStateToProps = ({ pokemons }: any) => ({
  pokemons,
});

export default connect(mapStateToProps)(DetailsPage);

