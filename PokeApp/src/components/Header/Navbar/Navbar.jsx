import React from "react";
import { Link } from 'react-router-dom'


const Navbar = () => {
  return <nav className="nav">
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/new'>PokeNew</Link></li>
      <li><Link to='/listar'>PokeList</Link></li>
    </ul>
  </nav>;
};

export default Navbar;
