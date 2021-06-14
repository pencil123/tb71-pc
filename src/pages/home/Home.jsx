import React, { Component } from "react";
import { Layout, Row, Col, Image } from "antd";
import { TimePicker } from "antd";

import LoadableComponent from "@/utils/loadableComponent";
const MyFooter = LoadableComponent(import("@/components/footer"));
const MyHeader = LoadableComponent(import("@/components/header"));

const { Content } = Layout;
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
        <Layout>
          <MyHeader />
          <Content>
            <Row justify="center">
              <Col span={16}>
                <Row justify="center" gutter={16}>
                  <Col span={2} offset={1}>
                    <Image
                      src="https://img.alicdn.com/imgextra/i1/O1CN01spsxsM1thMXZ31bBd_!!6000000005933-2-tps-90-80.png"
                    />
                  </Col>
                  {imgList.map((img) => {
                    return (
                      <Col span={4}>
                        <Image src={img} />
                      </Col>
                    );
                  })}
                </Row>
              </Col>
            </Row>
          </Content>
          <MyFooter />
        </Layout>
      </>
    );
  }
}

export default Home;
