import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
const { Header } = Layout;
const style = { background: "#0092ff" };
export class Index extends Component {
  render() {
    return (
      <Header style={headerContent}>
        <Row justify="center">
          <Col lg={16} md={20} sm={23} xs={22} style={{ background: "white" }}>
            <Row justify="center">
              <Col style={style} span={10}>
                中国大陆|用户账号|手机逛淘宝
              </Col>
              <Col style={style} span={14}>
                我的淘宝|购物车|收藏夹|商品分类|免费开店|千牛卖家中心|联系客服|网站导航
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
    );
  }
}

const headerContent = {
  padding: 0,
  height: 35,
  lineHeight: "35px",
  borderBottom: "1px solid #fff",
};

export default Index;
