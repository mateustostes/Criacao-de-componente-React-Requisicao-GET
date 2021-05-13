import React, { useEffect, useState } from 'react';
import './App.css';
import FilmeGhibli from './componentes/FilmeGhibli';
import hoc from './componentes/hoc';

function App() {
  const CarregandoProdutos = hoc(FilmeGhibli);
  const [estadoDaAplicacao, setEstadoDaAplicacao] = useState({
    consultando: false,
    filmes: null,
  });

  useEffect(() => {
    setEstadoDaAplicacao({ consultando: true });
    const apiUrl = `https://ghibliapi.herokuapp.com/films`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setEstadoDaAplicacao({ consultando: false, filmes: repos});
      });
  }, [setEstadoDaAplicacao]);
  
  return (
    <div className='App'>
        <CarregandoProdutos isLoading={estadoDaAplicacao.consultando} filmes={estadoDaAplicacao.filmes} />
    </div>
  );
}
export default App;