import { Col, Container, Row, Image } from "react-bootstrap";
import AudioApp from "../shared/Audio/Audio";
import character from "../../assets/img/character.svg";
import audio from "../../assets/audios/ANA3.mp3";
import page4_element_1 from "../../assets/img/pageFour/Asset 13.svg";
import page4_element_2 from "../../assets/img/pageFour/Asset 12.svg";
import page4_element_3 from "../../assets/img/pageFour/Asset 11.svg";

function PageFour() {
  return (
    <section className="desktop">
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
            <Row className="justify-content-center mb-5">
              <span className="bullet-text font-d-din-bold w-50">
                ¿De qué manera nos afecta el cambio climático?
              </span>
            </Row>
            <Row className="justify-content-center align-items-center mt-5">
              <Col lg={8} md={8}>
                <Row className="mb-4 justify-content-center">
                  <Col lg={3} md={3}>
                    <Image
                      src={page4_element_1}
                      style={{ maxWidth: "85px" }}
                    ></Image>
                  </Col>
                  <Col lg={6} md={6}>
                    <span className="font-d-din">
                      Exposición a temperaturas extremas, lluvias intensas,
                      inundaciones, sequías, e incendios.
                    </span>
                  </Col>
                </Row>
                <Row className="mb-4 justify-content-center">
                  <Col lg={3} md={3}>
                    <Image
                      src={page4_element_2}
                      style={{ maxWidth: "85px" }}
                    ></Image>
                  </Col>
                  <Col lg={6} md={6}>
                    <span className="font-d-din">
                      Afectación de las viviendas y los entornos urbanos donde
                      habitamos.
                    </span>
                  </Col>
                </Row>
                <Row className="mb-4 justify-content-center">
                  <Col lg={3} md={3}>
                    <Image
                      src={page4_element_3}
                      style={{ maxWidth: "85px" }}
                    ></Image>
                  </Col>
                  <Col lg={6} md={6} className="">
                    <span className="font-d-din">
                      Incremento de las enfermedades infecciosas, respiratorias,
                      cardiovasculares y de la piel.
                    </span>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PageFour;
