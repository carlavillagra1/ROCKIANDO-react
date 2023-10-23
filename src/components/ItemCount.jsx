import React from 'react'
import { useState } from 'react'



const ItemCount = () => {


  const [contador, setContador] = useState(1)

  const suma = () => {
    contador < 10 ? setContador(contador + 1) : Swal.fire('No contamos con stock')
  }

  const resta = () => {
    contador > 1 ? setContador(contador - 1) : Swal.fire('Minimo alcanzado')
  }
  const AgregarProducto = () =>{
    Toastify({
      text: `Agregaste ${contador} productos`,
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient( to right, rgb(109, 131, 202), rgb(59, 35, 147), blue)"
      },
      onClick: function(){} // Callback after click
    }).showToast();
  }



  return (
    <div className='contenedor'>
      <div className='contador'>
        <button onClick={resta}> - </button>  <h3>{contador}</h3> <button onClick={suma}> + </button>
        <button  onClick={AgregarProducto}  className='btnAgregar' > Agregar al carrito </button> 

      </div>
    </div>
  )
}

export default ItemCount