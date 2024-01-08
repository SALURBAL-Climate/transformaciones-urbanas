import { Col, Container, Image, Row } from "react-bootstrap";
import colombian_map from "../../assets/img/pageSix/Asset_15.png";
import page6_element_1 from "../../assets/img/pageSix/Asset 2.png";
import page6_element_2 from "../../assets/img/pageSix/Asset 3.png";
import page6_element_3 from "../../assets/img/pageSix/Asset 4.png";

function PageSix() {
  return (
    <section className="desktop">
      <Container fluid>
        <Row className="vh-100 justify-content-center align-items-center">
          <Col
            lg={5}
            md={5}
            style={{
              backgroundImage: `url(${colombian_map})`,
              height: "100%",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h1 className="font-d-din-bold m-5">
              Conoce en este mapa las transformaciones urbanas que evaluamos en
              el proyecto SALURBAL
            </h1>
          </Col>
          <Col lg={7} md={7}>
            <Row className="vh-100">
              {/* Element 1 */}
              <Col>
                <Row style={{ height: "65%" }} className="mb-3 pt-3">
                  <Col>
                    <Row className="justify-content-center align-items-center mb-3">
                      <Image
                        src={page6_element_1}
                        style={{ maxWidth: "300px" }}
                      />
                    </Row>
                    <Row>
                      <Col className="d-flex justify-content-center">
                        <h3 className="font-d-din-bold">Estudio RUCAS</h3>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row style={{ height: "35%" }}>
                  <Col className="d-flex justify-content-center align-items-center">
                    <span
                      style={{
                        backgroundColor: "#D4D5D5",
                        borderRadius: "20px",
                      }}
                      className="font-d-din-italic p-4"
                    >
                      Lugar: Puente Alto, Santiago y Viña del Mar (Chile).
                      <br />
                      Intervención: Programa de Regeneración de conjuntos de
                      vivienda social formal deteriorados.
                      <br />
                      Población estimada afectada por la intervención: 3,834
                      personas en Puente Alto y 831 en Viña del Mar.
                    </span>
                  </Col>
                </Row>
              </Col>
              {/* Element 2 */}
              <Col>
                <Row style={{ height: "65%" }} className="mb-3 pt-3">
                  <Col>
                    <Row className="justify-content-center align-items-center mb-3">
                      <Image
                        src={page6_element_2}
                        style={{ maxWidth: "300px" }}
                      />
                    </Row>
                    <Row>
                      <Col className="d-flex justify-content-center">
                        <h3 className="font-d-din-bold">Estudio TrUST</h3>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row style={{ height: "35%" }}>
                  <Col className="d-flex justify-content-center align-items-center">
                    <span
                      style={{
                        backgroundColor: "#D4D5D5",
                        borderRadius: "20px",
                      }}
                      className="font-d-din-italic p-4"
                    >
                      Lugar: Ciudad Bolívar, Bogotá (Colombia).
                      <br />
                      Intervención: Implementación del sistema de transporte
                      urbano por cable aéreo TransMiCable y la transformación
                      urbana del barrio.
                      <br />
                      Población estimada afectada por la intervención: 748,000
                      personas.
                    </span>
                  </Col>
                </Row>
              </Col>
              {/* Element 3 */}
              <Col>
                <Row style={{ height: "65%" }} className="mb-3 pt-3">
                  <Col>
                    <Row className="justify-content-center align-items-center mb-3">
                      <Image
                        src={page6_element_3}
                        style={{ maxWidth: "300px" }}
                      />
                    </Row>
                    <Row>
                      <Col className="d-flex justify-content-center">
                        <h3 className="font-d-din-bold">Estudio BH Viva</h3>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row style={{ height: "35%" }}>
                  <Col className="d-flex justify-content-center align-items-center">
                    <span
                      style={{
                        backgroundColor: "#D4D5D5",
                        borderRadius: "20px",
                      }}
                      className="font-d-din-italic p-4"
                    >
                      Local: Belo Horizonte (Brasil).
                      <br /> Intervenção: O Programa Vila Viva tem ações
                      urbanísticas, sociais e jurídicas.
                      <br /> São obras de saneamento, habitação, erradicação de
                      áreas de risco, reestruturação do sistema viário, e
                      implantação de parques e equipamentos para a prática de
                      esportes e lazer. População estimada afetada pela
                      intervenção: 50.000 pessoas.
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

export default PageSix;
