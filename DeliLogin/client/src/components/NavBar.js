import React from 'react'
import AppRouter from "./AppRouteur"
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";

const NavBar = () => {
    return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Deliciously</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="http://localhost:8080/login">Login</Nav.Link>
            <Nav.Link href="http://localhost:8080/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    )
}

export default Navbar