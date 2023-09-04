import React, { useRef } from "react";
import { Menu, Dropdown, Button } from "antd";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../styles/header.css";

const navLinks = [
  {
    path: "/landing",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/userbookings",
    display: "Bookings",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

function Header() {
  const menuRef = useRef(null);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");
  const menu = (
    <Menu>
      <Menu.Item>
        <a href="/">Home</a>
      </Menu.Item>
      <Menu.Item>
        <a href="/userbookings">Bookings</a>
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          sessionStorage.removeItem("user");
          window.location.href = "/login";
        }}
      >
        <li style={{ color: "red" }}>
          <i class="bi bi-power"></i>&nbsp;Logout
        </li>
      </Menu.Item>
    </Menu>
  );
  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <a
                  href="https://wa.me/+919729080598"
                  target="blank"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "left",
                    gap: "10px",
                  }}
                >
                  <span style={{ marginRight: "10px" }}>Need Help?</span>
                  <span className="header__top__help">
                    <i class="bi bi-whatsapp"></i> +91-9729080598
                  </span>
                </a>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                {user == null ? (
                  <Link
                    to="/login"
                    className=" d-flex align-items-center gap-1 text-white"
                  >
                    <i class="bi bi-arrow-right-circle"></i> Login
                  </Link>
                ) : (
                  <Dropdown overlay={menu} placement="bottomCenter">
                    <Button>{user.username}</Button>
                  </Dropdown>
                )}
                {user == null ? (
                  <Link
                    to="/register"
                    className=" d-flex align-items-center gap-1 text-white"
                  >
                    <i class="bi bi-person" style={{ color: "white" }}></i>{" "}
                    Register
                  </Link>
                ) : (
                  <></>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo" style={{ marginTop: "5px" }}>
                <h1>
                  <Link
                    to="/landing"
                    className=" d-flex align-items-center gap-2"
                  >
                    <i
                      class="bi bi-car-front-fill"
                      style={{
                        fontSize: "35px",
                        margin: "5px",
                        color: "#000D6B",
                      }}
                    ></i>
                    {/* <img
                      src="../../public/logo.jpg"
                    /> */}
                    <span style={{ color: "#000D6B", textAlign: "left" }}>
                      Kuber
                      <br />
                      Cars
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div
                className="header__location d-flex align-items-center gap-2"
                style={{ marginTop: "5px" }}
              >
                <span>
                  <i
                    class="bi bi-globe-americas"
                    style={{ fontSize: "30px", margin: "5px" }}
                  ></i>
                </span>
                <div
                  className="header__location-content"
                  style={{ textAlign: "left" }}
                >
                  {/* <h4>Pinjore</h4> */}
                  <h6 style={{ color: "#000D6B", marginTop: 7.5 }}>India</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div
                className="header__location d-flex align-items-center gap-3"
                style={{ marginTop: "5px" }}
              >
                <i
                  class="bi bi-clock"
                  style={{ fontSize: "30px", fontWeight: "bold" }}
                ></i>
                <div
                  className="header__location-content"
                  style={{ textAlign: "left" }}
                >
                  <h4>Sunday to Friday</h4>
                  <h6 style={{ color: "#000D6B", fontSize: "16px" }}>
                    10AM - 7PM
                  </h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end "
            >
              <button className="header__btn btn ">
                <Link to="/contact" className="text-white">
                  <i class="ri-phone-line"></i> Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu" style={{ fontSize: 15 }}>
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search"
                  style={{ fontSize: "10px", color: "white", width: "250px" }}
                />
                <span>
                  <i
                    class="bi bi-search"
                    style={{ fontSize: "15px", color: "white" }}
                  ></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}

export default Header;
