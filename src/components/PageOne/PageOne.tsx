import { Col, Container, Image, Row } from "react-bootstrap";
import NavbarApp from "../shared/Navbar/Navbar";
import salurbal_logo from "../../assets/img/salurbal_logo.svg";
import drexel_logo from "../../assets/img/drexel_university_logo.svg";
import pontificia_logo from "../../assets/img/pontificia_chile_logo.svg";
import andes_logo from "../../assets/img/universidad_andes_logo.svg";
import ufmg_logo from "../../assets/img/ufmg_logo.svg";
import "./PageOne.css";
import AudioApp from "../shared/Audio/Audio";
import audio_test from "../../assets/audios/Audio3_Maria.wav";

function PageOne() {
  return (
    <section>
      {/* <AudioApp audioRef={audio_test} /> */}
      <NavbarApp />
      <div id="desktop-page-1">
        <span style={{ maxWidth: "50%", marginBottom: "20px" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1
              style={{
                wordWrap: "break-word",
                textAlign: "center",
                color: "var(--txt-primary)",
                maxWidth: "70%",
              }}
            >
              Transformaciones Urbanas y Resiliencia al Cambio Climático en
              América Latina
            </h1>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h3
              style={{
                textAlign: "center",
                color: "white",
                backgroundColor: "var(--txt-primary)",
                borderRadius: "50px",
                padding: "15px",
                justifyContent: "center",
                maxWidth: "70%",
              }}
            >
              Casos de Chile, Colombia y Brasil
            </h3>
          </div>
        </span>
      </div>
      <div id="mobile-page-1">
        <Container fluid className="background-page-1">
          <Row className="justify-content-center pt-3 mb-4">
            <Col>
              <Image src={salurbal_logo} fluid />
            </Col>
            <Col>
              <Image
                src={drexel_logo}
                style={{
                  mixBlendMode: "darken",
                }}
                className="logo-class"
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
          <Row className="justify-content-center">
            <h1
              style={{
                textAlign: "center",
                wordBreak: "break-word",
                maxWidth: "90%",
                color: "var(--txt-primary)",
                textTransform: "uppercase",
              }}
            >
              Transformaciones urbanas y resiliencia al cambio climático en
              América Latina
            </h1>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default PageOne;
