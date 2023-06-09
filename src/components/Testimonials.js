import Card from "react-bootstrap/Card";
import "react-multi-carousel/lib/styles.css";
import matthew_avatar from "../assets/img/matthew.jpg";
import samuel_avatar from "../assets/img/samuel.jpg";
import planet3 from "../assets/img/planet3.png";

export const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="testimonials-bx wow zoomIn p-2 p-md-4 p-lg-5">
              <h2 className="mb-3 mt-md-3">Testimonials</h2>
              <div className="row">
                <div className="col-12 mt-3 col-lg-6">
                  <Card
                    style={{
                      border: "1px solid #b8b8b8",
                      borderRadius: "32px",
                      backgroundColor: "transparent",
                      height: "100%",
                    }}
                  >
                    <div className="avatar-box">
                      <img
                        className="author-avatar"
                        src={matthew_avatar}
                        alt="matthew alcorn avatar"
                      />
                    </div>
                    <Card.Body>
                      <Card.Title className="text-start mb-2">
                        Matthew Alcorn
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted text-start">
                        Frontend Software Engineer & UX Designer
                      </Card.Subtitle>
                      <Card.Text className="fs-6 text-start text-break">
                        I had the opportunity to work with Kelvin while our team
                        was developing the Lenovo ThinkAgile Installer and, in
                        parallel, another proof of concept application. Kelvin
                        has a very strong technical aptitude and is skilled in
                        front-end development technologies and design patterns.
                        Kelvin is committed to delivering high quality software
                        and is well versed in defining good development
                        processes and procedures. In addition to his skills as a
                        developer, he is also a kind, thoughtful, and
                        considerate person. It was a privilege to work with
                        Kelvin and any team would be lucky to have him.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-12 mt-3 lg:mt-0 col-lg-6">
                  <Card
                    style={{
                      border: "1px solid #b8b8b8",
                      backgroundColor: "transparent",
                      borderRadius: "32px",
                      height: "100%",
                    }}
                  >
                    <div className="avatar-box">
                      <img
                        className="author-avatar"
                        src={samuel_avatar}
                        alt="samuel carvalho avatar"
                      />
                    </div>
                    <Card.Body>
                      <Card.Title className="text-start mb-2">
                        Samuel Carvalho
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted text-start">
                        Senior Software Engineer | John Deere
                      </Card.Subtitle>
                      <Card.Text className="fs-6 text-start text-break">
                        Kelvin is one of the most hard working partners I had
                        the opportunity to work with. He has both excellent
                        software engineering and soft skills, and also have a
                        useful sense of urgency for important matters. He
                        genuinely cares about his team and the customers that
                        the product he is developing targets. I hope we can work
                        together again in the future.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={planet3} alt="planet" />
    </section>
  );
};
