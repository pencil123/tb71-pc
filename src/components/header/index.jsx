import React, { Component } from "react";
import { Layout, Row, Col, Image } from "antd";
const { Header } = Layout;
const imgList = [
  "https://img.alicdn.com/imgextra/i2/O1CN01R0zbQB1rI3QA5zD7E_!!6000000005607-2-tps-209-75.png",
  "https://img.alicdn.com/imgextra/i2/O1CN01x7kTNX1HuEGhj7rRo_!!6000000000817-2-tps-209-75.png",
  "https://img.alicdn.com/imgextra/i2/O1CN01jOXJT41YY6bY45n4v_!!6000000003070-2-tps-209-75.png",
  "https://img.alicdn.com/imgextra/i3/O1CN01nrmR3z217eaNzY1m5_!!6000000006938-2-tps-209-75.png",
  "https://img.alicdn.com/imgextra/i3/O1CN01VED6ho1xql80bF4px_!!6000000006495-2-tps-209-75.png",
];

export class Index extends Component {
  render() {
    return (
      <Header style={headerContent}>
        <Row justify="center" style={{ height: 35 }}>
          <Col xxl={15} xl={19}>
            <Row justify="center">
              <Col span={10}>中国大陆|用户账号|手机逛淘宝</Col>
              <Col span={14}>
                我的淘宝|购物车|收藏夹|商品分类|免费开店|千牛卖家中心|联系客服|网站导航
              </Col>
            </Row>
          </Col>
        </Row>
        <Row justify="center" style={{ background: "#ffaa8c", height: 91 }}>
          <Col xxl={15} xl={19}>
            <Row justify="center" gutter={16} style={{ padding: "10px" }}>
              <Col span={2}>
                <Image src="https://img.alicdn.com/imgextra/i1/O1CN01spsxsM1thMXZ31bBd_!!6000000005933-2-tps-90-80.png" />
              </Col>
              <Col span={22}>
                  <div style={{display:"flex",justifyContent:"center"}}>
                  {imgList.map((img) => {
                    return (
                      <div style={{padding:"0px 5px"}}>
                        <Image src={img} />
                      </div>
                    );
                  })}
                  </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
    );
  }
}

const headerContent = {
  height: 126,
  padding: 0,
  lineHeight: "35px",
};

export default Index;
