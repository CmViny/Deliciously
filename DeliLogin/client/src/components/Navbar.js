import React from 'react'
import { Nav, Container, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {

    return (
    <>
    <Navbar bg="transparent" expand="lg">
      <Container>
        <Navbar.Brand href="#">Deliciously</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className='navLink'>Home</Nav.Link>
            <Nav.Link href="/login" className='navLink'>Login</Nav.Link>
            <Nav.Link href="/register" className='navLink'>Register</Nav.Link>
            <Nav.Link href="/register" className='navLink'>Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    )
}

export default NavBar