import React, { useEffect, useState } from 'react';
import todos from '../../../assets/todos.gif'
import Card from "../Card";

function ListaPokemon() {

  const [pokemons, setPokemons] = useState([]); //Todos los Pokemons

  useEffect(() => {
    const getPokemons = async () => {
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
      const data = await resp.json();
      setPokemons(data);
      console.log(data);
    }
    getPokemons();
  }, []); // Se ejecuta la primera vez que se renderiza el componente

  return (
    <section className="listar">
      <h1>Listado de Pokemons</h1>
        {pokemons.length != 0 ?
          pokemons.results.map((pokemon, i) =>
            <Card
              key={i}
              name={pokemon.name}
              url={pokemon.url}
            />
          )
          : <img src={todos} className="todos" alt="todos logo" />}
    </section>
  );
}

export default ListaPokemon;
