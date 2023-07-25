import React, {Component} from 'react';

// When we use export without default, we must use KEYS! to create a named import.
import { Title } from './components/Title';
import { SearchForm } from './components/SearchForm';
import { MoviesList } from './components/MoviesList';
// ------------------------------------------------------------------------------
import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {
  state = {usedSearch: false, results:[]}

  _handleResults = (results)=>{
    this.setState({results, usedSearch: true})
  }

  _renderResults(){
    return(
      <div className="results">
        {this.state.results.length === 0
          ? <p>No results</p>
          : <MoviesList movies={this.state.results} /> 
          }
      </div>
    )
  }

  render(){
    return (
      <div className="App">
      <Title>Search Movies</Title>
      <div className="searchForm-wrapper">
        <SearchForm onResults={this._handleResults}/>
      </div>
      {this.state.usedSearch
      ? this._renderResults()
      : <small>Use the form to search a movie</small>
      }
      
    </div>
    );
  }
}
export default App;
