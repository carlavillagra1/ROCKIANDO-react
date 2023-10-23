import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {

    return (

        <div className='cajitas'>

            {
                productos.map((p) => {

                    return (
                        <Item
                            id={p?.id}
                            key={p?.id}
                            nombre={p?.nombre}
                            descripcion={p?.descripcion}
                            categoria={p?.categoria}
                            precio={p?.precio}
                        />

                    )

                })

            }

        </div>

    )

}

export default ItemList