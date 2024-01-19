import { Col, Container, Row, Image } from "react-bootstrap";
import AudioApp from "../shared/Audio/Audio";
import character from "../../assets/img/character_3.svg";
import audio from "../../assets/audios/DONA-MARIA-6.mp3";
import page8_element_1 from "../../assets/img/pageEight/Asset 1.svg";
import page8_element_2 from "../../assets/img/pageEight/Asset 29.svg";
import page8_element_3 from "../../assets/img/pageEight/Asset 30.svg";
import page8_element_4 from "../../assets/img/pageEight/Asset 31.svg";
import "./PageEight.css";

function PageEight() {
  return (
    <>
      <section className="desktop" id="estudio-trust">
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
                    <Col
                      lg="6"
                      md="6"
                      className="d-flex justify-content-center"
                    >
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
                        <Col
                          lg={2}
                          md={2}
                          className="d-flex justify-content-end"
                        >
                          <Image
                            src={page8_element_2}
                            style={{ maxWidth: "80px" }}
                          />
                        </Col>
                        <Col lg={10} md={10}>
                          <span className="font-d-din">
                            El TransMiCable y sus transformaciones urbanas
                            fueron implementadas por el gobierno local desde
                            2018 para mejorar la movilidad y la calidad de vida
                            de los residente de Ciudad Bolívar.
                          </span>
                        </Col>
                      </Row>
                      {/* Subelement - bullet point*/}
                      <Row className="mb-4">
                        <Col
                          lg={2}
                          md={2}
                          className="d-flex justify-content-end"
                        >
                          <Image
                            src={page8_element_3}
                            style={{ maxWidth: "80px" }}
                          />
                        </Col>
                        <Col lg={10} md={10}>
                          <span className="font-d-din">
                            9 de cada 10 personas usan el transporte público en
                            la zona de influencia del TransMiCable en Ciudad
                            Bolívar.
                          </span>
                        </Col>
                      </Row>
                      {/* Subelement - bullet point*/}
                      <Row className="mb-4">
                        <Col
                          lg={2}
                          md={2}
                          className="d-flex justify-content-end"
                        >
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
      <section className="mobile" id="estudio-trust-mb">
        <Container fluid>
          <Row className="vh-100 align-items-center justify-content-center">
            <Col>
              <Row>
                <Col className="d-flex align-items-center">
                  <Image src={character} fluid />
                </Col>
                <Col>
                  <Row>
                    <Col className="text-center">
                      <h5 className="font-d-din-bold title-page-8">
                        Reducir el uso de los combustibles fósiles mitiga las
                        causas del cambio climático y genera impactos positivos
                        para la salud.
                      </h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <AudioApp audioRef={audio} />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-5">
                <Col>
                  {/* Subelement - bullet point*/}
                  <Row className="mb-3 justify-content-center">
                    <Col sm={2} xs={2} className="d-flex justify-content-end">
                      <Image
                        src={page8_element_2}
                        className="bullet-icon-page-8"
                      />
                    </Col>
                    <Col sm={9} xs={9}>
                      <span className="font-d-din bullet-text-page-8">
                        El TransMiCable y sus transformaciones urbanas fueron
                        implementadas por el gobierno local desde 2018 para
                        mejorar la movilidad y la calidad de vida de los
                        residente de Ciudad Bolívar.
                      </span>
                    </Col>
                  </Row>
                  {/* Subelement - bullet point*/}
                  <Row className="mb-3 justify-content-center">
                    <Col sm={2} xs={2} className="d-flex justify-content-end">
                      <Image
                        src={page8_element_3}
                        className="bullet-icon-page-8"
                      />
                    </Col>
                    <Col sm={9} xs={9}>
                      <span className="font-d-din bullet-text-page-8">
                        9 de cada 10 personas usan el transporte público en la
                        zona de influencia del TransMiCable en Ciudad Bolívar.
                      </span>
                    </Col>
                  </Row>
                  {/* Subelement - bullet point*/}
                  <Row className="mb-3 justify-content-center">
                    <Col sm={2} xs={2} className="d-flex justify-content-end">
                      <Image
                        src={page8_element_4}
                        className="bullet-icon-page-8"
                      />
                    </Col>
                    <Col sm={9} xs={9}>
                      <span className="font-d-din bullet-text-page-8">
                        Dentro de las cabinas del TransMiCable las dosis
                        inhaladas por viaje de material particulado fino (PM2.5)
                        son 27% más bajas y las de hollín (eBC) son 34% más
                        bajas.
                      </span>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default PageEight;
