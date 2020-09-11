import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";

function Navigation() {
  return (
    <header>
      <Navbar bg="light" expand="md" className="navigation">
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <h4 className="mb-0">The YAY Company</h4>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 p-2"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={NavLink} exact to="/" className="px-3 py-2 py-md-1" activeClassName="active">
              Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/news" className="px-3 py-2 py-md-1" activeClassName="active">
              News
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact" className="px-3 py-2 py-md-1" activeClassName="active">
              Contact
              </Nav.Link>
            </Nav>
            <Form inline className="py-2">
              <FormControl
                type="text"
                placeholder="Search" className="rounded-left"
              />
                <Button variant="primary" className="rounded-right">Go</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Navigation;
