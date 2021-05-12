import React, { useEffect, useState } from 'react';
import './App.css';
import FilmeGhibli from './componentes/FilmeGhibli';
import hoc from './componentes/hoc';

function App() {
  const CarregandoProdutos = hoc(FilmeGhibli);
  const [estadoDaAplicacao, setEstadoDaAplicacao] = useState({
    consultando: false,
    produtos: null,
  });

  useEffect(() => {
    setEstadoDaAplicacao({ consultando: true });
    const apiUrl = `https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setEstadoDaAplicacao({ consultando: false, filmes: repos.content });
      });
  }, [setEstadoDaAplicacao]);
  
  return (
    <div className='App'>
        <CarregandoProdutos isLoading={estadoDaAplicacao.consultando} filmes={estadoDaAplicacao.filmes} />
    </div>
  );
}
export default App;