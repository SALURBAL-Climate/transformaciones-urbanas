import { Col, Container, Row, Image } from "react-bootstrap";
import page14_element_1 from "../../assets/img/pageFourteen/Asset 10.svg";
import salurbal_logo from "../../assets/img/logos/salurbal_logo.svg";
import drexel_logo from "../../assets/img/logos/drexel_university_logo.svg";
import pontificia_logo from "../../assets/img/logos/pontificia_chile_logo.svg";
import andes_logo from "../../assets/img/logos/universidad_andes_logo.svg";
import ufmg_logo from "../../assets/img/logos/ufmg_logo.svg";
import "./PageFourteen.css";

function PageFourteen() {
  return (
    <section className="desktop">
      <Container fluid>
        <Row className="p-5">
          <Col className="pt-1">
            {/* Subtitle */}
            <Row className="mb-3">
              <Col
                lg={1}
                md={1}
                className="d-flex justify-content-center align-items-center"
              >
                <Image
                  src={page14_element_1}
                  style={{ maxWidth: "80px" }}
                  fluid
                />
              </Col>
              <Col lg={7} md={7} className="d-flex align-items-center">
                <h4 className="font-cunia text-uppercase">Desarrolladores</h4>
              </Col>
            </Row>
            {/* Content */}
            <Row className="pt-5">
              <Col>
                <Row className="mb-1">
                  <Col lg={1} md={1}></Col>
                  <Col>
                    <h5 className="font-d-din-bold">Autores</h5>
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col lg={9} md={9}>
                    <span className="font-d-din">
                      Laura Baldovino-Chiquillo (1), Katy Indvik (2), Olga L
                      Sarmiento (1), Roxana Valdebenito (3), Lidia Maria de
                      Oliveira Morais (4), Juliana Uribe (5), Donny Sebastian
                      Pasos (6), Alejandra Vives (3), Amelia Augusta de Lima
                      Friche (4), Waleska Teixeira Caiaffa (4).
                    </span>
                  </Col>
                </Row>
              </Col>
              <Col className="d-flex justify-content-center align-items-center">
                <ol
                  className="font-d-din"
                  style={{
                    backgroundColor: "#D3D4D4",
                    borderRadius: "20px",
                    padding: "2rem 2.5rem",
                  }}
                >
                  <li>
                    Facultad de Medicina, Universidad de los Andes, Bogotá,
                    Colombia.
                  </li>
                  <li>
                    Departamento de Ingeniería, Universidad de los Andes,
                    Bogotá, Colombia.
                  </li>
                  <li>Drexel University, Filadelfia, Estados Unidos.</li>
                </ol>
              </Col>
            </Row>
            <Row className="pt-2 font-d-din">
              <Col className="d-flex justify-content-center">
                <span>Diseño gráfico: Vera Fonseca</span>
              </Col>
              <Col className="d-flex justify-content-center">
                <span>Desarrollo web: Fabián Peña</span>
              </Col>
              <Col className="d-flex justify-content-center">
                <span>Producción de audio: Nikol Pizarro</span>
              </Col>
            </Row>
            {/* Subtitle */}
            <Row className="mb-1">
              <Col
                lg={1}
                md={1}
                className="d-flex justify-content-center align-items-center"
              >
                <Image
                  src={page14_element_1}
                  style={{ maxWidth: "80px" }}
                  fluid
                />
              </Col>
              <Col lg={7} md={7} className="d-flex align-items-center">
                <h4 className="font-cunia text-uppercase">Financiadores</h4>
              </Col>
            </Row>
            <Row className="p-2 justify-content-center align-items-center mb-5">
              <Col
                className="text-center font-d-din"
                style={{
                  backgroundColor: "#D3D4D4",
                  borderRadius: "20px",
                  padding: "2rem 2.5rem",
                }}
              >
                <span>
                  SALURBAL fue financiado por el Wellcome Trust.
                  <br /> RUCAS también recibió financiamiento de Centro de
                  Desarrollo Urbano Sustentable, la Agencia Nacional de
                  Investigación y Desarrollo, y el apoyo del Departamento de
                  Salud Pública de la Pontificia Universidad Católica de Chile.
                  <br />
                  TrUST también recibió financiamiento por el Ministerio de
                  Ciencia y Tecnología e Innovación, la Secretaría Distrital de
                  Planeación de Bogotá, la Universidad de los Andes y la
                  Universidad del Norte. <br /> BH Viva também recebeu
                  financiamento de: Convênio de Cooperação - Observatório BH-Rio
                  da Fiocruz; Vice-Presidência de Meio Ambiente, Atenção e
                  Promoção da Saúde (VPAAPS); Universidade Federal de Minas
                  Gerais, Observatório de Saúde Urbana de Belo Horizonte
                  (UFMG-OSUBH), no âmbito do QUALISUS, em projetos 2011-12 e
                  FAPEMIG; Ministério da Saúde (Fundo Nacional de Saúde) por
                  meio da Fundação Oswaldo Cruz (Fiocruz); Conselho Nacional de
                  Desenvolvimento Científico e Tecnológico (CNPq), apoia as
                  bolsas de produtividade em pesquisa (WTC e AALF); FAPEMIG
                  (Edital Universal 01/2013-APQ0204213) e CNPq (Edital Universal
                  Processo nº 421925/2016-17 Edital UNIVERSAL 01/2016).
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row
          style={{
            backgroundColor: "#D3D4D4",
          }}
        >
          <Col>
            <Image src={salurbal_logo} className="logo-class" fluid />
          </Col>
          <Col>
            <Image
              src={drexel_logo}
              className="logo-class"
              style={{
                mixBlendMode: "darken",
              }}
              fluid
            />
          </Col>
          <Col>
            <Image src={pontificia_logo} className="logo-class" fluid />
          </Col>
          <Col>
            <Image src={andes_logo} className="logo-class" fluid />
          </Col>
          <Col>
            <Image src={ufmg_logo} className="logo-class" fluid />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PageFourteen;
