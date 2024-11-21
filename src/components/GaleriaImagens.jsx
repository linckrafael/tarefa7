import React, { useState } from "react";
import "../styles/GaleriaImagens.css";
import { Link } from "react-router-dom";

// Importando as imagens
import aviao from "../assets/aviao.jpg";
import castelo from "../assets/castelo.jpg";
import katecat from "../assets/katecat.jpg";
import porsol from "../assets/porsol.jpg";

const imagens = [aviao, castelo, katecat, porsol];

const GaleriaImagens = () => {
  const [imagemAtual, setImagemAtual] = useState(null);

  return (
    <div className="galeria-imagens">
      <h2>Galeria de Imagens</h2>
      <div className="galeria">
        {imagens.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Imagem ${index}`}
            onClick={() => setImagemAtual(src)}
          />
        ))}
      </div>
      {imagemAtual && (
        <div className="modal">
          <img src={imagemAtual} alt="Imagem Ampliada" />
          <button onClick={() => setImagemAtual(null)}>Fechar</button>
        </div>
      )}
      <Link to="/">
        <button className="saida">Sair</button>
      </Link>
    </div>
  );
};

export default GaleriaImagens;
