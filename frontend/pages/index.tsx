import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { useRouter } from "next/router";
import { mainMenu as menuLinks, site } from "../config/navbar";
import menuNavbar from "../interface/navbar";
import NavbarMenu from "../components/NavbarMenu";

export default function Home() {
  return (
    <div className="App">
      <NavbarMenu />
    </div>
  );
}
