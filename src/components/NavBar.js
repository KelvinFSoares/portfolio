import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container className="p-2 p-lg-3">
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="ms-auto"
              style={{ diplay: "flex", alignItems: "center" }}
            >
              <Nav.Link
                href="#testimonials"
                className={
                  activeLink === "testimonials"
                    ? "active navbar-link mb-2"
                    : "navbar-link mb-2"
                }
                onClick={() => onUpdateActiveLink("testimonials")}
              >
                Testimonials
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link mb-2"
                    : "navbar-link mb-2"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#connect"
                className={
                  activeLink === "connect"
                    ? "active navbar-link mb-2"
                    : "navbar-link mb-2"
                }
                onClick={() => onUpdateActiveLink("connect")}
              >
                Connect
              </Nav.Link>
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/kelvin-soares/">
                  <img src={navIcon1} alt="linkedin icon" />
                </a>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
