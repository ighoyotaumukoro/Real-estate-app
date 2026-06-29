import React, { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Navbar expand="lg" variant="light" className="mt-4 py-1">
      <Container fluid className="position-relative">
        {!isOpen && (
          <Navbar.Toggle
            aria-controls="navbarScroll"
            className="ms-auto justify-content-center align-content-center"
            onClick={() => setIsOpen(true)}
          />
        )}

        {isOpen && (
          <button
            className="close position-absolute d-md-none top-0 end-0 mt-2 me-2 btn-close btn-close-dark"
            onClick={() => setIsOpen(false)}
            style={{ fontSize: "1.2rem", color: "#000" }}
            aria-label="Close"
          ></button>
        )}

        <Navbar.Collapse id="navbarScroll" className="eba start-0 end-0 mx-0" in={isOpen}>
          <Nav
            className="mx-auto g-3 bg-white flex-column align-items-center flex-lg-row rounded-5 "
            navbarScroll
            style={{
              top: "80px",
              overflowY: "auto",
              backgroundColor: "white",

              zIndex: 1050,
              maxHeight: "calc(100vh -100px)",
            }}
          >
            <Nav.Link
              as={Link}
              to="/"
              className="nav-link px-5"
              style={{ color: "#2A478D" }}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/properties"
              className="nav-link px-5 text-dark"
              href="#action2"
              onClick={() => setIsOpen(false)}
            >
              Properties
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/contact"
              className="nav-link px-5 text-dark"
              href="#action4"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Nav.Link>
          </Nav>
          <Link to="/properties" className="text-dark text-decoration-none">
            <Button
              to="/properties"
              variant="btn px-3"
              className="d-none d-md-flex"
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
