import { Col, Container, Image, Row } from "react-bootstrap";
import page11_element_1 from "../../assets/img/pageEleven/Asset 9.svg";
import page11_element_2 from "../../assets/img/pageEleven/Asset 10.svg";

import "./PageEleven.css";

function PageEleven() {
  return (
    <section className="desktop">
      <Container fluid>
        <Row className="vh-100 p-5">
          <Col className="pt-5">
            {/* Title */}
            <Row className="mb-5">
              <Col
                lg={1}
                md={1}
                className="d-flex justify-content-center align-items-center"
              >
                <Image
                  src={page11_element_1}
                  style={{ maxWidth: "80px" }}
                  fluid
                />
              </Col>
              <Col lg={7} md={7}>
                <h2 className="font-cunia text-uppercase">
                  Conoce más sobre los estudios de <br />
                  transformaciones urbanas de salurbal
                </h2>
              </Col>
            </Row>
            {/* Subtitle */}
            <Row className="mb-3">
              <Col
                lg={1}
                md={1}
                className="d-flex justify-content-center align-items-center"
              >
                <Image
                  src={page11_element_2}
                  style={{ maxWidth: "80px" }}
                  fluid
                />
              </Col>
              <Col lg={7} md={7} className="d-flex align-items-center">
                <h4 className="font-cunia text-uppercase">Estudio RUCAS</h4>
              </Col>
            </Row>
            {/* Content */}
            <Row className="mb-4">
              <Col lg={1} md={1}></Col>
              <Col>
                <h5 className="font-d-din-bold">Públicaciones académicas</h5>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col lg={11} md={11}>
                <ul className="custom-bullet-list">
                  <li className="font-d-din">
                    Baeza, F., Vives Vergara, A., González, F. et al. The
                    Regeneración Urbana, Calidad de Vida y Salud - RUCAS
                    project: a Chilean multi-methods study to evaluate the
                    impact of urban regeneration on resident health and
                    wellbeing. BMC Public Health 21, 728 (2021).
                    https://doi.org/10.1186/s12889-021-10739-3
                  </li>
                  <li className="font-d-din">
                    Orlando-Romero, L., Vives-Vergara, A., Valdebenito, R.,
                    Cortinez-O’Ryan, A., Baeza, F., & Rasse, A. (2023). “Mi vida
                    va a ser mucho mejor de lo que ha sido”: estudio cualitativo
                    sobre el vínculo entre regeneración de viviendas sociales,
                    calidad de vida y salud. Cadernos de Saúde Pública, 39,
                    e00149822.
                    https://www.scielo.br/j/csp/a/D9WMB9wM4k5yDq7z3KM7GPy/?lang=es
                  </li>
                  <li className="font-d-din">
                    Valdebenito, R., Angelini, F., Schmitt, C., Baeza, F.,
                    Cortinez-O’Ryan, A., González, F., & Vives-Vergara, A.
                    (2023). Desarrollo de instrumentos para estudiar el impacto
                    en salud de las transformaciones urbanas en contextos de
                    elevada vulnerabilidad: el estudio RUCAS. Cadernos de Saúde
                    Pública, 39, e00148322.
                    https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-021-10739-3
                  </li>
                </ul>
              </Col>
            </Row>
            {/* Content */}
            <Row className="mb-4">
              <Col lg={1} md={1}></Col>
              <Col>
                <h5 className="font-d-din-bold">Otros recursos interactivos</h5>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col lg={11} md={11}>
                <ul className="custom-bullet-list">
                  <li className="font-d-din">http://www.estudioRucas.cl</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PageEleven;
