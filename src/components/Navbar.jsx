import React from 'react'
import CartWidget from './CartWidget'
import Dropdown from 'react-bootstrap/Dropdown';
import Stack from 'react-bootstrap/Stack';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Navbar = () => {
    return (
        <div className='nav'>
            <Stack direction="horizontal" gap={3}>
                <div className="p-2">
                  {/* Brand */}
            <h1>ROCKIANDO SPORT </h1>
                </div>
                <div className="p-2 ms-auto">
                <DropdownButton
                align="end"
                title="Categorias"
                id="dropdown-menu-align-end"
            >
                <Dropdown.Item eventKey="1">Todo los productos</Dropdown.Item>
                <Dropdown.Item eventKey="2">Femenino</Dropdown.Item>
                <Dropdown.Item eventKey="3">Masculino</Dropdown.Item>

            </DropdownButton>
                </div>
                <div className="vr" />
                <div className="p-2">
                      {/* Carrito */}
                <CartWidget />
                </div>
            </Stack>


        </div>

    )
}

export default Navbar