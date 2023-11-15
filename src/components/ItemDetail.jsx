import React, { useContext, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ productos}) => {

    console.log(productos)

    const { agregarAlCarrito, cantidad, isInCart} = useContext(CartContext)
    return (
        <>
                        <div className='contenedorDetail'>
                            <div >
                                <Card className='cardsDetail'>
                                <img className='imgItem'src={productos.imagen} />
                                    <Card.Body>
                                        <Card.Title className='tittle'>{productos.nombre}</Card.Title>
                                        <Card.Text className='talle'>
                                            Talle: {productos.talle}
                                        </Card.Text>
                                        <Card.Text className='descripcion'>
                                            Descripcion:  {productos.descripcion}
                                        </Card.Text>
                                        <Card.Text className='precio'>
                                            Precio: ${productos.precio}
                                        </Card.Text>
                                    </Card.Body>
                                    <ItemCount />
                                    <button  onClick={()=>{agregarAlCarrito(productos, cantidad)}}  className='btnAgregar' 
                                    > { isInCart(productos.id) ? "Producto agregado" : "Agregar al carrito"}
                                    </button> 
                                </Card>
                            </div>
                        </div>

                
            




        </>
    )
}

export default ItemDetail