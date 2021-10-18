import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
                <Container>
                    <Navbar.Brand href="#home">Health-Solution</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className="px-2 text-decoration-none text-dark" to="/home">Home</NavLink>
                            <NavLink className="px-2 text-decoration-none text-dark" to="/about">About us</NavLink>
                            <NavLink className="px-2 text-decoration-none text-dark" to="/contact">Contact</NavLink>
                            <NavLink className="px-2 text-decoration-none text-dark" to="/login">Login</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;