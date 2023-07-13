import React, {Component} from 'react'

export class SearchForm extends Component{
  render(){
    return(
      <div className="field has-addons">
        <div className ="control">
          <input className ="input" type="text" placeholder="Movie to search">
        </div>
        <div className="control">
          <a className="button is-info">
            Search
          </a>
        </div>
      </div>
    )
  }
} 