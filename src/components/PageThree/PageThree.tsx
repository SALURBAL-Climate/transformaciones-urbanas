import { Col, Container, Row, Image } from "react-bootstrap";
import character from "../../assets/img/character.svg";
import audio from "../../assets/audios/Audio3_Maria.wav";
import page3_element_1 from "../../assets/img/pageThree/Page3_element_1.svg";
import AudioApp from "../shared/Audio/Audio";

function PageThree() {
  return (
    <section>
      <Container fluid className="justify-content-center vh-100 p-0">
        <Row className="justify-content-center align-items-center vh-100 p-0">
          <Col
            lg={6}
            md={6}
            className="justify-content-center align-items-center vh-100 p-0"
          >
            <Row className="justify-content-center align-items-center p-0">
              <Image src={character} style={{ maxHeight: "85vh" }} fluid />
            </Row>
            <Row className="justify-content-center align-items-center p-0">
              <AudioApp audioRef={audio} maxWidth="400px" />
            </Row>
          </Col>
          <Col
            lg={6}
            md={6}
            style={{
              padding: "0",
              margin: "0",
            }}
          >
            <Row
              style={{
                display: "flex",
                alignItems: "center",
                margin: "30px",
              }}
            >
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img style={{ maxWidth: "225px" }} src={page3_element_1}></img>
              </Col>
            </Row>
            <Row
              style={{
                display: "flex",
                alignItems: "center",
                margin: "30px",
              }}
            >
              <Col
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    wordBreak: "break-word",
                    maxWidth: "45%",
                    textAlign: "center",
                    border:
                      "3px dashed red" /* Replace 'black' with your desired outline color */,
                    borderRadius: "10px",
                    padding: "30px",
                    color: "var(--txt-primary)",
                  }}
                  className="font-d-din-bold"
                >
                  La principal causa del cambio climático es el calentamiento
                  global, provocado por los gases de efecto invernadero que se
                  emiten por las actividades del hombre. Dos fuentes importantes
                  son el uso de combustibles fósiles (petróleo, gas y carbón)
                  para el transporte y el manejo de residuos sólidos.
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PageThree;
