import React from "react";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

function AboutUs() {
  return (
    <Helmet title="About">
      {/* <CommonSection title="About Us" /> */}
      <AboutSection aboutClass="aboutPage" />
      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content" style={{marginBottom: "10%"}}>
                <h2 className="section__title">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p
                  className="section__description"
                  style={{
                    color: "#7c8a97",
                    fontSize: "0.9rem",
                    lineHeight: "30px",
                  }}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eveniet veniam assumenda aperiam accusantium ex autem
                  perferendis repellendus nostrum delectus. Nemo et dolore est
                  tempore rem minima adipisci magni dolorum ipsam.
                </p>

                <p
                  className="section__description"
                  style={{
                    color: "#7c8a97",
                    fontSize: "0.9rem",
                    lineHeight: "30px",
                  }}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eveniet veniam assumenda aperiam accusantium ex autem
                  perferendis repellendus nostrum delectus. Nemo et dolore est
                  tempore rem minima adipisci magni dolorum ipsam.
                </p>

                <div className=" d-flex align-items-center gap-3 mb-4">
                  <span className="fs-4">
                  <i class="bi bi-whatsapp"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h6>+91-9729080598</h6>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center mt-4">
              <h6 className="section__subtitle text-center">Experts</h6>
              <h2 className="section__title text-center">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default AboutUs;
