import React from 'react'
import { Link } from 'react-router-dom'

const Entregas = () => {
  return (
    <div className='contenedorentregas'>

      <div className='entregas'> 
      <h3>Realizamos envios a travez de <b>correo argentino. </b> Para consultas sobre costos de envios, mediante el link de contacto </h3>
      <h3>Entregas personalmente en :</h3>
      <div className='ubi'>             
      <h4>Plaza de libertad, Libertad</h4> <Link to={"https://maps.app.goo.gl/Su4Qvmbbq5T4b6aTA"} className='maps'> Ver en maps</Link>
      </div>
      <div className='ubi'>
      <h4>Coppel, Merlo</h4> <Link to={"https://maps.app.goo.gl/qAXG6przd92nFJyq7"} className='maps'>  Ver en maps</Link>
      </div>
      <div className='ubi'>
      <h4>Burger king, Moron</h4> <Link to={"https://maps.app.goo.gl/nzLWq8S1yr8R5rkX9"} className='maps'> Ver en maps</Link>
      </div>
      

      </div>
      <div className='redes'>
        <h4>Consultas mediante el link </h4>
      <Link to={"https://wa.link/e4smod"} target="_blank" className='contacto'>Whatsapp</Link>
      <Link to={"https://www.instagram.com/reel/Cg2wT7cpL5B/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="} target="_blank" className='contacto'>Instagram</Link>
      <div className='perfil'>
        <Link><iframe src="https://www.instagram.com/rockiando.sport/embed">…</iframe> </Link>
      </div>
      </div>




    </div>
  )
}

export default Entregas