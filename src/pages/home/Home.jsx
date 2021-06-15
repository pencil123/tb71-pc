import React, { Component } from "react";
import { Row, Col, Image } from "antd";
const imgList = [
  "https://img.alicdn.com/imgextra/i2/O1CN01R0zbQB1rI3QA5zD7E_!!6000000005607-2-tps-209-75.png",
  "https://img.alicdn.com/imgextra/i2/O1CN01x7kTNX1HuEGhj7rRo_!!6000000000817-2-tps-209-75.png",
  "https://img.alicdn.com/imgextra/i2/O1CN01jOXJT41YY6bY45n4v_!!6000000003070-2-tps-209-75.png",
  "https://img.alicdn.com/imgextra/i3/O1CN01nrmR3z217eaNzY1m5_!!6000000006938-2-tps-209-75.png",
  "https://img.alicdn.com/imgextra/i3/O1CN01VED6ho1xql80bF4px_!!6000000006495-2-tps-209-75.png",
];

export class Home extends Component {
  render() {
    return (
      <>
        <Row justify="center">
          <Col lg={16} md={20} sm={23} xs={22} style={{ background: "white" }}>
            <Row justify="center" style={{ background: "blue" }}>
              <Col span={2} offset={1}>
                <Image src="https://img.alicdn.com/imgextra/i1/O1CN01spsxsM1thMXZ31bBd_!!6000000005933-2-tps-90-80.png" />
              </Col>
              {imgList.map((img) => {
                return (
                  <Col span={4}>
                    <Image src={img} />
                  </Col>
                );
              })}
            </Row>

            <Row style={{ background: "green" }}>
              <Col span={6}>浮动的Logo</Col>
              <Col span={12}>Search 搜索框</Col>
              <Col span={6}>二维码</Col>
            </Row>

            <Row style={{ background: "pink" }}>
              <Col span={6}>主题市场</Col>
              <Col span={18}>
                天猫 聚划算 天猫超市|司法拍卖 飞猪旅行 天天特卖 淘小铺|造点新货
                苏宁易购 淘宝心选 智能生活
              </Col>
            </Row>

            <Row style={{ background: "green" }}>
              <Col span={6}>
                女装 / 内衣 / 家居
                <br />
                女鞋 / 男鞋 / 箱包
                <br />
                母婴 / 童装 / 玩具
                <br />
                男装 / 运动户外
                <br />
                美妆 / 彩妆 / 个护
                <br />
                手机 / 数码 / 企业
                <br />
                大家电 / 生活电器
                <br />
                零食 / 生鲜 / 茶酒
                <br />
                厨具 / 收纳 / 清洁
                <br />
                家纺 / 家饰 / 鲜花
                <br />
                图书音像 / 文具
                <br />
                医药保健 / 进口
                <br />
                汽车 / 二手车 / 用品
                <br />
                房产 / 装修家具 / 建材
                <br />
                手表 / 眼镜 / 珠宝饰品
              </Col>
              <Col span={12}>Search 搜索框</Col>
              <Col span={6}>二维码</Col>
            </Row>
          </Col>
        </Row>
      </>
    );
  }
}

export default Home;
