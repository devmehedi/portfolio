import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoImg from '../../images/logo.png';
import './Navigation.css'
const Navigation = () => {
    return (
        <div>
            <Navbar className="navBg " variant="light" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand className="fw-bold text-white" href="/"> <img className="logo" src={logoImg} alt="" /> Dev Mehedi</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="nav" as={Link} to="/">HOME</Nav.Link>
                        <Nav.Link className="nav" as={Link} to="/introduce">INTRODUCE</Nav.Link>
                        <Nav.Link className="nav" as={Link} to="/projects">PROJECTS</Nav.Link>
                        <Nav.Link className="nav" as={Link} to="/contact">CONTACT</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;

