import React from 'react'

class Card extends React.Component{
  constructor(){
    super()
    this.state = {
      cantidad: 0
    }
  }

  agregar(){
    this.setState({
      cantidad: this.state.cantidad+1
    })
  }

  quitar(){
    this.setState({
      cantidad: this.state.cantidad-1
    })
  }

  render(){

    const hasItems = this.state.cantidad>0?true:false
    const styles = {
      border: '1px solid black',
      marginBottom: '1em',
      borderRadius: '0.5em',
      padding: '1em',
      background: hasItems?'linear-gradient(45deg, black, #4a02f7)':'white',
      color: hasItems?'white':'black',
      transition: `all 250ms ease-out`

    }

    return(
      <div style={styles}>
        <h3>{this.props.name} $ {this.props.price}</h3>
        <hr/>
        <p>{this.state.cantidad}</p>
        <button
          onClick={this.agregar.bind(this)}
        >
          +
        </button>
        <button
          onClick={this.quitar.bind(this)}
        >
          -
        </button>
      </div>
    )
  }
}

export default Card