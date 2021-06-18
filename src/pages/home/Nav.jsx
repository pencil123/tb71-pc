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
        <Col span={5} style={{marginLeft:-33,marginRight:-20}}>
          <span style={{ color: "#ff5000",fontWeight:700,padding:"0 9px"}}>天猫</span>
          <span style={{ color: "#FF0036",fontWeight:700,padding:"0 9px"}}>聚划算</span>
          <span style={{ color: "#33c900",fontWeight:700,padding:"0 9px"}}>天猫超市</span>
        </Col>
        <Col span={15} style={{textAlign:"left"}}>
            <i>|</i>
          <span>司法拍卖</span>
          <span>飞猪旅行</span>
          <span>天天特卖</span>
          <span>淘小铺</span>
          <i>|</i>
          <span>造点新货</span>
          <span>苏宁易购</span>
          <span>淘宝心选</span>
          <span>智能生活</span>
        </Col>
      </Row>
    );
  }
}

export default Nav;
