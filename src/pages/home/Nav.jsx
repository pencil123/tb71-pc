import React, { Component } from "react";
import { Row, Col } from "antd";

export class Nav extends Component {
  render() {
    return (
      <Row>
        <Col span={6}>主题市场</Col>
        <Col span={18}>
          天猫 聚划算 天猫超市|司法拍卖 飞猪旅行 天天特卖 淘小铺|造点新货
          苏宁易购 淘宝心选 智能生活
        </Col>
      </Row>
    );
  }
}

export default Nav;
