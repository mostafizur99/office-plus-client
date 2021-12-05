import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Header = () => {
    return (
        <>
            <Navbar className="header" collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Container>
                    <Navbar.Brand href="/" className="fst-italic text-white text-decoration-none fw-bold">Office Plus+</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="text-white custom-nav" as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className="text-white custom-nav" as={Link} to="/dashboard">Dashboard</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            {/* <div className="header">
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/*">NotFound</Link>
                </nav>
            </div> */}
        </>
    );
};

export default Header;