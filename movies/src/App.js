import React, {Component} from 'react';
// ************************************
// Switch is not used anymore in v6
// instead we use Routes
// ************************************
import { Routes, Route } from 'react-router-dom';

// When we use export without default, we must use KEYS! to create a named import.

import { Detail } from './pages/Detail';
import { Home } from './pages/Home';
// ------------------------------------------------------------------------------
import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {
  
  render(){
    
    // IMPERATIVE WAY
    
    const url = new URL(document.location);
    const Page = url.searchParams.has('id')
    ? <Detail id={url.searchParams.get('id')}/>
    : <Home/>

    return(
      <div className="App">
        {Page}
      </div>
    )

  }
}
export default App;
