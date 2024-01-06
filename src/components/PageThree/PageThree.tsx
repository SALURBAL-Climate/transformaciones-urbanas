import { Col, Container, Row, Image } from "react-bootstrap";
import character from "../../assets/img/character.svg";
import audio from "../../assets/audios/Audio3_Maria.wav";
import page3_element_1 from "../../assets/img/pageThree/Page3_element_1.svg";
import AudioApp from "../shared/Audio/Audio";

function PageThree() {
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
                son el uso de combustibles fósiles (petróleo, gas y carbón) para
                el transporte y el manejo de residuos sólidos.
              </span>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PageThree;
