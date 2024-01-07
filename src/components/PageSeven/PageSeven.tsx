import { Col, Container, Row, Image } from "react-bootstrap";
import AudioApp from "../shared/Audio/Audio";
import character from "../../assets/img/character_2.svg";
import audio from "../../assets/audios/ANA4.wav";
import page7_element_1 from "../../assets/img/pageSeven/Asset 23.svg";
import page7_element_2 from "../../assets/img/pageSeven/Asset 24.svg";
import page7_element_3 from "../../assets/img/pageSeven/Asset 25.svg";
import page7_element_4 from "../../assets/img/pageSeven/Asset 26.svg";
import page7_element_5 from "../../assets/img/pageSeven/Asset 27.svg";
import "./PageSeven.css";

function PageSeven() {
  return (
    <section>
      <Container fluid>
        <Row className="vh-100 align-items-center">
          <Col lg={6} md={6}>
            <Row>
              <Col className="d-flex justify-content-center">
                <Image src={character} style={{ maxHeight: "85vh" }} fluid />
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center">
                <AudioApp audioRef={audio} maxWidth="400px" />
              </Col>
            </Row>
          </Col>
          <Col lg={6} md={6}>
            <Row className="vh-100">
              <Col>
                {/* Element 1 */}
                <Row
                  className="justify-content-center"
                  style={{ height: "50%" }}
                >
                  <Col lg={12} md={12}>
                    <Image src={page7_element_1} fluid />
                  </Col>
                  <Col lg="6" md="6" className="d-flex justify-content-center">
                    <h5 className="font-d-din-bold subtitle">
                      La renovación de viviendas en asentamientos precarios
                      puede reducir la vulnerabilidad ante las temperaturas
                      extremas.
                    </h5>
                  </Col>
                </Row>
                {/* Element 2 */}
                <Row style={{ height: "50%" }}>
                  <Col>
                    {/* Subelement - bullet point*/}
                    <Row className="mb-4">
                      <Col lg={1} md={1} className="d-flex justify-content-end">
                        <Image
                          src={page7_element_2}
                          style={{ maxWidth: "65px" }}
                        />
                      </Col>
                      <Col lg={10} md={10}>
                        <span className="font-d-din">
                          El estudio RUCAS analizó 949 viviendas antes, durante
                          y después del proceso de regeneración llevado a cabo
                          por el Ministerio de Vivienda y Urbanismo en Puente
                          Alto y Viña del Mar en el 2022.
                        </span>
                      </Col>
                    </Row>
                    {/* Subelement - bullet point*/}
                    <Row className="mb-4">
                      <Col lg={1} md={1} className="d-flex justify-content-end">
                        <Image
                          src={page7_element_3}
                          style={{ maxWidth: "65px" }}
                        />
                      </Col>
                      <Col lg={10} md={10}>
                        <span className="font-d-din">
                          Casi la mitad de las personas en Viña del Mar y más
                          del 70% en Puente Alto dijeron que su casa es muy fría
                          en invierno.
                        </span>
                      </Col>
                    </Row>
                    {/* Subelement - bullet point*/}
                    <Row className="mb-4">
                      <Col lg={1} md={1} className="d-flex justify-content-end">
                        <Image
                          src={page7_element_4}
                          style={{ maxWidth: "65px" }}
                        />
                      </Col>
                      <Col lg={10} md={10}>
                        <span className="font-d-din">
                          3 de cada 10 personas en Viña del Mar y 6 de cada 10
                          en Puente Alto reportaron que su vivienda es muy
                          calurosa en verano.
                        </span>
                      </Col>
                    </Row>
                    {/* Subelement - bullet point*/}
                    <Row className="mb-4">
                      <Col lg={1} md={1} className="d-flex justify-content-end">
                        <Image
                          src={page7_element_5}
                          style={{ maxWidth: "65px" }}
                        />
                      </Col>
                      <Col lg={10} md={10}>
                        <span className="font-d-din">
                          Las viviendas regeneradas mejoraron su satisfacción
                          con la temperatura, el tamaño y con la vivienda en
                          general.
                        </span>
                      </Col>
                    </Row>
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

export default PageSeven;
