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

  componentDidMount(){
    const {id} = this.props;
    this._fetchMovie({id});
  }

  _goBack(){
    window.history.back();
  }

  

  render(){
    const {Title, Poster, Actors, Metascore, Plot} = this.state.movie
    return(
      <div>
        <h1>{Title}</h1>
        <figure className="image">
           <img
             src={Poster}
             alt='' />
         </figure>
         <h3>{Actors}</h3>
         <span>{Metascore}</span>
         <br/>
         <cite>{Plot}</cite>
         {Metascore==null?<h2><strong>404 </strong>Page Not Found</h2>:''}
         <br/>
        <button className="button is-warning" onClick={this._goBack}>
              Go Back
        </button>
      </div>
    )
  }
}