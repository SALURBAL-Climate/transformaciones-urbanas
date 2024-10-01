import page11_element_1 from "../../assets/img/pageEleven/Asset 9.svg";
import page11_element_2 from "../../assets/img/pageEleven/Asset 10.svg";
import page12_element_1 from "../../assets/img/pageTwelve/Asset 7.svg";
import page13_element_1 from "../../assets/img/pageThirteen/Asset 8.svg";
import page13_element_3 from "../../assets/img/pageThirteen/Asset 37.svg";
import page14_element_1 from "../../assets/img/pageFourteen/Asset 10.svg";
import page14_element_2 from "../../assets/img/pageFourteen/Asset 38.svg";
import drexel_logo from "../../assets/img/logos/drexel_university_logo.svg";
import pontificia_logo from "../../assets/img/logos/pontificia_chile_logo.svg";
import andes_logo from "../../assets/img/logos/universidad_andes_logo.svg";
import ufmg_logo from "../../assets/img/logos/ufmg_logo.svg";
import { Col, Container, Image, Row } from "react-bootstrap";

import "./PageCreditsMobile.css";

function PageCreditsMobile() {
  return (
    <section className="mobile" id="contacto-mb">
      <Container fluid className="vh-100" style={{ overflow: "scroll" }}>
        <Row>
          <Col className="pt-5 px-3">
            <Row className="mb-3">
              <Col sm={2} xs={2}>
                <Image
                  src={page11_element_1}
                  style={{ maxWidth: "80px" }}
                  fluid
                />
              </Col>
              <Col sm={9} xs={9} className="d-flex align-items-center">
                <h2 className="font-cunia text-uppercase title-page">
                  Conoce más sobre los estudios de <br />
                  transformaciones urbanas de salurbal
                </h2>
              </Col>
            </Row>
            <Row>
              <Col sm={2} xs={2} className="d-flex justify-content-end">
                <Image
                  src={page11_element_2}
                  style={{ maxWidth: "80px" }}
                  fluid
                />
              </Col>
              <Col sm={9} xs={9} className="d-flex align-items-center">
                <h3 className="font-cunia title-page">Estudio RUCAS</h3>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col sm={2} xs={2}></Col>
              <Col sm={9} xs={9} className="d-flex align-items-center">
                <h5 className="font-d-din-bold subtitle-page">
                  Publicaciones académicas
                </h5>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col sm={11} xs={11}>
                <ul className="custom-bullet-list-mobile text-page">
                  <li className="font-d-din">
                    Baeza, F., Vives Vergara, A., González, F. et al. The
                    Regeneración Urbana, Calidad de Vida y Salud - RUCAS
                    project: a Chilean multi-methods study to evaluate the
                    impact of urban regeneration on resident health and
                    wellbeing. BMC Public Health 21, 728 (2021).{" "}
                    <a
                      href="https://doi.org/10.1186/s12889-021-10739-3"
                      style={{ color: "#E24339" }}
                      target="blank"
                    >
                      https://doi.org/10.1186/s12889-021-10739-3
                    </a>
                  </li>
                  <li className="font-d-din">
                    Orlando-Romero, L., Vives-Vergara, A., Valdebenito, R.,
                    Cortinez-O’Ryan, A., Baeza, F., & Rasse, A. (2023). “Mi vida
                    va a ser mucho mejor de lo que ha sido”: estudio cualitativo
                    sobre el vínculo entre regeneración de viviendas sociales,
                    calidad de vida y salud. Cadernos de Saúde Pública, 39,
                    e00149822.{" "}
                    <a
                      href="https://www.scielo.br/j/csp/a/D9WMB9wM4k5yDq7z3KM7GPy/?lang=es"
                      style={{ color: "#E24339" }}
                      target="blank"
                    >
                      https://www.scielo.br/j/csp/a/D9WMB9wM4k5yDq7z3KM7GPy/?lang=es
                    </a>
                  </li>
                  <li className="font-d-din">
                    Valdebenito, R., Angelini, F., Schmitt, C., Baeza, F.,
                    Cortinez-O’Ryan, A., González, F., & Vives-Vergara, A.
                    (2023). Desarrollo de instrumentos para estudiar el impacto
                    en salud de las transformaciones urbanas en contextos de
                    elevada vulnerabilidad: el estudio RUCAS. Cadernos de Saúde
                    Pública, 39, e00148322.{" "}
                    <a
                      href="https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-021-10739-3"
                      style={{ color: "#E24339" }}
                      target="blank"
                    >
                      https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-021-10739-3
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col sm={2} xs={2}></Col>
              <Col sm={9} xs={9} className="d-flex align-items-center">
                <h5 className="font-d-din-bold subtitle-page">
                  Otros recursos interactivos
                </h5>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col sm={11} xs={11}>
                <ul className="custom-bullet-list-mobile text-page">
                  <li className="font-d-din">
                    <a
                      href="http://www.estudioRucas.cl
                        "
                      style={{ color: "#E24339" }}
                      target="blank"
                    >
                      http://www.estudioRucas.cl
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col sm={2} xs={2} className="d-flex justify-content-end">
                <Image
                  src={page12_element_1}
                  style={{ maxWidth: "80px" }}
                  fluid
                />
              </Col>
              <Col sm={9} xs={9} className="d-flex align-items-center">
                <h3 className="font-cunia title-page">Estudio TrUST</h3>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col sm={2} xs={2}></Col>
              <Col sm={9} xs={9} className="d-flex align-items-center">
                <h5 className="font-d-din-bold subtitle-page">
                  Publicaciones académicas
                </h5>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col sm={11} xs={11}>
                <ul className="custom-bullet-list-mobile text-page">
                  <li className="font-d-din ">
                    Winds of change: the case of TransMiCable, a
                    community-engaged transport intervention improving equity
                    and health in Bogotá, Colombia
                  </li>
                  <li className="font-d-din ">
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
            <Row className="mb-2">
              <Col sm={2} xs={2}></Col>
              <Col sm={9} xs={9} className="d-flex align-items-center">
                <h5 className="font-d-din-bold subtitle-page">
                  Resúmenes de política
                </h5>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col sm={11} xs={11}>
                <ul className="custom-bullet-list-mobile text-page">
                  <li className="font-d-din ">
                    Guevara T, Sarmiento OL, Higuera D, Useche AF, Rubio MA,
                    Wilches MA, et al. Transformaciones Urbanas y Salud:
                    Resultados de la evaluación del TransMiCable. Resumen de
                    resultados no. 1, 2020.
                  </li>
                  <li className="font-d-din ">
                    Guevara-Aladino P, Baldovino-Chiquillo L, Martínez P,
                    Cantillo-García V, Gómez-García L, Useche AF, et al.
                    Transformaciones Urbanas y Salud (TrUST): Resultados de la
                    evaluación del TransMiCable durante la pandemia por
                    COVID-19. Resumen de resultados no. 2, 2022.
                  </li>
                </ul>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col sm={2} xs={2}></Col>
              <Col sm={9} xs={9} className="d-flex align-items-center">
                <h5 className="font-d-din-bold subtitle-page">
                  Otros recursos interactivos
                </h5>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col sm={11} xs={11}>
                <ul className="custom-bullet-list-mobile text-page">
                  <li className="font-d-din ">
                    Scrollytelling Transformaciones Urbanas y Salud (TrUST):
                    resultados de la evaluación del TransMiCable.{" "}
                    <a
                      href="https://salurbal-climate.github.io/transmicable/"
                      style={{ color: "#E24339" }}
                      target="blank"
                    >
                      https://salurbal-climate.github.io/transmicable/
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col sm={2} xs={2} className="d-flex justify-content-end">
                <Image
                  src={page13_element_1}
                  style={{ maxWidth: "80px" }}
                  fluid
                />
              </Col>
              <Col sm={9} xs={9} className="d-flex align-items-center">
                <h3 className="font-cunia title-page">Estudio BH Viva</h3>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col sm={2} xs={2}></Col>
              <Col sm={9} xs={9} className="d-flex align-items-center">
                <h5 className="font-d-din-bold subtitle-page">
                  Publicaciones académicas
                </h5>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col sm={11} xs={11}>
                <ul className="custom-bullet-list-mobile text-page">
                  <li className="font-d-din ">
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
                  <li className="font-d-din ">
                    Twenty-Two years of dengue fever (1996-2017): an
                    epidemiological study in a Brazilian city{" "}
                    <a
                      href="https://www.tandfonline.com/doi/full/10.1080/09603123.2019.1656801"
                      style={{ color: "#E24339" }}
                      target="blank"
                    >
                      https://www.tandfonline.com/doi/full/10.1080/09603123.2019.1656801
                    </a>
                  </li>
                  <li className="font-d-din ">
                    The influence of climatic conditions on hospital admissions
                    for asthma in children and adolescents living in Belo
                    Horizonte, Minas Gerais, Brazil{" "}
                    <a
                      href="https://www.scielo.br/j/csc/a/QQcDT5VBFxcf6rdG88CbzMM/?lang=en"
                      style={{ color: "#E24339" }}
                      target="blank"
                    >
                      https://www.scielo.br/j/csc/a/QQcDT5VBFxcf6rdG88CbzMM/?lang=en
                    </a>
                  </li>
                  <li className="font-d-din ">
                    Spatial analysis of dengue incidence and Aedes aegypti
                    ovitrap surveillance in Belo Horizonte, Brazil{" "}
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
            <Row className="mt-3">
              <Col className="d-flex justify-content-center">
                <Image
                  src={page13_element_3}
                  fluid
                  style={{ maxWidth: "50%" }}
                ></Image>
              </Col>
            </Row>
            <Row className="p-2 justify-content-center align-items-center my-4">
              <Col className="text-center font-d-din">
                <span
                  className="text-page"
                  style={{
                    display: "inline-block",
                    backgroundColor: "#D3D4D4",
                    borderRadius: "20px",
                    padding: "1rem 1.5rem",
                  }}
                >
                  Olga Lucía Sarmiento
                  <br />
                  <a style={{ color: "#E24339" }}>(osarmien@uniandes.edu.co)</a>
                </span>
              </Col>
            </Row>
            <Row className="p-2 justify-content-center align-items-center my-4">
              <Col className="text-center font-d-din">
                <span
                  className="text-page"
                  style={{
                    display: "inline-block",
                    backgroundColor: "#D3D4D4",
                    borderRadius: "20px",
                    padding: "1rem 1.5rem",
                  }}
                >
                  Proyecto Salud Urbana en América Latina (SALURBAL):
                  <br />
                  <a
                    href="https://drexel.edu/lac/salurbal/overview/"
                    target="blank"
                    style={{ color: "#E24339" }}
                  >
                    https://drexel.edu/lac/salurbal/overview/
                  </a>
                </span>
              </Col>
            </Row>
            <Row>
              <Col sm={2} xs={2} className="d-flex justify-content-end">
                <Image
                  src={page14_element_1}
                  style={{ maxWidth: "80px" }}
                  fluid
                />
              </Col>
              <Col sm={9} xs={9} className="d-flex align-items-center">
                <h3 className="font-cunia title-page">Desarrolladores</h3>
              </Col>
            </Row>
            <Row className="p-2 justify-content-center align-items-center mt-4">
              <Col className="text-center font-d-din">
                <span
                  className="text-page"
                  style={{
                    display: "inline-block",
                    backgroundColor: "#D3D4D4",
                    borderRadius: "20px",
                    padding: "1rem 1.5rem",
                  }}
                >
                  <span className="font-d-din-bold">Autores:</span> <br /> Laura
                  Baldovino-Chiquillo (1), Katy Indvik (2), Olga L Sarmiento
                  (1), Roxana Valdebenito (3), Lidia Maria de Oliveira Morais
                  (4), Juliana Uribe (5), Donny Sebastian Pasos (6), Alejandra
                  Vives (3), Amelia Augusta de Lima Friche (4), Waleska Teixeira
                  Caiaffa (4).
                </span>
              </Col>
            </Row>
            <Row className="p-2 justify-content-center align-items-center">
              <Col className="text-center font-d-din d-flex justify-content-center">
                <span
                  className="text-page"
                  style={{
                    padding: "1rem 1.5rem",
                  }}
                >
                  <ol className="font-d-din">
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
                </span>
              </Col>
            </Row>
            <Row className="p- justify-content-center align-items-center mb-5">
              <Col className="text-center font-d-din d-flex justify-content-center">
                <span className="text-page">
                  Diseño gráfico: Vera Fonseca
                  <br /> Desarrollo web: Fabián Peña
                  <br /> Producción de audio: Nikol Pizarro
                </span>
              </Col>
            </Row>
            <Row>
              <Col sm={2} xs={2} className="d-flex justify-content-end">
                <Image
                  src={page14_element_2}
                  style={{ maxWidth: "80px" }}
                  fluid
                />
              </Col>
              <Col sm={9} xs={9} className="d-flex align-items-center">
                <h3 className="font-cunia title-page">Financiadores</h3>
              </Col>
            </Row>
            <Row className="p-2 justify-content-center align-items-center my-4">
              <Col className="text-center font-d-din">
                <span
                  className="text-page"
                  style={{
                    display: "inline-block",
                    backgroundColor: "#D3D4D4",
                    borderRadius: "20px",
                    padding: "1rem 1.5rem",
                  }}
                >
                  SALURBAL fue financiado por el Wellcome Trust. RUCAS también
                  recibió financiamiento de Centro de Desarrollo Urbano
                  Sustentable, la Agencia Nacional de Investigación y
                  Desarrollo, y el apoyo del Departamento de Salud Pública de la
                  Pontificia Universidad Católica de Chile. TrUST también
                  recibió financiamiento por el Ministerio de Ciencia y
                  Tecnología e Innovación, la Secretaría Distrital de Planeación
                  de Bogotá, la Universidad de los Andes y la Universidad del
                  Norte. BH Viva também recebeu financiamento de: Convênio de
                  Cooperação - Observatório BH-Rio da Fiocruz; Vice-Presidência
                  de Meio Ambiente, Atenção e Promoção da Saúde (VPAAPS);
                  Universidade Federal de Minas Gerais, Observatório de Saúde
                  Urbana de Belo Horizonte (UFMG-OSUBH), no âmbito do QUALISUS,
                  em projetos 2011-12 e FAPEMIG; Ministério da Saúde (Fundo
                  Nacional de Saúde) por meio da Fundação Oswaldo Cruz
                  (Fiocruz); Conselho Nacional de Desenvolvimento Científico e
                  Tecnológico (CNPq), apoia as bolsas de produtividade em
                  pesquisa (WTC e AALF); FAPEMIG (Edital Universal
                  01/2013-APQ0204213) e CNPq (Edital Universal Processo nº
                  421925/2016-17 Edital UNIVERSAL 01/2016).
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
          <Col sm={6} xs={6}>
            <Image
              src={drexel_logo}
              className="logo-class"
              style={{
                mixBlendMode: "darken",
              }}
              fluid
            />
          </Col>
          <Col sm={6} xs={6}>
            <Image src={pontificia_logo} className="logo-class" fluid />
          </Col>
          <Col>
            <Image src={andes_logo} className="logo-class" fluid />
          </Col>
          <Col sm={6} xs={6}>
            <Image src={ufmg_logo} className="logo-class" fluid />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PageCreditsMobile;
