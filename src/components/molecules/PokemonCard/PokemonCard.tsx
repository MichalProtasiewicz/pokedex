import React from 'react';
import './PokemonCard.scss';
import {Link} from "react-router-dom";

interface PokemonCardProps {
  id: number;
  name: string;
  weight: string;
  height: string;
  types: any;
  sprites: any;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ id, name, weight, height, types, sprites }) => (
  <div className="card">
    <img src={sprites.front_default}/>
    <span style={{fontWeight:'bold'}}>#{id} {name}</span>
    <span>TYPE: {types[0].type.name} {(types[1])? (<>{types[1].type.name}</>) : (null)} </span>
    <span>height: {height} weight: {weight}</span>
    <Link to={{pathname: `/${id}`}}>Details</Link>
  </div>
)

export default PokemonCard;
