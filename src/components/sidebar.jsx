import { useState } from 'react';
import './sidebar.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../logo.png';

function Sidebar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="flex-column sidebar">
      <Navbar.Brand href="#">
        <img src={logo} alt="Spotify Logo" className="logo" />
      </Navbar.Brand>
      <Nav className="flex-column">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">Your Library</Nav.Link>
      </Nav>
      <Form className="form-inline" onSubmit={handleSearch}>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit" variant="outline-info">GO</Button>
      </Form>
      <div className="sidebar-bottom">
        <Button variant="light" className="sign-up-btn">Sign Up</Button>
        <Button variant="dark" className="login-btn">Login</Button>
        <div className="policy-links">
          <a href="#">Cookie Policy</a> | <a href="#">Privacy</a>
        </div>
      </div>
    </Navbar>
  );
}

export default Sidebar;
