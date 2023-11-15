import React from 'react'
import { useState, useEffect } from 'react'
import Item from './Item'
import Loader from './Loader'

const ItemList = ({ productos }) => {
    const [elementos, setElementos] = useState([])

    useEffect(()=>{
            setElementos(productos)
    },[productos])


    return (

        <>
        <div className='contenedorCards' >
            {
                elementos.length === 0 ? <Loader/> :
                productos.map((p) => {
                    return (
                        <Item
                            id={p.id}
                            imagen={p.imagen}
                            key={p.id}
                            nombre={p.nombre}
                            descripcion={p.descripcion}
                            categoria={p.categoria}
                            precio={p.precio}
                        />

                    )

                })

            }

        </div>


        </>
    )
   
}

export default React.memo(ItemList)