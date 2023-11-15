import React from 'react'
import { useState, useContext } from 'react'
import {collection, addDoc, getFirestore} from 'firebase/firestore' 
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const Form = () => {

  const { vaciarCarrito } = useContext(CartContext)

  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [email,setEmail] = useState("")
  const [orderId, setOrderId] = useState(null)

  const db  = getFirestore()

  const handleSubmit = (e) =>{
    e.preventDefault()
    addDoc(ordersCollection, order).then(({id})=>
      setOrderId(id))

  }
  const order = {
    nombre, apellido, email
  }
  const ordersCollection = collection(db, "MiOrden")

  /* VALIDACION*/ 
  console.log(nombre)
  console.log(email)

  return (
    <div className='contenedorform'>

      <form onSubmit={handleSubmit} className='form'>
        <h2>Formulario de compra</h2>
        <h3>Nombre</h3>
        <input type='text' onChange={(e)=>setNombre(e.target.value)}/>
        <h3>Apellido</h3>
        <input type='text' onChange={(e)=>setApellido(e.target.value)}/>
        <h3>Email</h3>
        <input type='email' onChange={(e)=>setEmail(e.target.value)}/>
        <button type='submit' onClick={()=>{ Swal.fire('Gracias por tu compra!')}} className='btnComprar'> Enviar </button>
        <p>Numero de orden: {orderId}</p>

      </form>
      <button onClick={vaciarCarrito}  className='btnFinalizar' > <Link  to={"/"} className='link'> Finalizar</Link></button>
    </div>
  )
}

export default Form