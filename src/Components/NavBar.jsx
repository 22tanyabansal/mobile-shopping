import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
  return (
    <Navbar bg="success" expand="lg" color="second-bg">
      <Container fluid>
        <Navbar.Brand href="#">Mobile Shopee</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button type="button" class="btn btn-dark">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form>
          <Nav style={{ maxHeight: "100px", marginLeft: "100px" }} navbarScroll>
            <Nav.Link href="#sale" active>
              On Sale
            </Nav.Link>
            <NavDropdown title="Category" id="navbarScrollingDropdown">
              <Nav.Link href="#filter">Filtered Mobile</Nav.Link>
              <Nav.Link href="#mobile">Mobiles</Nav.Link>
            </NavDropdown>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="Cart">
              <FontAwesomeIcon icon={faCartShopping} />
            </Nav.Link>
          </Nav>
          <Nav className="d-flex flex-row-reverse">
            <Nav.Link href="/register">REGISTER</Nav.Link>
            <Nav.Link href="/Login">LOG IN</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
