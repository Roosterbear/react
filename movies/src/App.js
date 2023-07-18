import React, {Component} from 'react';

// When we use export without default, we must use KEYS! to create a named import.
import { Title } from './components/Title';
import { SearchForm } from './components/SearchForm';
// ------------------------------------------------------------------------------
import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {
  state = {results:[]}

  _handleResults = (results)=>{
    this.setState({results})
  }

  _renderResults(){
    const {results} = this.state
    return results.map(movie=>{
      return <p key={movie.imdbID}>{movie.Title}</p>
    })
  }

  render(){
    return (
      <div className="App">
      <Title>Search Movies</Title>
      <div className="searchForm-wrapper">
        <SearchForm onResults={this._handleResults}/>
      </div>
      <div className="results">
        {this.state.results.length === 0
          ? <p>No results</p>
          : this._renderResults()}
      </div>
    </div>
    );
  }
}
export default App;
