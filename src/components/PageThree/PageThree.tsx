import { Col, Container, Row, Image } from "react-bootstrap";
import character from "../../assets/img/character.svg";
import audio from "../../assets/audios/ANA2.mp3";
import page3_element_1 from "../../assets/img/pageThree/Page3_element_1.svg";
import AudioApp from "../shared/Audio/Audio";
import page4_element_1 from "../../assets/img/pageFour/Asset 13.svg";
import page4_element_2 from "../../assets/img/pageFour/Asset 12.svg";
import page4_element_3 from "../../assets/img/pageFour/Asset 11.svg";

import "./PageThree.css";

function PageThree() {
  return (
    <>
      <section className="desktop">
        <Container fluid>
          <Row className="vh-100 align-items-center justify-content-center">
            <Col lg={3} md={3}>
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
            <Col
              lg={5}
              md={5}
              className="flex-row justify-content-center align-items-center"
            >
              <Row className="justify-content-center mb-3">
                <Image
                  style={{ maxWidth: "225px" }}
                  src={page3_element_1}
                  alt="Bullet point icon"
                ></Image>
              </Row>
              <Row className="justify-content-center mb-3">
                <span className="bullet-text font-d-din-bold w-50">
                  La principal causa del cambio climático es el calentamiento
                  global, provocado por los gases de efecto invernadero que se
                  emiten por las actividades del hombre. Dos fuentes importantes
                  son el uso de combustibles fósiles (petróleo, gas y carbón)
                  para el transporte y el manejo de residuos sólidos.
                </span>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mobile">
        <Container fluid>
          <Row className="vh-100">
            <Col>
              <Row className="mt-4">
                <Col className="d-flex justify-content-center">
                  <Image src={page3_element_1} className="icon-page-3" />
                </Col>
              </Row>
              <Row>
                <Col className="px-5 py-3">
                  <span className="font-d-din main-text-page-3">
                    La principal causa del cambio climático es el calentamiento
                    global, provocado por los gases de efecto invernadero que se
                    emiten por las actividades del hombre. Dos fuentes
                    importantes son el uso de combustibles fósiles (petróleo,
                    gas y carbón) para el transporte y el manejo de residuos
                    sólidos.
                  </span>
                </Col>
              </Row>
              <Row className="justify-content-center mt-3 mb-5">
                <Col className="text-center subtitle-page-3 d-flex">
                  <span className="font-d-din-bold title-page-3">
                    ¿De qué maneras nos afecta el cambio climático?
                  </span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Row className="mb-4 justify-content-center">
                    <Col sm={3} xs={3}>
                      <Image
                        className="bullet-icon-page-3"
                        src={page4_element_1}
                        style={{ maxWidth: "65px" }}
                      ></Image>
                    </Col>
                    <Col sm={7} xs={7}>
                      <span className="font-d-din bullet-txt-page-3">
                        Exposición a temperaturas extremas, lluvias intensas,
                        inundaciones, sequías, e incendios.
                      </span>
                    </Col>
                  </Row>
                  <Row className="mb-4 justify-content-center">
                    <Col sm={3} xs={3}>
                      <Image
                        className="bullet-icon-page-3"
                        src={page4_element_2}
                        style={{ maxWidth: "65px" }}
                      ></Image>
                    </Col>
                    <Col sm={7} xs={7}>
                      <span className="font-d-din bullet-txt-page-3">
                        Afectación de las viviendas y los entornos urbanos donde
                        habitamos.
                      </span>
                    </Col>
                  </Row>
                  <Row className="mb-4 justify-content-center">
                    <Col sm={3} xs={3}>
                      <Image
                        className="bullet-icon-page-3"
                        src={page4_element_3}
                        style={{ maxWidth: "65px" }}
                      ></Image>
                    </Col>
                    <Col sm={7} xs={7}>
                      <span className="font-d-din bullet-txt-page-3">
                        Incremento de las enfermedades infecciosas,
                        respiratorias, cardiovasculares y de la piel.
                      </span>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default PageThree;
