import React from 'react'
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount';


const ItemDetail = ({ productos }) => {

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