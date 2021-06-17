import React, { Component } from "react";
import { Row, Col } from "antd";
import "./nav.less";

export class Nav extends Component {
  render() {
    return (
      <Row className="my_nav">
        <Col span={4} style={{ color: "#FF6200",fontWeight:700}}>
          主题市场
        </Col>
        <Col span={5}>
          <span style={{ color: "#ff5000",fontWeight:700}}>天猫</span>
          <span style={{ color: "#FF0036",fontWeight:700}}>聚划算</span>
          <span style={{ color: "#33c900",fontWeight:700}}>天猫超市</span>
        </Col>
        <Col span={7} style={{borderLeft:"2px solid black",borderRight:"2px solid black"}}>
          <span>司法拍卖</span>
          <span>飞猪旅行</span>
          <span>天天特卖</span>
          <span>淘小铺</span>
        </Col>
        <Col span={7}>
          <span>造点新货</span>
          <span>苏宁易购</span>
          <span>淘宝心选</span>
          <span>智能生活</span>
        </Col>
        <Col span={1}></Col>
      </Row>
    );
  }
}

export default Nav;
