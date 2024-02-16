import { Col, Container, Row, Image } from "react-bootstrap";
import character from "../../assets/img/character.svg";
import page2_element_1 from "../../assets/img/pageTwo/page_2_element_1.svg";
import page2_element_2 from "../../assets/img/pageTwo/page_2_element_2.svg";
import AudioApp from "../shared/Audio/Audio";
import audio from "../../assets/audios/ANA1.mp3";

import "./PageMerged2-3-4.css";

function PageMerged2_3_4() {
  return (
    <>
      <section className="desktop" id="introduccion">
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
            <Col lg={5} md={5}>
              <Row className="d-flex justify-content-center aling-items-center scroll-content debug-2">
                <Col lg={12} md={12}>
                  {/* PAGE 2 */}
                  <Row>
                    <Col>
                      <Row>
                        <Col lg={3} md={3}></Col>
                        <Col lg="auto" md="auto"></Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
              {/* <Col
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
                    en asentamientos informales y precarios que no cuentan con
                    los recursos para enfrentarse a los impactos del cambio
                    climático?
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
              </Col> */}
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mobile" id="introduccion-mb">
        <Container fluid>
          <Row className="vh-100 align-items-center">
            <Col>
              <Row className="align-items-center">
                <Col className="d-flex justify-content-center">
                  <Image className="character-page-2" src={character} fluid />
                </Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-center">
                  <AudioApp audioRef={audio} maxWidth="55%" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mobile">
        <Container>
          <Row className="vh-100 align-items-center">
            <Col>
              <Row className="mb-5">
                <Col className="d-flex justify-content-center">
                  <Image src={page2_element_1} className="icon-page-2" />
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col sm={9} xs={9} className="text-center">
                  <span className="text-mobile font-d-din-bold">
                    ¿Sabías que 100 millones de personas en América Latina viven
                    en asentamientos informales y precarios que no cuentan con
                    los recursos para enfrentarse a los impactos del cambio
                    climático?
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mobile">
        <Container>
          <Row className="vh-100 align-items-center">
            <Col>
              <Row className="mb-5">
                <Col className="d-flex justify-content-center">
                  <Image src={page2_element_2} className="icon-page-2" />
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col sm={9} xs={9} className="text-center">
                  <span className="text-mobile font-d-din-bold">
                    En América Latina, la contribución a las causas del cambio
                    climático es relativamente baja pero la vulnerabilidad ante
                    sus impactos es alta.
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default PageMerged2_3_4;
