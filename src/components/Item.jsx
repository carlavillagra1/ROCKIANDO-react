import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({nombre, precio, id, imagen}) => {
    return (
        <div className='cajitas'> 
            <div className='itemscard' >
            <Card className='cards'>
                <img className='imgItem'src={imagen} />
                <Card.Body>
                    <Card.Title className='tittle'>{nombre}</Card.Title>
                    <Card.Text className='precio'>
                        ${precio}
                    </Card.Text>
                    <Button className='button' variant="primary">
                    <Link to={`/producto/${id}`} className='buttonL'>
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