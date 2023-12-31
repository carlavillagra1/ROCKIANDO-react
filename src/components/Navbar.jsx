import React from 'react'
import CartWidget from './CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';
const Navbaar = () => {

    return (
        <div className='nav'>

            <Stack direction="horizontal" gap={3}>
                <div className="p-2">
                    {/* Brand */}
                    <div>
                        <Link to={"/"} className='logo'>
                        <h1>ROCKIANDO SPORT </h1>
                        </Link>
                    </div>
                </div>
                <div className="p-2">
                    {/* Carrito */}
                    <CartWidget />
                </div>
                <div className="p-2 ms-auto">
                    <div className='menu'>
                        <div className="p-2 ms-auto">
                            <Navbar expand="lg" className="bg-body-tertiary">
                                <Container>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="me-auto">
                                            <Nav.Link > <Link to={"/nosotros"} className='item'> Nosotros </Link></Nav.Link>
                                            <Nav.Link > <Link to={"/entregas"} className='item'> Entregas</Link></Nav.Link>
                                            <NavDropdown  className='categoria' title="Categorias" id="basic-nav-dropdown" >
                                                <NavDropdown.Item className='item' > <Link to={`/categoria/${'mujer'}`} className='item'> Mujer </Link></NavDropdown.Item>
                                                <NavDropdown.Item className='item'> <Link to={`/categoria/${'hombre'}`} className='item'> Hombre</Link></NavDropdown.Item>
                                                <NavDropdown.Item className='item'> <Link to={`/categoria/${'accesorios'}`} className='item'>Accesorios </Link> </NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item className='item'> <Link to={"/"} className='item'> Todos los productos</Link> </NavDropdown.Item>
                                            </NavDropdown>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </div>
                    </div>

                </div>
            </Stack>
        </div>

    )
}

export default Navbaar