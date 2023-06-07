// import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../assets/logo.png";
// import { useState } from "react";
import { Badge, Button, Container, Image, Nav, Navbar } from "react-bootstrap";

const Appbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={logo} />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto fw-bold ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link" className="ms-3 ">
              About
            </Nav.Link>
            <Nav.Link href="#link" className="ms-3 ">
              Promotions <Badge className="ms-3 top-0 start-100 translate-middle badge rounded-pill bg-danger">Hot</Badge>
            </Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link" className="ms-3 ">
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav className="fw-bold">
            <Nav.Link href="#link" className="me-3">
              Masuk
            </Nav.Link>
            <Button variant="green-2" className="rounded-pill fw-bold">
              Daftar Sekarang
            </Button>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
};

export default Appbar;
