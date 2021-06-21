import React, { Component } from "react";
import { Row, Col } from "antd";

import SearchTab from "./Search";
import Nav from "./Nav";
import Flash from "./Flash";
import Goods from "./goods";
import "./home.less";

export class Home extends Component {
  render() {
    return (
      <>
        <Row justify="center">
          <Col xxl={15} xl={19} className="content_container">
            <div>
              <SearchTab />
              <Nav />
              <Flash />
              <Goods />
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

export default Home;
