import React from 'react'

function Details({ name, base, peso, imagen }) { /* ataque, defensa, special */
  return (
    <article>
        <h3>Nombre del Pokemon: {name}</h3>
        <h4>Base de Experiencia: {base}</h4>
        <h4>Peso: {peso}</h4>
        <img src={imagen} alt="{name}"></img>
    </article>
  )
}

export default Details
