import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link,NavLink ,Navigation } from "react-router-dom";
import {Offcanvas,Container,Navbar,Nav,NavDropdown,Form,FormControl,Button,NavbarBrand,NavbarToggler,Collapse,NavItem} from 'react-bootstrap';
function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink  to="/" className={({ isActive}) =>isActive?"text-red-600":"text-blue-600"}>Home</NavLink>
                <NavLink  to="/forms" className={({ isActive}) =>isActive?"text-red-600":"text-blue-600"}>Forms</NavLink>
                <NavLink  to="/contact" className={({ isActive}) =>isActive?"text-red-600":"text-blue-600"}>Contact</NavLink>
                <NavLink  to="/reset" className={({ isActive}) =>isActive?"text-red-600":"text-blue-600"}>Reset</NavLink>
                <NavLink  to="/formstate" className={({ isActive}) =>isActive?"text-red-600":"text-blue-600"}>Formstate</NavLink>
                <NavLink  to="/watch" className={({ isActive}) =>isActive?"text-red-600":"text-blue-600"}>watch</NavLink>
                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
