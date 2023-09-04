import React from "react";
import "../../styles/our-member.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

const OUR__MEMBERS = [
  {
    name: "Elon Musk",
    experience: "15 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl:
      "https://cdn.britannica.com/05/236505-050-17B6E34A/Elon-Musk-2022.jpg",
  },

  {
    name: "Bill Gates",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl:
      "https://api.time.com/wp-content/uploads/2018/09/bill-gates-africa.jpg?quality=85&w=1600",
  },

  {
    name: "Steve Jobs",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl:
      "https://cvdl.ben.edu/wp-content/uploads/2015/11/secret_of_steve_feature3-1130x480@2x.jpg",
  },

  {
    name: "Mark Zuckerberg",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl:
      "data:image/jpeg;base64,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",
  },
];

const OurMembers = () => {
  return (
    <>
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single__member">
            <div className="single__member-img">
              <img
                style={{ width: "320px", height: "180px" }}
                src={item.imgUrl}
                alt="memberImage"
                className="w-100"
              />

              <div className="single__member-social">
                <Link to={item.fbUrl}>
                  <i class="bi bi-facebook"></i>
                </Link>
                <Link to={item.twitUrl}>
                  <i class="bi bi-twitter"></i>
                </Link>

                <Link to={item.linkedinUrl}>
                  <i class="bi bi-linkedin"></i>
                </Link>

                <Link to={item.instUrl}>
                  <i class="bi bi-instagram"></i>
                </Link>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center" style={{color: "#7c8a97",}}>
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;
