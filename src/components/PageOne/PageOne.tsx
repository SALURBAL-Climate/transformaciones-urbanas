import NavbarApp from "../shared/Navbar/Navbar";
import cityImg from "../../assets/img/city.png";

function PageOne() {
  return (
    <section>
      <NavbarApp />
      <div
        id="desktop-page-1"
        style={{
          backgroundImage: `url(${cityImg})`,
          height: "93vh",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
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
    </section>
  );
}

export default PageOne;
