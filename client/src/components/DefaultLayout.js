import React from "react";
import { Menu, Dropdown, Button, Row, Col } from "antd";
import { Link } from "react-router-dom";

function DefaultLayout(props) {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const menu = (
    <Menu>
      <Menu.Item>
        <a href="/">Home</a>
      </Menu.Item>
      <Menu.Item>
        <a href="/userbookings">Bookings</a>
      </Menu.Item>
      {/* <Menu.Item>
        <a href="/admin">Admin</a>
      </Menu.Item> */}
      <Menu.Item
        onClick={() => {
          sessionStorage.removeItem("user");
          window.location.href = "/login";
        }}
      >
        <li style={{ color: "#fed701" }}>Logout</li>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <div className="header">
        <Row gutter={16} justify="center">
          <Col lg={22} sm={24} xs={24}>
            
          </Col>
        </Row>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
}

export default DefaultLayout;
