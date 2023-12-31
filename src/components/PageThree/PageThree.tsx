import { Col, Container, Row } from "react-bootstrap";
import char_w_audio from "../../assets/img/character_w_audio.png";
import page3_element_1 from "../../assets/img/Page3_element_1.svg";

function PageThree() {
  return (
    <section>
      <Container
        fluid
        style={{
          padding: "0",
          display: "flex",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Row
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0",
            margin: "0",
          }}
        >
          <Col
            lg={6}
            md={6}
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0",
            }}
          >
            <div
              style={{
                backgroundImage: `url(${char_w_audio})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center center",
                height: "90%",
                width: "100%",
              }}
            ></div>
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
