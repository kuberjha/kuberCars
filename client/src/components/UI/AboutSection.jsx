import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section className="about__section" style={{ marginTop: "100px" }}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to Kuber Cars</h2>
              <p
                className="section__description"
                style={{
                  color: "#7c8a97",
                  fontSize: "0.9rem",
                  lineHeight: "30px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum blanditiis esse accusantium dignissimos labore
                laborum. Veniam, corporis mollitia temporibus, in quaerat vero
                deleniti amet dolorem repudiandae, pariatur nam dolore! Impedit
                neque sit ad temporibus quam similique dolor ipsam praesentium
                sunt.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p
                  className="section__description d-flex align-items-center gap-2"
                  style={{
                    color: "#7c8a97",
                  }}
                >
                  <i class="bi bi-check2-circle"></i> Lorem ipsum dolor sit
                  amet.
                </p>

                <p
                  className="section__description d-flex align-items-center gap-2"
                  style={{
                    color: "#7c8a97",
                  }}
                >
                  <i class="bi bi-check2-circle"></i> Lorem ipsum dolor sit
                  amet.
                </p>
              </div>

              <div
                className="about__section-item d-flex align-items-center"
                style={{
                  color: "#7c8a97",
                }}
              >
                <p
                  className="section__description d-flex align-items-center gap-2"
                  style={{
                    color: "#7c8a97",
                  }}
                >
                  <i class="bi bi-check2-circle"></i> Lorem ipsum dolor sit amet.
                </p>

                <p
                  className="section__description d-flex align-items-center gap-2"
                  style={{
                    color: "#7c8a97",
                  }}
                >
                  <i class="bi bi-check2-circle"></i> Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
