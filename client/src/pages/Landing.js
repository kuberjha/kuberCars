import React from "react";
import Slider from "react-slick";
import { Col, Container } from "reactstrap";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "../styles/blog-item.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/hero-slider.css";
import blogData from "../../src/components/data/blogData";
import "../styles/blog-details.css";

const mappingStyle = [
  "slider__item slider__item-01 mt0",
  "slider__item slider__item-02 mt0",
  "slider__item slider__item-03 mt0",
  "slider__item slider__item-04 mt0",
  "slider__item slider__item-05 mt0",
];

function Landing() {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  const user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <div>
      <Slider {...settings} className="hero__slider">
        {mappingStyle.map((item, index) => (
          <div className={item}>
            <Container>
              <div className="slider__content ">
                <h4 className="text-light mb-3">Starting at ₹499 Per Day</h4>
                <h1 className="text-light mb-4">Reserve Now and Get 50% Off</h1>
                <button className="btn reserve__btn mt-4">
                  {user !== null ? (
                    <Link to="/">Reserve Now</Link>
                  ) : (
                    <Link to="/login">Reserve Now</Link>
                  )}
                </button>
              </div>
            </Container>
          </div>
        ))}
      </Slider>

      <Col lg="12" className="mb-5 text-center" style={{ marginTop: "50px" }}>
        <h6 className="section__subtitle text-center">Explore our blogs</h6>
        <h2 className="section__title text-center">Latest Blogs</h2>
      </Col>
      <div class="d-flex" style={{ padding: "20px" }}>
        {blogData.map((item) => (
          <BlogItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

const BlogItem = ({ item }) => {
  const { imgUrl, title, author, date, description, time } = item;
  return (
    <Col lg="4" md="6" sm="6" className="mb-5" style={{ padding: "12px" }}>
      <div className="blog__item">
        <img src={imgUrl} alt="" className="w-100" />
        <div className="blog__info p-3">
          <Link to={`/blogs/${title}`} className="blog__title">
            {title}
          </Link>
          <p className="section__description mt-3">
            {description.length > 100
              ? description.substr(0, 100)
              : description}
          </p>

          <Link to={`/blogs/${title}`} className="read__more text-start">
            Read More
          </Link>

          <div className="blog__time pt-3 mt-3 d-flex align-items-center justify-content-between">
            <span className="blog__author">
              <i class="bi bi-person"></i> {author}
            </span>

            <div className=" d-flex align-items-center gap-3">
              <span className=" d-flex align-items-center gap-1">
                <i class="bi bi-calendar"></i> {date}
              </span>

              <span className=" d-flex align-items-center gap-1">
                <i class="bi bi-clock"></i> {time}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Landing;
