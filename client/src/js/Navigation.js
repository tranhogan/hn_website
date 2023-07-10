import React from 'react';
import '../css/Navigation.css';
import {
    Navbar,
    Container,
    Nav
} from 'react-bootstrap'

function Navigation() {
    return (
        <Navbar className='navbar' variant='dark' expand='lg'>
            <Container>
                <Navbar.Brand className='title' href='/'>Christina's Hair Salon</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav id='nav-items' className='ms-auto mv-auto mb-auto'>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='calendar'>Appointment</Nav.Link>
                        <Nav.Link href='about'>About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;