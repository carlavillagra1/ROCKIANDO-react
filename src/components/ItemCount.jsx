import React, { useContext } from 'react'
import { useState } from 'react'
import { CartContext } from '../context/CartContext'



const ItemCount = () => {

  const {contador, setContador, agregarAlCarrito} = useContext(CartContext)
  
  const suma = () => {
    contador < 10 ? setContador(contador + 1) : Swal.fire('No contamos con stock')
}

const resta = () => {
    contador > 1 ? setContador(contador - 1) : Swal.fire('Minimo alcanzado')
}



  return (
    <div className='contenedor'>
      <div className='contador'>
        <button onClick={resta}> - </button>  <h3>{contador}</h3> <button onClick={suma}> + </button>
        <button  onClick={agregarAlCarrito}  className='btnAgregar' > Agregar al carrito </button> 

      </div>
    </div>
  )
}

export default ItemCount