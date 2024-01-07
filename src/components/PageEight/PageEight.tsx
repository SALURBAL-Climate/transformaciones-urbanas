import { Col, Container, Row, Image } from "react-bootstrap";
import AudioApp from "../shared/Audio/Audio";
import character from "../../assets/img/character_3.svg";
import audio from "../../assets/audios/Audio3_Maria.wav";
import page8_element_1 from "../../assets/img/pageEight/Asset 1.svg";
import page8_element_2 from "../../assets/img/pageEight/Asset 29.svg";
import page8_element_3 from "../../assets/img/pageEight/Asset 30.svg";
import page8_element_4 from "../../assets/img/pageEight/Asset 31.svg";

function PageEight() {
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
            <Row>
              <Col style={{ height: "auto" }}>
                {/* Element 1 */}
                <Row
                  className="justify-content-center"
                  style={{ height: "50vh" }}
                >
                  <Col lg={12} md={12}>
                    <Image src={page8_element_1} fluid />
                  </Col>
                  <Col lg="6" md="6" className="d-flex justify-content-center">
                    <h5 className="font-d-din-bold subtitle">
                      Reducir el uso de los combustibles fósiles mitiga las
                      causas del cambio climático y genera impactos positivos
                      para la salud.
                    </h5>
                  </Col>
                </Row>
                {/* Element 2 */}
                <Row className="align-items-center">
                  <Col>
                    {/* Subelement - bullet point*/}
                    <Row className="mb-4">
                      <Col lg={2} md={2} className="d-flex justify-content-end">
                        <Image
                          src={page8_element_2}
                          style={{ maxWidth: "80px" }}
                        />
                      </Col>
                      <Col lg={10} md={10}>
                        <span className="font-d-din">
                          El TransMiCable y sus transformaciones urbanas fueron
                          implementadas por el gobierno local desde 2018 para
                          mejorar la movilidad y la calidad de vida de los
                          residente de Ciudad Bolívar.
                        </span>
                      </Col>
                    </Row>
                    {/* Subelement - bullet point*/}
                    <Row className="mb-4">
                      <Col lg={2} md={2} className="d-flex justify-content-end">
                        <Image
                          src={page8_element_3}
                          style={{ maxWidth: "80px" }}
                        />
                      </Col>
                      <Col lg={10} md={10}>
                        <span className="font-d-din">
                          9 de cada 10 personas usan el transporte público en la
                          zona de influencia del TransMiCable en Ciudad Bolívar.
                        </span>
                      </Col>
                    </Row>
                    {/* Subelement - bullet point*/}
                    <Row className="mb-4">
                      <Col lg={2} md={2} className="d-flex justify-content-end">
                        <Image
                          src={page8_element_4}
                          style={{ maxWidth: "80px" }}
                        />
                      </Col>
                      <Col lg={10} md={10}>
                        <span className="font-d-din">
                          Dentro de las cabinas del TransMiCable las dosis
                          inhaladas por viaje de material particulado fino
                          (PM2.5) son 27% más bajas y las de hollín (eBC) son
                          34% más bajas.
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

export default PageEight;
