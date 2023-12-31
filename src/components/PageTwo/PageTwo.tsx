import { Col, Container, Row } from "react-bootstrap";
import char_w_audio from "../../assets/img/character_w_audio.png";
import page2_element_1 from "../../assets/img/page_2_element_1.svg";
import page2_element_2 from "../../assets/img/page_2_element_2.svg";

function PageTwo() {
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
