import { Col, Container, Image, Row } from "react-bootstrap";
import page13_element_1 from "../../assets/img/pageThirteen/Asset 8.svg";
import page13_element_2 from "../../assets/img/pageThirteen/Asset_9.svg";

function PageThirteen() {
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
                  src={page13_element_1}
                  style={{ maxWidth: "80px" }}
                  fluid
                />
              </Col>
              <Col lg={7} md={7} className="d-flex align-items-center">
                <h4 className="font-cunia text-uppercase">Estudio BH Viva</h4>
              </Col>
            </Row>
            {/* Content */}
            <Row className="mb-4">
              <Col lg={1} md={1}></Col>
              <Col>
                <h5 className="font-d-din-bold">Públicaciones académicas</h5>
              </Col>
            </Row>
            <Row className="justify-content-center mb-5">
              <Col lg={11} md={11}>
                <ul className="custom-bullet-list">
                  <li className="font-d-din">
                    Disentangling associations between vegetation greenness and
                    dengue in a Latin American city: Findings and challenges{" "}
                    <a
                      href="https://www.sciencedirect.com/science/article/pii/S0169204621002188"
                      style={{ color: "#E24339" }}
                      target="blank"
                    >
                      https://www.sciencedirect.com/science/article/pii/S0169204621002188
                    </a>
                  </li>
                  <li className="font-d-din">
                    Twenty-Two years of dengue fever (1996-2017): an
                    epidemiological study in a Brazilian city
                    <a
                      href="https://www.tandfonline.com/doi/full/10.1080/09603123.2019.1656801"
                      style={{ color: "#E24339" }}
                      target="blank"
                    >
                      https://www.tandfonline.com/doi/full/10.1080/09603123.2019.1656801
                    </a>
                  </li>
                  <li className="font-d-din">
                    The influence of climatic conditions on hospital admissions
                    for asthma in children and adolescents living in Belo
                    Horizonte, Minas Gerais, Brazil
                    <a
                      href="https://www.scielo.br/j/csc/a/QQcDT5VBFxcf6rdG88CbzMM/?lang=en"
                      style={{ color: "#E24339" }}
                      target="blank"
                    >
                      https://www.scielo.br/j/csc/a/QQcDT5VBFxcf6rdG88CbzMM/?lang=en
                    </a>
                  </li>
                  <li className="font-d-din">
                    Spatial analysis of dengue incidence and Aedes aegypti
                    ovitrap surveillance in Belo Horizonte, Brazil
                    <a
                      href="https://onlinelibrary.wiley.com/doi/full/10.1111/tmi.13521"
                      style={{ color: "#E24339" }}
                      target="blank"
                    >
                      https://onlinelibrary.wiley.com/doi/full/10.1111/tmi.13521
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row
              className="justify-content-center align-items-center p-4 mt-5"
              style={{
                height: "20vh",
              }}
            >
              <Col
                id="contacto"
                style={{
                  backgroundImage: `url(${page13_element_2})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  height: "100%",
                }}
              ></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PageThirteen;
