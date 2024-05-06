/* import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Search = () => {

  const [value, setValue] = useState(""); // Para guardar el dato a buscar, se puede poner algo por defecto
  const [posts, setPosts] = useState([]); // Para guardar los posts

  // equivale a un componentDidUpdate()
  useEffect(() => {
    async function fetchData() {
      try {
        // Petición HTTP
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const json = res.data;

        // Guarda en el array de posts el resultado. Procesa los datos
        setPosts(json.data.children.map(c => c.data));
      } catch (e) {
        setPosts([]) // No pintes nada 
      }
    }

    fetchData();
  }, [value]); // componentDidUpdate


  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.topic.value)
    setValue(e.target.topic.value) // Modificando el estado de Value
  };


  return <section>
    <h1>Buscador</h1>
    <form onSubmit={handleSubmit}>
      <input name="topic" placeholder="Buscador" />
    </form>

    {posts.length !== 0 ?
      <ul className='topics'>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      : ""
    }
  </section>
};

export default Search;
 */