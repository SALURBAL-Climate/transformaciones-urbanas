import { Col, Container, Image, Row } from "react-bootstrap";
import NavbarApp from "../shared/Navbar/Navbar";
import salurbal_logo from "../../assets/img/logos/salurbal_logo.svg";
import drexel_logo from "../../assets/img/logos/drexel_university_logo.svg";
import pontificia_logo from "../../assets/img/logos/pontificia_chile_logo.svg";
import andes_logo from "../../assets/img/logos/universidad_andes_logo.svg";
import ufmg_logo from "../../assets/img/logos/ufmg_logo.svg";
import "./PageOne.css";

function PageOne() {
  return (
    <>
      <section className="desktop">
        <Container fluid id="desktop-page-1">
          <NavbarApp />
          <Row className="text-container align-items-end justify-content-center">
            <Col lg={6} md={6}>
              <Row className="justify-content-center">
                <Col lg={8}>
                  <h1 className="primary-title font-d-din-bold">
                    Transformaciones Urbanas y Resiliencia al Cambio Climático
                    en América Latina
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-center">
                  <h4 className="primary-subtitle font-d-din-bold">
                    Casos de Chile, Colombia y Brasil
                  </h4>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mobile">
        <NavbarApp />
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
      </section>
    </>
  );
}

export default PageOne;
