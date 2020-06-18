import React, {Fragment} from 'react';
import './App.css';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';

function App() {
  return (
    <Fragment>
    <div className="App">
      <Header />
    </div>
    <div className="container">
      <Formulario />
    </div>
    </Fragment>
  );
}

export default App;
