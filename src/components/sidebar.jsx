import React from 'react';
import './sidebar.css';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../logo.png';

function Sidebar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="flex-column sidebar">
      <Navbar.Brand href="#">
        <img src={logo} alt="Spotify Logo" className="logo" />
      </Navbar.Brand>
      <Nav className="flex-column">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">La tua Libreria</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Sidebar;
