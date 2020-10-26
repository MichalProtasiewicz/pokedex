import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PokemonCard from '../components/PokemonCard';
import {PokemonProps} from '../interface';

function PokemonListPage({pokemons}: any) {
  const [searchText, setSearchText] = useState("");

  const results = !searchText
    ? pokemons
    : pokemons.filter((pokemon: PokemonProps) =>
        pokemon.name.toLowerCase().includes(searchText.toLocaleLowerCase()) ||
        pokemon.id.toString().includes(searchText) ||
        pokemon.types[0].type.name.toLowerCase().includes(searchText.toLocaleLowerCase()) ||
        (pokemon.types[1]) && (pokemon.types[1].type.name.toLowerCase().includes(searchText.toLocaleLowerCase()))
      );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  }

  return (
    <>
    <h1>Pokemon List</h1>
    <Link className='button' to='/login' onClick={()=> localStorage.removeItem('user')}>Logout</Link>
    <p>You can search pokemons by name, id or type.</p>
    <input type="text" placeholder="Search..." value={searchText} onChange={handleChange} />
    <div className="grid">
      {results.map((pokemon: PokemonProps) => {
      return <PokemonCard key={pokemon.id} {...pokemon} />
    })}
    </div>
    </>
  );
}

const mapStateToProps = ({ pokemons }: any) => ({
  pokemons,
});

export default connect(mapStateToProps)(PokemonListPage);
