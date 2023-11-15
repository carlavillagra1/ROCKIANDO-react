import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
  

  const { cart, eliminarItem, vaciarCarrito } = useContext(CartContext)
  const [totalCantidad, setTotalCantidad] = useState(0)

  useEffect(() => {
    const calcularCantidadTotal = () => {
      const total = cart.reduce((total, item) => total + (parseInt(item.precio) * item.cantidad), 0)
      setTotalCantidad(total)
    }

    calcularCantidadTotal()

  }, [cart])

  if(cart.length === 0){
    return(
      <div className='alert'>
    <h2>No hay productos agregados. Elige los productos que deseas y lo veras por aqui!</h2>
    <Link to={"/"} className='verProductos'>Ver productos</Link>
    </div>
    )
  }
  return (
    <div className='contenedorCarrito'>
      <h2> Tu carrito</h2>
        {cart.map((producto)=>
          <div className='Items'>
          <img className='imgCarrito'src={producto.imagen} />
          <p>Nombre: {producto.nombre}</p>
          <p>Cantidad: {producto.cantidad}</p>
          <p>Precio: {producto.precio}</p>
          <p>Subtotal: ${producto.precio * producto.cantidad}</p>
          <button className='btnBorrar' onClick={()=>{eliminarItem(producto.id)}}>X</button>
            </div>
        )}
        <h3>Total: ${totalCantidad}  </h3>
      <button onClick={vaciarCarrito} className='btnVaciarCarrito'> Vaciar carrito</button>
      <button className='btnComprar'> <Link to={"/form"}  className='link'>Finalizar comprar</Link></button>
    
    </div>
    
  )
}

export default Cart