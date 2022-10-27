import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useRouter } from "next/router";

export default function NavbarMenu() {
  const router = useRouter();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Topic</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => router.push("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => router.push("/store")}>Store</Nav.Link>
            <Nav.Link onClick={() => router.push("/about")}>About</Nav.Link>
            <NavDropdown title="Options" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={() => router.push("/create")}>Create</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link onClick={() => router.push("/auth/login")}>
              Login
            </Nav.Link>
            <Nav.Link onClick={() => router.push("/auth/register")}>
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
