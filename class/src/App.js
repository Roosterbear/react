import React from 'react'
import './App.css'

class Camarones extends React.Component{
  constructor(){
    super()
    this.state = {cantidad:0}
  }

  aumentar(){
    this.setState({cantidad:this.state.cantidad+1})
  }

  render(){
    return <>
      <h1>{this.props.name}: {this.state.cantidad}</h1>
      <div>
        <button onClick={this.aumentar.bind(this)}>+</button>
      </div>
    </>
  }
}

function App(){
  return <Camarones name="Camarones"/>
}

export default App