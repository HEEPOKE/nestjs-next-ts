import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useRouter } from "next/router";

export default function navbarMenu() {
  const router = useRouter();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={() => router.push("/")}>Topic</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => router.push("/store")}>Store</Nav.Link>
            <Nav.Link onClick={() => router.push("/about")}>About</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/create">Create</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link onClick={() => router.push("/login")}>Login</Nav.Link>
            <Nav.Link onClick={() => router.push("/register")}>
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
