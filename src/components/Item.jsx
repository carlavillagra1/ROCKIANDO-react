import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({nombre, precio, id }) => {
    return (
        <div className='contenedorCards'> 
            <div >
            <Card className='cards'>
            <h3 className='imgItem'>IMAGEN</h3>
                <Card.Body>
                    <Card.Title className='tittle'>{nombre}</Card.Title>
                    <Card.Text className='precio'>
                        ${precio}
                    </Card.Text>
                    <Button className='button' variant="primary">
                    <Link to={`/product/${id}`} className='buttonL'>
                        Ver detalles
                        </Link>
                        </Button>
                    
                </Card.Body>
            </Card>
            </div>
        </div>
    )
}

export default Item