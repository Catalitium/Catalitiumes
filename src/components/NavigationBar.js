import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import logo from '../assets/img/logo.png'

export const NavigationBar = () => {
    return (


<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/"> <img src={logo} alt="catalitium-logo" width={60} height={50}></img></Navbar.Brand>
  <Navbar.Brand href="/"> Catalitium</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
      <Nav.Link href="/">Inicio</Nav.Link>
      <Nav.Link href="/Contacto">Contacto</Nav.Link>
      <Nav.Link href="/Servicios">Servicios</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

    )
}
