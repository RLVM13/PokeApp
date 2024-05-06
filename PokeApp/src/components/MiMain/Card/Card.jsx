import React from 'react'

function Card({ name, url }) { /* ataque, defensa, special */
  return (
    <article>
        <h3>{name}</h3>
        <a href={url} target="_blank">URL</a>
    </article>
  )
}

export default Card

