import React from 'react'
import { useState } from 'react'

const Form = () => {


  const [nombre, setNombre] = useState("")

  const [email,setEmail] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
  }

  /* VALIDACION*/ 
  console.log(nombre)
  console.log(email)

  return (
    <div>

      <form onSubmit={handleSubmit} className='form'>
        <h3>Nombre</h3>
        <input type='text' onChange={(e)=>setNombre(e.target.value)}/>
        <h3>Email</h3>
        <input type='email' onChange={(e)=>setEmail(e.target.value)}/>
        <button type='submit'> Enviar </button>

      </form>
    </div>
  )
}

export default Form