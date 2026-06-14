import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
function MyNavbar() {
  return (
    <Navbar expand="lg" variant="light" className="mt-4 py-1">
      <Container fluid>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          className="ms-auto justify-content-center align-content-center"
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto g-3 bg-white flex-column align-items-center flex-lg-row rounded-5 font-medium font-primary"
            navbarScroll
          >
            <Nav.Link
              as={Link}
              to="/"
              className="px-3"
              style={{ color: "#2A478D" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/properties"
              className="px-3 text-dark"
              href="#action2"
            >
              Properties
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className="px-3 text-dark"
              href="#action3"
            >
              About Us
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className="px-3 text-dark"
              href="#action4"
            >
              Contact
            </Nav.Link>
          </Nav>
          <Link to="/properties" className="text-dark">
            <Button
              to="/properties"
              variant="btn px-3"
              style={{ background: "#2A478D", color: "white" }}
            >
              Browse Properties
            </Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
