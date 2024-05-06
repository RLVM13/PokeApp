import { Route, Routes, Navigate } from 'react-router-dom' //Enrutamiento SPA
import React from "react";
import Home from "./Home";
import ListaPokemon from "./ListaPokemon";
import Alta from "./Alta";

const MiMain = () => {
  return <main className="main">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listar" element={<ListaPokemon />} />
      <Route path="/new" element={<Alta />} />
      <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
  </main>
};

export default MiMain;
