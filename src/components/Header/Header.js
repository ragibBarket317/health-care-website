import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
                <Container>
                    <Navbar.Brand href="#home">Health-Solution</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About us</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Appointment</Nav.Link>
                            {user?.displayName || user?.email ?
                                <Button className="mx-2" onClick={logOut} variant="dark">Logout</Button> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>

                            }
                            <Navbar.Text>
                                Signed in as: <a href="#login">{user?.displayName}</a>
                            </Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;