import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/Rocket.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="animate__animated animate__fadeIn">
              <h1>{`Hi! I'm Kelvin Soares`} </h1>
              <p>
                With seven years of experience, I have established myself as a
                seasoned Senior Front‑end Engineer. Throughout my career, I have
                successfully contributed to early‑stage startups and worldwide
                tech giants, honing my skills and gaining valuable insights.
              </p>
              <button>
                <a
                  href="#connect"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Let’s Connect <ArrowRightCircle size={25} />
                </a>
              </button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="animate__animated animate__zoomIn">
              <img
                className="hero-img"
                src={headerImg}
                alt="Rocket launching"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
