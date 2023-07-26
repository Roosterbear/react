import React, {Component} from 'react';
import PropTypes from 'prop-types';

const API_KEY = '8bdf0a7a';

export class Detail extends Component{
  static propTypes = {
    id: PropTypes.string
  }

  state = {
    movie: {}
  }

  _fetchMovie({id}){
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then(res => res.json())
      .then(movie=>{
        console.log(movie)
        this.setState({movie})
      })
  }

  _goBack(){
    window.history.back();
  }

  componentDidMount(){
    const { id } = this.props
    this._fetchMovie({ id })
  }

  render(){
    const {Title} = this.state.movie
    return(
      <div>
        <h1>{Title}</h1>
        <button className="button is-warning" onClick={this._goBack}>
              Go Back
        </button>
      </div>
    )
  }
}