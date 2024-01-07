import { Col, Container, Image, Row } from "react-bootstrap";
import page10_element_1 from "../../assets/img/pageTen/Asset 6.png";
import page10_element_2 from "../../assets/img/pageTen/Asset 7.png";
import page10_element_3 from "../../assets/img/pageTen/Asset 8.png";
import AudioApp from "../shared/Audio/Audio";
import audio from "../../assets/audios/Audio3_Maria.wav";

function PageTen() {
  return (
    <section>
      <Container fluid>
        <Row className="vh-100">
          <Col>
            <Row className="m-5">
              <Col lg={9} md={9} className="d-flex align-items-center py-5">
                <h2
                  className="font-cunia-bold"
                  style={{
                    display: "inline-block",
                    backgroundColor: "#E24339",
                    borderRadius: "30px",
                    textAlign: "center",
                    padding: "0.5rem 1rem",
                    color: "var(--bg-color)",
                    width: "50%",
                  }}
                >
                  Y AHORA, ¿QUÉ PODEMOS HACER?
                </h2>
                <div
                  style={{
                    height: "1px",
                    minWidth: "50%",
                    borderTop: "#F09A48 dashed 5px",
                  }}
                ></div>
              </Col>
              <Col lg={3} md={3} className="d-flex align-items-center">
                <AudioApp audioRef={audio} maxWidth="100%" />
              </Col>
            </Row>
            <Row className="justify-content-center align-items-center">
              {/* Element 1 */}
              <Col>
                <Row className="justify-content-center mb-5">
                  <Col className="d-flex justify-content-center">
                    <Image
                      src={page10_element_1}
                      style={{ maxWidth: "250px" }}
                    />
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col lg={8} md={8} className="d-flex justify-content-center">
                    <span className="font-d-din">
                      Se requieren acciones urgentes, a gran escala y entre
                      múltiples sectores para aumentar la resiliencia y
                      enfrentar los impactos del cambio climático en los
                      asentamientos precarios.
                    </span>
                  </Col>
                </Row>
              </Col>
              {/* Element 2 */}
              <Col>
                <Row className="justify-content-center mb-5">
                  <Col className="d-flex justify-content-center">
                    <Image
                      src={page10_element_2}
                      style={{ maxWidth: "250px" }}
                    />
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col lg={8} md={8} className="d-flex justify-content-center">
                    <span className="font-d-din">
                      La evaluación de las transformaciones y políticas urbanas
                      locales -como RUCAS, TransMiCable y Vila Viva- generan
                      evidencia para apoyar la toma de decisiones en las
                      ciudades.
                    </span>
                  </Col>
                </Row>
              </Col>
              {/* Element 3 */}
              <Col>
                <Row className="justify-content-center mb-5">
                  <Col className="d-flex justify-content-center">
                    <Image
                      src={page10_element_3}
                      style={{ maxWidth: "250px" }}
                    />
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col lg={8} md={8} className="d-flex justify-content-center">
                    <span className="font-d-din">
                      A partir de noviembre de 2023, el proyecto SALURBAL-Clima
                      buscará mejorar nuestra comprensión de las conexiones
                      entre el cambio climático, la salud y la inequidad en las
                      ciudades de América Latina para orientar políticas urbanas
                      y acciones comunitarias.
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

export default PageTen;
