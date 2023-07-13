import React from 'react';

// When we use export without default, we must use KEYS! to create a named import.
import { Title } from './components/Title';
import { SearchForm } from './components/SearchForm';
// ------------------------------------------------------------------------------
import './App.css';
import 'bulma/css/bulma.css';

function App() {
  return (
    <div className="App">
      <Title>Search Movies</Title>
      <div className="searchForm-wrapper">
        <SearchForm/>
      </div>
    </div>
  );
}

export default App;
