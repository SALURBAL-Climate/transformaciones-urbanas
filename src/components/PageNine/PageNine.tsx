import { Col, Container, Row, Image } from "react-bootstrap";
import AudioApp from "../shared/Audio/Audio";
import character from "../../assets/img/character_4.svg";
import audio from "../../assets/audios/SENORA-SU-7.mp3";
import page9_element_1 from "../../assets/img/pageNine/Asset 32.png";
import page9_element_2 from "../../assets/img/pageNine/Asset 33.svg";
import page9_element_3 from "../../assets/img/pageNine/Asset 34.svg";
import page9_element_4 from "../../assets/img/pageNine/Asset 35.svg";
import "./PageNine.css";
function PageNine() {
  return (
    <>
      <section className="desktop">
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
                  <Row className="justify-content-center mb-5">
                    <Col
                      lg={12}
                      md={12}
                      className="d-flex justify-content-center"
                    >
                      <Image
                        src={page9_element_1}
                        style={{
                          width: "400px",
                          aspectRatio: "3/2",
                          objectFit: "contain",
                        }}
                      />
                    </Col>
                    <Col
                      lg="6"
                      md="6"
                      className="d-flex justify-content-center"
                    >
                      <h5 className="font-d-din-bold subtitle">
                        Em áreas de baixa renda, a vegetação pode ser um fator
                        de proteção para o desenvolvimento da dengue.
                      </h5>
                    </Col>
                  </Row>
                  {/* Element 2 */}
                  <Row>
                    <Col>
                      {/* Subelement - bullet point*/}
                      <Row className="mb-4">
                        <Col
                          lg={2}
                          md={2}
                          className="d-flex justify-content-end"
                        >
                          <Image
                            src={page9_element_2}
                            style={{ maxWidth: "80px" }}
                          />
                        </Col>
                        <Col lg={10} md={10}>
                          <span className="font-d-din">
                            Em Belo Horizonte, a presença e qualidade de áreas
                            verdes está associada a uma redução na incidência de
                            dengue, especialmente em áreas socioeconomicamente
                            vulneráveis.
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
                            src={page9_element_3}
                            style={{ maxWidth: "80px" }}
                          />
                        </Col>
                        <Col lg={10} md={10}>
                          <span className="font-d-din">
                            O Programa Vila Viva inclui transformações urbanas
                            em 12 vilas e favelas da cidade. Essas intervenções
                            podem incluir alterações nas estruturas de
                            habitação, transporte e vizinhança; acessibilidade a
                            serviços e equipamentos públicos; pavimentação e
                            alargamento de becos e ruas; instalação de parques,
                            áreas verdes, equipamentos de lazer e esportes;
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
                            src={page9_element_4}
                            style={{ maxWidth: "80px" }}
                          />
                        </Col>
                        <Col lg={10} md={10}>
                          <span className="font-d-din">
                            A preservação de áreas verdes de qualidade nos
                            territórios com intervenções do Programa Vila Viva
                            tem o potencial de contribuir para a redução na
                            transmissão da dengue e de outras doenças
                            infecciosas.
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
      <section className="mobile">
        <Container fluid>
          <Row className="vh-100 align-items-center justify-content-center p-4">
            <Col>
              <Row>
                <Col className="d-flex align-items-center">
                  <Image src={character} fluid />
                </Col>
                <Col>
                  <Row>
                    <Col>
                      <Image src={page9_element_1} fluid />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="text-center">
                      <h5 className="font-d-din-bold title-page-8">
                        Em áreas de baixa renda, a vegetação pode ser um fator
                        de proteção para o desenvolvimento da dengue.
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
                  <Row className="mb-3">
                    <Col className="d-flex justify-content-center">
                      <Image
                        src={page9_element_2}
                        style={{ maxWidth: "80px" }}
                        className="icon-page-9"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="d-flex justify-content-center text-center">
                      <span
                        className="font-d-din p-4 label-page-9"
                        style={{
                          backgroundColor: "#D4D5D5",
                          borderRadius: "20px",
                          display: "inline-block",
                        }}
                      >
                        O Programa Vila Viva inclui transformações urbanas em 12
                        vilas e favelas da cidade. Essas intervenções podem
                        incluir alterações nas estruturas de habitação,
                        transporte e vizinhança; acessibilidade a serviços e
                        equipamentos públicos; pavimentação e alargamento de
                        becos e ruas; instalação de parques, áreas verdes,
                        equipamentos de lazer e esportes;
                      </span>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container fluid>
          <Row className="vh-100 align-items-center p-4">
            <Col>
              <Row className="mt-5">
                <Col>
                  <Row className="mb-3">
                    <Col className="d-flex justify-content-center">
                      <Image
                        src={page9_element_3}
                        style={{ maxWidth: "80px" }}
                        className="icon-page-9"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="d-flex justify-content-center text-center">
                      <span
                        className="font-d-din p-4 label-page-9"
                        style={{
                          backgroundColor: "#D4D5D5",
                          borderRadius: "20px",
                          display: "inline-block",
                        }}
                      >
                        Em Belo Horizonte, a presença e qualidade de áreas
                        verdes está associada a uma redução na incidência de
                        dengue, especialmente em áreas socioeconomicamente
                        vulneráveis.
                      </span>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-5">
                <Col>
                  <Row className="mb-3">
                    <Col className="d-flex justify-content-center">
                      <Image
                        src={page9_element_4}
                        style={{ maxWidth: "80px" }}
                        className="icon-page-9"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="d-flex justify-content-center text-center">
                      <span
                        className="font-d-din p-4 label-page-9"
                        style={{
                          backgroundColor: "#D4D5D5",
                          borderRadius: "20px",
                          display: "inline-block",
                        }}
                      >
                        A preservação de áreas verdes de qualidade nos
                        territórios com intervenções do Programa Vila Viva tem o
                        potencial de contribuir para a redução na transmissão da
                        dengue e de outras doenças infecciosas.
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

export default PageNine;
