import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { useRouter } from "next/router";
import { mainMenu as menuLinks, site } from "../config/navbar";
import menuNavbar from "../interface/navbar";
import navbarMenu from "../components/navbarMenu";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <navbarMenu />
    </>
  );
}
