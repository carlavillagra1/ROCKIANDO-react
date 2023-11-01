import React, { useContext, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';


const ItemDetail = ({ productos }) => {
    const [cantidad, setCantidad] = useState(0)

    const { agregarAlCarrito} = useContext(CartContext)

    const agregarCantidad = (cantidad) =>{
        setCantidad(cantidad)

        const item = {
            id, nombre, precio
        }
        agregarAlCarrito(item, cantidad)
    }
    const { id } = useParams()

    const filterProductos = productos.filter((productos) => productos.id == id)



    return (
        <>
            {

                filterProductos.map((p) => {
                    return (
                        <div className='contenedorDetail'>
                            <div >
                                <Card className='cardsDetail'>
                                    <h3 className='img'>IMAGEN</h3>
                                    <Card.Body>
                                        <Card.Title className='tittle'>{p.nombre}</Card.Title>
                                        <Card.Text className='talle'>
                                            Talle: {p.talle}
                                        </Card.Text>
                                        <Card.Text className='descripcion'>
                                            Descripcion:  {p.descripcion}
                                        </Card.Text>
                                        <Card.Text className='precio'>
                                            Precio: ${p.precio}
                                        </Card.Text>
                                    </Card.Body>
                                    <ItemCount />
                                </Card>
                            </div>
                        </div>

                    )

                })
            }




        </>
    )
}

export default ItemDetail