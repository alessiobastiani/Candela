import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png';
import { Container } from 'react-bootstrap';

const NavHome = () => {
    return (
        <Navbar expand="lg" className="navegador">
            <Container>
                <Navbar.Brand className="d-lg-none">
                        <img src={logo} alt="" className='logo'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='me-auto liks-uno'>
                        <Nav className='nav-link'>NOSOTROS</Nav>
                        <Nav className='nav-link'>DEPARTAMENTOS</Nav>
                    </Nav>
                    <Navbar.Brand className='d-none d-lg-block'>
                            <img src={logo} alt="" className='logo'/>
                    </Navbar.Brand>
                    <Nav className='ms-auto '>
                        <Nav.Link href="#link">SERVICIOS</Nav.Link>
                        <Nav.Link href="#link">CONTACTO</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavHome;
