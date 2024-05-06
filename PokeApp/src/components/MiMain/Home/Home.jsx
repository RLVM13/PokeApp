import React, { useEffect, useState } from 'react';
import todos from '../../../assets/todos.gif'
import Details from '../Details/Details';

function Home() {

  const [pokemonName, setpokemonName] = useState(""); //Pokemon de busqueda
  const [pokemons, setPokemons] = useState([]); //Todos los Pokemons
  const [values, setValues] = useState({ //Nuevo estado de "Values"
    name: "",
    url: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const title = e.target.pokemon.value;
    alert(`Valor del buscador: ${title}`);
    setpokemonName(e.target.pokemon.value);
    console.log(e.target.pokemon.value);
    e.target.pokemon.value='';
  };

  useEffect(() => {
    const getPokemons = async () => {
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const data = await resp.json();
      setPokemons([data]);
      console.log(data);
    }
    getPokemons();
  }, [pokemonName]); // Se ejecuta la primera vez que se renderiza el componente

  return (
    <section className="home">
      <h1>Home</h1>
      <h2>Search Pokemon</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="pokemon" placeholder="Indica el pokemon a buscar" onChange={handleChange} />
        {values.pokemon ?
          <button type="submit">Buscar</button>
          : <></>}
      </form><br /><br />
      <ul>
        {pokemons.length != 0 ?
          pokemons.map((pokemon, i) =>
            <Details
              key={i}
              name={pokemon.name}
              base={pokemon.base_experience}
              peso={pokemon.weight}
              /* imagen={pokemon.sprites.front_default} */
            />
          )
          : <img src={todos} className="todos" alt="todos logo" />}
      </ul>
    </section>
  );
}

export default Home;