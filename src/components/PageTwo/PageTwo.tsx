import { Col, Container, Row, Image } from "react-bootstrap";
import character from "../../assets/img/character.svg";
import page2_element_1 from "../../assets/img/pageTwo/page_2_element_1.svg";
import page2_element_2 from "../../assets/img/pageTwo/page_2_element_2.svg";
import AudioApp from "../shared/Audio/Audio";
import audio from "../../assets/audios/ANA1.wav";

import "./PageTwo.css";

function PageTwo() {
  return (
    <section>
      <Container fluid>
        <Row className="vh-100 align-items-center">
          <Col lg={6} md={6}>
            <Row>
              <Col className="d-flex justify-content-center">
                <Image src={character} style={{ maxHeight: "85vh" }} fluid />
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center">
                <AudioApp audioRef={audio} maxWidth="400px" />
              </Col>
            </Row>
          </Col>
          <Col lg={6} md={6}>
            <Col
              lg={12}
              md={12}
              className="d-flex justify-content-center align-items-center mb-4"
            >
              <Col
                lg={4}
                md={4}
                className="d-flex align-items-center justify-content-center"
              >
                <Image
                  style={{ maxWidth: "125px" }}
                  src={page2_element_1}
                  alt="Bullet point icon"
                ></Image>
              </Col>
              <Col
                lg={8}
                md={8}
                className="d-flex align-items-center justify-content-center"
              >
                <span className="bullet-text font-d-din-bold">
                  ¿Sabías que 100 millones de personas en América Latina viven
                  en asentamientos informales y precarios que no cuentan con los
                  recursos para enfrentarse a los impactos del cambio climático?
                </span>
              </Col>
            </Col>
            <Col
              lg={12}
              md={12}
              className="d-flex justify-content-center align-items-center mb-4"
            >
              <Col
                lg={4}
                md={4}
                className="d-flex align-items-center justify-content-center"
              >
                <Image
                  style={{ maxWidth: "225px" }}
                  src={page2_element_2}
                  alt="Bullet point icon"
                ></Image>
              </Col>
              <Col
                lg={8}
                md={8}
                className="d-flex align-items-center justify-content-center"
              >
                <span className="bullet-text font-d-din-bold">
                  En América Latina, la contribución a las causas del cambio
                  climático es relativamente baja pero la vulnerabilidad ante
                  sus impactos es alta.
                </span>
              </Col>
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PageTwo;
