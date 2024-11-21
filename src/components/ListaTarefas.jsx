// Importa a biblioteca React e o hook useState
import React, { useState } from 'react';
// Importa o arquivo CSS para estilização do componente
import '../styles/ListaTarefas.css';

function ListaTarefas() {
  // Declara uma variável de estado 'tarefas' inicializada como um array vazio
  // 'setTarefas' é a função usada para atualizar o valor de 'tarefas'
  const [tarefas, setTarefas] = useState([]);
  // Declara uma variável de estado 'texto' inicializada como uma string vazia
  // 'setTexto' é a função usada para atualizar o valor de 'texto'
  const [texto, setTexto] = useState('');

  // Função para adicionar uma nova tarefa
  const adicionarTarefa = () => {
    if (texto) { // Verifica se o texto não está vazio
      // Atualiza o estado 'tarefas' adicionando a nova tarefa ao array existente
      setTarefas([...tarefas, { texto, completa: false }]);
      // Limpa o campo de texto após a adição da tarefa
      setTexto('');
    }
  };

  // Funçao para remover uma tarefa pelo índice
  const removerTarefa = (index) => {
    // Atualiza o estado 'tarefas' filtrando a tarefa pelo índice
    setTarefas(tarefas.filter((_, i) => i !== index));
  };

  // Função para marcar uma tarefa como concluída pelo índice
  const marcarConcluida = (index) => {
    // Cria uma copia do array de tarefas
    const novasTarefas = [...tarefas];
    // Alterna o estado 'completa' da tarefa especificada pelo indice
    novasTarefas[index].completa = !novasTarefas[index].completa;
    // Atualiza o estado 'tarefas' com as novas tarefas
    setTarefas(novasTarefas);
  };

  return (
    <div className="calculadora"> {/* Aplica a classe CSS 'calculadora' para estilização */}
      <h1>Lista de Tarefas</h1> {/* Título do aplicativo */}
      <div>
        <input
          value={texto}
          onChange={(e) => setTexto(e.target.value)} // Atualiza o estado 'texto' com o valor do input
          placeholder="Nova tarefa" // Placeholder do input
        />
        <button onClick={adicionarTarefa}>Adicionar</button> {/* Botao para adicionar uma nova tarefa */}
      </div>
      <ul>
        {tarefas.map((tarefa, index) => ( // Mapeia o array de tarefas para renderizar a lista de tarefas
          <li key={index}>
            <span style={{ textDecoration: tarefa.completa ? 'line-through' : 'none' }}> {/* Aplica uma linha de corte se a tarefa estiver completa */}
              {tarefa.texto}
            </span>
            <button className="concluir" onClick={() => marcarConcluida(index)}>Concluir</button> {/* Botao para marcar a tarefa como concluída */}
            <button className="remover" onClick={() => removerTarefa(index)}>Remover</button> {/* Botao para remover a tarefa */}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Exporta o componente 'ListaTarefas' para que ele possa ser usado em outros arquivos
export default ListaTarefas;