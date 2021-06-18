import React, { Component } from "react";
import { Row, Col } from "antd";
import rightImg from "@/assets/right.png";
import leftImg from "@/assets/left.png";

import SearchTab from "./Search";
import Nav from "./Nav";
import Flash from "./Flash";

export class Home extends Component {
  render() {
    return (
      <>
        <Row justify="center">
          <Col
            xxl={4}
            xl={3}
            style={{
              backgroundImage: `url(${leftImg})`,
              backgroundPosition: "top right",
              backgroundRepeat: "no-repeat",
            }}
          ></Col>
          <Col xxl={15} xl={18}>
            <div>
              <SearchTab />
              <Nav />
              <Flash />
            </div>
          </Col>
          <Col
            xxl={4}
            xl={3}
            style={{ background: `url(${rightImg}) no-repeat` }}
          ></Col>
        </Row>
      </>
    );
  }
}

export default Home;
