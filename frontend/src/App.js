import React from 'react'
import { BrowserRouter } from 'react-router-dom' // Deve ser coloca ao redor de todos componentes que precisam ter acesso as rotas

import Header from './components/Header'
import Routes from './routes' // Depois de importar as rotas, você é capaz de importar como uma tag

function App() { //Componentes sao definidos por classe ou função 
  return (
    <BrowserRouter>
    <Header />
    <Routes />
    </BrowserRouter>
  );
}

export default App;
