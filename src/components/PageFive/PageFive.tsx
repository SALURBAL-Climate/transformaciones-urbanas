import { Col, Container, Row, Image } from "react-bootstrap";
import salurbal_logo from "../../assets/img/logos/salurbal_logo.svg";
import bg_img from "../../assets/img/pageFive/Asset_14.png";
import "./PageFive.css";

function PageFive() {
  return (
    <>
      <section className="desktop">
        <Container fluid>
          <Row className="vh-100 justify-content-center">
            <Col lg={6} md={6} className="p-4">
              <Row
                className="justify-content-center align-items-center"
                style={{ height: "50%" }}
              >
                <Col lg={5}>
                  <Image src={salurbal_logo} />
                </Col>
              </Row>
              <Row className="justify-content-center" style={{ height: "50%" }}>
                <span style={{ width: "65%" }} className="font-d-din">
                  En nuestro proyecto{" "}
                  <b className="font-d-din-bold">
                    Salud Urbana en América Latina (SALURBAL)
                  </b>{" "}
                  evaluamos transformaciones urbanas en viviendas precarias y
                  asentamientos informales en Chile, Colombia y Brasil.
                  <br /> <br /> A continuación te contamos cuál es el rol de
                  estas transformaciones urbanas para disminuir la
                  vulnerabilidad y aumentar la resiliencia ante los impactos del
                  cambio climático.
                </span>
              </Row>
            </Col>
            <Col
              lg={6}
              md={6}
              style={{
                backgroundImage: `url(${bg_img})`,
                height: "100%",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></Col>
          </Row>
        </Container>
      </section>
      <section className="mobile">
        <Container fluid>
          <Row className="vh-100">
            <Col>
              <Row>
                <Col className="image-page-5"></Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-center">
                  <Image src={salurbal_logo} className="logo-salurbal-page-5" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className="font-d-din px-5 txt-page-5">
                    En nuestro proyecto{" "}
                    <b className="font-d-din-bold">
                      Salud Urbana en América Latina (SALURBAL)
                    </b>{" "}
                    evaluamos transformaciones urbanas en viviendas precarias y
                    asentamientos informales en Chile, Colombia y Brasil.
                    <br /> <br /> A continuación te contamos cuál es el rol de
                    estas transformaciones urbanas para disminuir la
                    vulnerabilidad y aumentar la resiliencia ante los impactos
                    del cambio climático.
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

export default PageFive;
