import { Container, Row, Col } from "react-bootstrap";
import planet1 from "../assets/img/planet.png";
import planet2 from "../assets/img/planet2.png";
import planet4 from "../assets/img/planet4.png";

import "animate.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div className="animate__animated animate__fadeIn">
              <h2 className="mb-5">Projects</h2>
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "transparent",
                    color: "#fff",
                  }}
                  date="2022 - 2023"
                  iconStyle={{ borderColor: "transparent" }}
                  icon={<img src={planet1} alt="planet 1" />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Higlobe.com
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle">
                    Team Leader - Front-end
                  </h5>
                  <p className="fs-6 text-start">
                    UI development, User Experience, Project Management, Team
                    Leading
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "transparent",
                    color: "#fff",
                  }}
                  date="2021 - 2022"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  icon={<img src={planet2} alt="planet 2" />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Everly Health
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle">
                    Senior React Developer
                  </h5>
                  <p className="fs-6 text-start">
                    UI Components Development, Storybook, Perfomance,
                    Pixel-Perfect UI, Accessibility Tests
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "transparent",
                    color: "#fff",
                  }}
                  date="2020 - 2021"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  icon={<img src={planet4} alt="planet 3" />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Layer - Albaraka App
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle">
                    Senior Web Engineer
                  </h5>
                  <p className="fs-6 text-start">
                    UI Development, Concurrent Programming, Mobile UI,
                    End-to-End tests
                  </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "transparent",
                    color: "#fff",
                  }}
                  date="2019 - 2020"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  icon={<img src={planet1} alt="planet 1" />}
                >
                  <h3 className="vertical-timeline-element-title">Trio.dev</h3>
                  <h5 className="vertical-timeline-element-subtitle">
                    Senior Full-Stack Developer
                  </h5>
                  <p className="fs-6 text-start">
                    Static Website development, Backend development, Nodejs,
                    React, Headless CMS, Responsive UI, Animations, End-to-End
                    tests
                  </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "transparent",
                    color: "#fff",
                  }}
                  date="2018 - 2019"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  icon={<img src={planet2} alt="planet 2" />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Sciensa - Gerdau
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle">
                    Front-end Developer
                  </h5>
                  <p className="fs-6 text-start">
                    Mobile Development, React, React Native, Pixel-Perfect UI,
                    Automated Tests
                  </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "transparent",
                    color: "#fff",
                  }}
                  date="2017 - 2018"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  icon={<img src={planet4} alt="planet 4" />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Lenovo - Xclarity | Lenovo VX Installer
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle">
                    Full-Stack Engineer
                  </h5>
                  <p className="fs-6 text-start">
                    Cloud Programming, Nodejs, Design Patterns, Automation,
                    Managment as a service, API integration
                  </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="2011 - 2017"
                  contentStyle={{
                    background: "transparent",
                    color: "#fff",
                  }}
                  iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                  icon={<img src={planet1} alt="planet 2" />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Bachelor of Science in Computer Science
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle">
                    Bachelor Degree
                  </h5>
                  <p className="fs-6 text-start">
                    Federal University of Campina Grande - Brazil{" "}
                  </p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
