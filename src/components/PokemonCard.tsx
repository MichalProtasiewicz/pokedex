import React from 'react';
import {Link} from "react-router-dom";
import {PokemonProps} from '../interface';

const PokemonCard: React.FC<PokemonProps> = ({ id, name, weight, height, types, sprites }) => (
  <div className="card">
    <img src={sprites.front_default} alt="pokemon"/>
    <span style={{fontWeight:'bold'}}>#{id} {name}</span>
    <span>TYPE: {types[0].type.name} {(types[1])? (<>{types[1].type.name}</>) : (null)} </span>
    <span>height: {height} weight: {weight}</span>
    <Link to={{pathname: `/${id}`}}>Details</Link>
  </div>
)

export default PokemonCard;
