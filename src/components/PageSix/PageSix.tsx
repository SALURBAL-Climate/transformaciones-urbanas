import { Col, Container, Image, Row } from "react-bootstrap";
import colombian_map from "../../assets/img/pageSix/Asset_15.png";
import page6_element_1 from "../../assets/img/pageSix/Asset 2.png";
import page6_element_2 from "../../assets/img/pageSix/Asset 3.png";
import page6_element_3 from "../../assets/img/pageSix/Asset 4.png";
import "./PageSix.css";

function PageSix() {
  return (
    <>
      <section className="desktop" id="transformaciones-urbanas">
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
                Conoce en este mapa las transformaciones urbanas que evaluamos
                en el proyecto SALURBAL
              </h1>
            </Col>
            <Col lg={7} md={7}>
              <Row className="vh-100">
                {/* Element 1 */}
                <Col>
                  <Row style={{ height: "55%" }} className="mb-3 pt-3">
                    <Col className="" style={{ height: "100%" }}>
                      <Row
                        className="justify-content-center align-items-center mb-3"
                        style={{ height: "100%" }}
                      >
                        <Image
                          src={page6_element_1}
                          style={{ height: "100%", width: "auto" }}
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
                  <Row style={{ height: "55%" }} className="mb-3 pt-3">
                    <Col className="" style={{ height: "100%" }}>
                      <Row
                        className="justify-content-center align-items-center mb-3"
                        style={{ height: "100%" }}
                      >
                        <Image
                          src={page6_element_2}
                          style={{ height: "100%", width: "auto" }}
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
                  <Row style={{ height: "55%" }} className="mb-5 pt-3">
                    <Col className="" style={{ height: "100%" }}>
                      <Row
                        className="justify-content-center align-items-center mb-3"
                        style={{ height: "100%" }}
                      >
                        <Image
                          src={page6_element_3}
                          style={{ height: "100%", width: "auto" }}
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
                        <br /> São obras de saneamento, habitação, erradicação
                        de áreas de risco, reestruturação do sistema viário, e
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
      <section className="mobile" id="transformaciones-urbanas-mb">
        <Container fluid>
          <Row className="vh-100">
            <Col
              style={{
                backgroundImage: `url(${colombian_map})`,
                height: "100%",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
              className="page-6"
            >
              <h1 className="font-d-din-bold m-3 text-page-6">
                Conoce en este mapa las transformaciones urbanas que evaluamos
                en el proyecto SALURBAL
              </h1>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mobile">
        <Container fluid>
          <Row className="vh-100">
            <Col>
              <Row>
                <Col className="d-flex justify-content-center my-3">
                  <Image src={page6_element_1} className="image-page-6" />
                </Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-center">
                  <h3 className="font-d-din-bold title-image-page-6">
                    Estudio RUCAS
                  </h3>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col sm={8} xs={8} className="d-flex justify-content-center">
                  <span
                    style={{
                      backgroundColor: "#D4D5D5",
                      borderRadius: "20px",
                      display: "inline-block",
                    }}
                    className="font-d-din-italic p-4 label-page-6"
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
          </Row>
        </Container>
      </section>
      <section className="mobile">
        <Container fluid>
          <Row className="vh-100">
            <Col>
              <Row>
                <Col className="d-flex justify-content-center my-3">
                  <Image src={page6_element_2} className="image-page-6" />
                </Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-center">
                  <h3 className="font-d-din-bold title-image-page-6">
                    Estudio TrUST
                  </h3>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col sm={8} xs={8} className="d-flex justify-content-center">
                  <span
                    style={{
                      backgroundColor: "#D4D5D5",
                      borderRadius: "20px",
                      display: "inline-block",
                    }}
                    className="font-d-din-italic p-4 label-page-6"
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
          </Row>
        </Container>
      </section>
      <section className="mobile">
        <Container fluid>
          <Row className="vh-100">
            <Col>
              <Row>
                <Col className="d-flex justify-content-center my-3">
                  <Image src={page6_element_3} className="image-page-6" />
                </Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-center">
                  <h3 className="font-d-din-bold title-image-page-6">
                    Estudio RUCAS
                  </h3>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col sm={8} xs={8} className="d-flex justify-content-center">
                  <span
                    style={{
                      backgroundColor: "#D4D5D5",
                      borderRadius: "20px",
                      display: "inline-block",
                    }}
                    className="font-d-din-italic p-4 label-page-6"
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
        </Container>
      </section>
    </>
  );
}

export default PageSix;
