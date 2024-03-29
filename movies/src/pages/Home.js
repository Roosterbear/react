import React, {Component} from 'react'
import { Title } from '../components/Title';
import { SearchForm } from '../components/SearchForm';
import { MoviesList } from '../components/MoviesList';

export class Home extends Component{
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
    return(
      <div>
        <Title>Search Movies</Title>
        <div className="searchForm-wrapper">
          <SearchForm onResults={this._handleResults}/>
        </div>
        {this.state.usedSearch
        ? this._renderResults()
        : <small>Use the form to search a movie</small>
      }
      </div>
    )
  }
}