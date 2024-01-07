import Container from "react-bootstrap/esm/Container";
import Navbar from "react-bootstrap/esm/Navbar";
import "./Navbar.css";
import Hamburger from "hamburger-react";
import { useState } from "react";
import ButtonApp from "../Button/Button";

function NavbarApp() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <a href="#contacto">
            <ButtonApp text="contacto" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Hamburger
            toggled={isOpen}
            toggle={toggleNavbar}
            color="var(--btn-primary)"
            size={23}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
