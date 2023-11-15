import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'



const ItemCount = () => {

  const { agregarAlCarrito, cantidad, setCantidad} = useContext(CartContext)

  const suma = () => {
    cantidad < 10 ? setCantidad(cantidad + 1) : Swal.fire('No contamos con stock')
}

const resta = () => {
    cantidad > 1 ? setCantidad(cantidad - 1) : Swal.fire('Minimo alcanzado')
}



  return (
    <div className='contenedor'>
      <div className='contador'>
        <button onClick={resta}> - </button>  <h3>{cantidad}</h3> <button onClick={suma}> + </button>
      </div>
    </div>
  )
}

export default ItemCount