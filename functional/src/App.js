import {useState} from 'react'
import './App.css'

export default function Producto(props){
  const {name} = props
  const [cantidad, setCantidad] = useState(0)
  const fruits = ['papaya', 'blackberry', 'fig', 'mammee']
  const gray = true

  return<>
    <h1>{name}: {cantidad}</h1>
    <div>
      <button onClick={()=>setCantidad(cantidad+1)}> + </button>
      {fruits.map(f=><h2 key={f} className={gray&&"gris"}>{f}</h2>)}
    </div>
  </>
}