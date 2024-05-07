import { useState } from "react";
import Details from "../Details/Details";
import todos from '../../../assets/todos.gif'

import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

const Alta = () => {

  const [pokemons, setPokemons] = useState([]); //Todos los Pokemons
  const [values, setValues] = useState({ //Nuevo estado de "Values"
    name: "",
    base: "",
    peso: "",
    url_img: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const nombre = e.target.elements.nombre.value; // e.target.elements.title.value;
    const base = e.target.elements.base.value;
    const peso = e.target.elements.peso.value;
    const url = e.target.elements.url.value;

    const item = { nombre, base, peso, url }; //Nuevo objeto
    setValues([...values, item]); //Añade el nuevo destino a la lista
    console.log("********");
    console.log(item);
    console.log(values);
  }

  const handleChange = (e) => { /* Conserva el objeto que tengas y usa el valor que cambie */
    console.log(e.target.name, e.target.value);
    setValues({
      ...values,
      [e.target.name]: e.target.value,
      [e.target.url]: e.target.value,
    });
  };

  return <section className="alta">
    <h2>Creación de un nuevo Pokemon</h2><br />
    <form onSubmit={handleSubmit} className="alta-form">
      <input type="text" name="nombre" placeholder="Nombre del Pokemon" onChange={handleChange} /> <br />{/* Para mostrar todas las iteraciones por consola */}
      <input type="text" name="base" placeholder="Base de experiencia" onChange={handleChange} /><br />
      <input type="text" name="peso" placeholder="Peso" onChange={handleChange} /><br />
      <input type="url" name="url" placeholder="Url de imagen" onChange={handleChange} /><br />
      {values.nombre && values.base ? //Si se rellenan los campos, aparece boton
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>Crear pokemon</Button>
        : <></>} {/* otra forma de indicar null */}
        <br />
    </form>
    <ul>
        {pokemons.length != 0 ?
          pokemons.map((pokemon, i) =>
            <Details
              key={i}
              name={pokemon.name}
              base={pokemon.base_experience}
              peso={pokemon.weight}
              imagen={pokemon.sprites.front_default}
            />
          )
          : <img src={todos} className="todos" alt="todos logo"/>}
      </ul>
  </section>;
};

export default Alta;