import React, { useState } from "react";
import "../styles/FiltroLista.css";

const nomes = ["Patricia", "Rafael", "Rosane", "Daniel", "Junior", "Luiz"];

const FiltroLista = () => {
  const [filtro, setFiltro] = useState("");

  const nomesFiltrados = nomes.filter((nome) =>
    nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Filtrar nomes"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
      <ul>
        {nomesFiltrados.map((nome, index) => (
          <li key={index}>{nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default FiltroLista;
