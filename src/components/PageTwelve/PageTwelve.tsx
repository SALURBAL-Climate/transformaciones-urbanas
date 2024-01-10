import { Col, Container, Image, Row } from "react-bootstrap";
import page12_element_1 from "../../assets/img/pageTwelve/Asset 7.svg";

function PageTwelve() {
  return (
    <section className="desktop">
      <Container fluid>
        <Row className="vh-100 p-5">
          <Col className="pt-5">
            {/* Subtitle */}
            <Row className="mb-3">
              <Col
                lg={1}
                md={1}
                className="d-flex justify-content-center align-items-center"
              >
                <Image
                  src={page12_element_1}
                  style={{ maxWidth: "80px" }}
                  fluid
                />
              </Col>
              <Col lg={7} md={7} className="d-flex align-items-center">
                <h4 className="font-cunia text-uppercase">Estudio Trust</h4>
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
                    Winds of change: the case of TransMiCable, a
                    community-engaged transport intervention improving equity
                    and health in Bogotá, Colombia
                  </li>
                  <li className="font-d-din">
                    Urban transformations, community participation, and health:
                    inter-sectoral and cross-country learning experience between
                    Brazil, Chile, and Colombia
                  </li>
                  <li className="font-d-din">
                    Evaluating the effects of social capital on travel behavior:
                    Modeling the choice of an innovative transport mode
                  </li>
                  <li className="font-d-din">
                    Effects of an urban cable car intervention on physical
                    activity: the TrUST natural experiment in Bogotá, Colombia
                  </li>
                  <li className="font-d-din">
                    The Impacts of an Urban Cable Car System on Liveability: A
                    Mixed Methods Study in Bogotá, Colombia
                  </li>
                  <li className="font-d-din">
                    Lifting urban mobility for the poor: Cable-cars, travel
                    satisfaction and subjective well-being
                  </li>
                </ul>
              </Col>
            </Row>
            {/* Content */}
            <Row className="mb-4">
              <Col lg={1} md={1}></Col>
              <Col>
                <h5 className="font-d-din-bold">Resúmenes de política</h5>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col lg={11} md={11}>
                <ul className="custom-bullet-list">
                  <li className="font-d-din">
                    Guevara T, Sarmiento OL, Higuera D, Useche AF, Rubio MA,
                    Wilches MA, et al. Transformaciones Urbanas y Salud:
                    Resultados de la evaluación del TransMiCable. Resumen de
                    resultados no. 1, 2020.
                  </li>
                  <li className="font-d-din">
                    Guevara-Aladino P, Baldovino-Chiquillo L, Martínez P,
                    Cantillo-García V, Gómez-García L, Useche AF, et al.
                    Transformaciones Urbanas y Salud (TrUST): Resultados de la
                    evaluación del TransMiCable durante la pandemia por
                    COVID-19. Resumen de resultados no. 2, 2022.
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
                  <li className="font-d-din">
                    Scrollytelling Transformaciones Urbanas y Salud (TrUST):
                    resultados de la evaluación del TransMiCable.{" "}
                    <a
                      href="https://fabiancpl.github.io/transmicable/"
                      style={{ color: "#E24339" }}
                      target="blank"
                    >
                      https://fabiancpl.github.io/transmicable/
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PageTwelve;
