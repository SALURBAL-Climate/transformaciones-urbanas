import { Col, Container, Row, Image } from "react-bootstrap";
import character from "../../assets/img/character.svg";
import page2_element_1 from "../../assets/img/pageTwo/page_2_element_1.svg";
import page2_element_2 from "../../assets/img/pageTwo/page_2_element_2.svg";
import AudioApp from "../shared/Audio/Audio";
import audio from "../../assets/audios/Audio3_Maria.wav";

function PageTwo() {
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
          <Col lg={6} md={6} className="m-0 p-0">
            <Row
              style={{
                display: "flex",
                alignItems: "center",
                margin: "30px",
              }}
            >
              <Col
                lg={5}
                md={5}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img style={{ maxWidth: "125px" }} src={page2_element_1}></img>
              </Col>
              <Col
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                }}
              >
                <span
                  style={{
                    wordBreak: "break-word",
                    maxWidth: "65%",
                    textAlign: "center",
                    border:
                      "3px dashed red" /* Replace 'black' with your desired outline color */,
                    borderRadius: "10px",
                    padding: "30px",
                    color: "var(--txt-primary)",
                  }}
                  className="font-d-din-bold"
                >
                  ¿Sabías que 100 millones de personas en América Latina viven
                  en asentamientos informales y precarios que no cuentan con los
                  recursos para enfrentarse a los impactos del cambio climático?
                </span>
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
                lg={5}
                md={5}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img style={{ maxWidth: "225px" }} src={page2_element_2}></img>
              </Col>
              <Col
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                }}
              >
                <span
                  style={{
                    wordBreak: "break-word",
                    maxWidth: "65%",
                    textAlign: "center",
                    border:
                      "3px dashed red" /* Replace 'black' with your desired outline color */,
                    borderRadius: "10px",
                    padding: "30px",
                    color: "var(--txt-primary)",
                  }}
                  className="font-d-din-bold"
                >
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
  );
}

export default PageTwo;
