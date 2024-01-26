import { Container, Image, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/esm/Navbar";
import "./Navbar.css";
import Hamburger from "hamburger-react";
import { useState } from "react";
import ButtonApp from "../Button/Button";
import logo_salurbal_clima from "../../../assets/img/pageOne/Asset 1.svg";

function NavbarApp() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <Navbar expand={false} expanded={isOpen}>
      <Container fluid>
        <Navbar.Brand className="d-flex align-items-center">
          <Image
            src={logo_salurbal_clima}
            className="logo-class desktop"
            style={{ minHeight: "100px" }}
          />
          <a href="#contacto" className="desktop">
            <ButtonApp text="contacto" />
          </a>
          <a href="#contacto" className="mobile">
            <ButtonApp text="contacto" />
          </a>
        </Navbar.Brand>
        <Hamburger
          toggled={isOpen}
          toggle={toggleNavbar}
          color="var(--btn-primary)"
          size={23}
        />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="desktop">
            <Nav.Link href="#introduccion">
              <h4 className="font-d-din-bold">Introducción</h4>
            </Nav.Link>
            <Nav.Link href="#transformaciones-urbanas">
              <h4 className="font-d-din-bold">Transformaciones urbanas</h4>
            </Nav.Link>
            <Nav.Link href="#estudio-rucas">
              <h4 className="font-d-din-bold">Estudio RUCAS</h4>
            </Nav.Link>
            <Nav.Link href="#estudio-trust">
              <h4 className="font-d-din-bold">Estudio TrUST</h4>
            </Nav.Link>
            <Nav.Link href="#estudio-bh-viva">
              <h4 className="font-d-din-bold">Estudio BH Viva</h4>
            </Nav.Link>
            <Nav.Link href="#que-podemos-hacer">
              <h4 className="font-d-din-bold">¿Qué podemos hacer?</h4>
            </Nav.Link>
          </Nav>
          <Nav className="mobile">
            <Nav.Link href="#introduccion-mb">
              <h4 className="font-d-din-bold">Introducción</h4>
            </Nav.Link>
            <Nav.Link href="#transformaciones-urbanas-mb">
              <h4 className="font-d-din-bold">Transformaciones urbanas</h4>
            </Nav.Link>
            <Nav.Link href="#estudio-rucas-mb">
              <h4 className="font-d-din-bold">Estudio RUCAS</h4>
            </Nav.Link>
            <Nav.Link href="#estudio-trust-mb">
              <h4 className="font-d-din-bold">Estudio TrUST</h4>
            </Nav.Link>
            <Nav.Link href="#estudio-bh-viva-mb">
              <h4 className="font-d-din-bold">Estudio BH Viva</h4>
            </Nav.Link>
            <Nav.Link href="#que-podemos-hacer-mb">
              <h4 className="font-d-din-bold">¿Qué podemos hacer?</h4>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
