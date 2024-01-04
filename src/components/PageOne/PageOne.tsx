import { Col, Container, Image, Row } from "react-bootstrap";
import NavbarApp from "../shared/Navbar/Navbar";
import salurbal_logo from "../../assets/img/salurbal_logo.svg";
import drexel_logo from "../../assets/img/drexel_university_logo.svg";
import pontificia_logo from "../../assets/img/pontificia_chile_logo.svg";
import andes_logo from "../../assets/img/universidad_andes_logo.svg";
import ufmg_logo from "../../assets/img/ufmg_logo.svg";
import "./PageOne.css";

function PageOne() {
  return (
    <section>
      <NavbarApp />
      <Container fluid id="desktop-page-1">
        <span className="mb-4" style={{ maxWidth: "30%" }}>
          <Row className="justify-content-center">
            <h1 className="primary-title font-d-din-bold">
              Transformaciones Urbanas y Resiliencia al Cambio Climático en
              América Latina
            </h1>
          </Row>
          <Row className="justify-content-center">
            <h3 className="primary-subtitle font-d-din-bold">
              Casos de Chile, Colombia y Brasil
            </h3>
          </Row>
        </span>
      </Container>
      <div id="mobile-page-1">
        <Container fluid className="background-page-1">
          <Row className="justify-content-center pt-3 mb-4">
            <Col>
              <Image src={salurbal_logo} fluid />
            </Col>
            <Col>
              <Image
                src={drexel_logo}
                style={{
                  mixBlendMode: "darken",
                }}
                className="logo-class"
                fluid
              />
            </Col>
            <Col>
              <Image src={pontificia_logo} className="logo-class" fluid />
            </Col>
            <Col>
              <Image src={andes_logo} className="logo-class" fluid />
            </Col>
            <Col>
              <Image src={ufmg_logo} className="logo-class" fluid />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <h1 className="primary-title-mobile font-cunia">
              Transformaciones urbanas y resiliencia al cambio climático en
              América Latina
            </h1>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default PageOne;
