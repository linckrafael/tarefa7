import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../src/styles/App.css";
import ContadorSimples from "./components/ContadorSimples";
import AlteracaoCorFundo from "./components/AlteracaoCorFundo";
import ListaTarefas from "./components/ListaTarefas";
import Temporizador from "./components/Temporizador";
import FiltroLista from "./components/FiltroLista";
import FormularioRegistro from "./components/FormularioRegistro";
import RequisicaoDados from "./components/RequisicaoDados";
import GaleriaImagens from "./components/GaleriaImagens";
import TimerComAlerta from "./components/TimerComAlerta";
import TabsNavegaveis from "./components/TabsNavegaveis";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>MENU</h1>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/contador">Contador</Link>
            </li>
            <li>
              <Link to="/alteracao-cor-fundo">Alteração de Cor</Link>
            </li>
            <li>
              <Link to="/lista-tarefas">Lista</Link>
            </li>
            <li>
              <Link to="/temporizador">Temporizador</Link>
            </li>
            <li>
              <Link to="/filtro-lista">Filtro</Link>
            </li>
            <li>
              <Link to="/formulario-registro">Formulário</Link>
            </li>
            <li>
              <Link to="/requisicao-dados">Requisição</Link>
            </li>
            <li>
              <Link to="/galeria-imagens">Galeria</Link>
            </li>
            <li>
              <Link to="/timer-com-alerta">Timer</Link>
            </li>
            <li>
              <Link to="/tabs-navegaveis">Tabs</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/contador" element={<ContadorSimples />} />
          <Route path="/alteracao-cor-fundo" element={<AlteracaoCorFundo />} />
          <Route path="/lista-tarefas" element={<ListaTarefas />} />
          <Route path="/temporizador" element={<Temporizador />} />
          <Route path="/filtro-lista" element={<FiltroLista />} />
          <Route path="/formulario-registro" element={<FormularioRegistro />} />
          <Route path="/requisicao-dados" element={<RequisicaoDados />} />
          <Route path="/galeria-imagens" element={<GaleriaImagens />} />
          <Route path="/timer-com-alerta" element={<TimerComAlerta />} />
          <Route path="/tabs-navegaveis" element={<TabsNavegaveis />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
