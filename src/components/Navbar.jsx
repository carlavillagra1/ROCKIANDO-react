import React from 'react'
import CartWidget from './CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Stack from 'react-bootstrap/Stack';

const Navbaar = () => {
    return (
        <div className='nav'>

            <Stack direction="horizontal" gap={3}>
                <div className="p-2">
                    {/* Brand */}
                    <div className='logo'>
                        <h1>ROCKIANDO SPORT </h1>
                    </div>
                </div>
                <div className="p-2 ms-auto">
                    <div className='menu'>
                        <div className="p-2 ms-auto">
                            <Navbar expand="lg" className="bg-body-tertiary">
                                <Container>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="me-auto">
                                            <Nav.Link >Nosotros</Nav.Link>
                                            <Nav.Link >Entregas</Nav.Link>
                                            <NavDropdown title="Categorias" id="basic-nav-dropdown" >
                                                <NavDropdown.Item className='item' >Femenino</NavDropdown.Item>
                                                <NavDropdown.Item className='item'>  Masculino </NavDropdown.Item>
                                                <NavDropdown.Item className='item'>Accesorios</NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item className='item'>Todos los productos </NavDropdown.Item>
                                            </NavDropdown>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </div>
                    </div>

                </div>
                <div className="p-2">
                    {/* Carrito */}
                    <CartWidget />
                </div>
            </Stack>
        </div>

    )
}

export default Navbaar