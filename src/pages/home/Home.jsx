import React, { Component } from "react";
import { Layout } from "antd";
import { TimePicker } from "antd";

import LoadableComponent from "@/utils/loadableComponent";
const MyFooter = LoadableComponent(import('@/components/footer'));
const MyHeader = LoadableComponent(import('@/components/header'));

const { Content } = Layout;

export class Home extends Component {
  render() {
    return (
      <>
        <Layout>
          <MyHeader />
          <Content>
            <TimePicker use12Hours />
            <TimePicker use12Hours format="h:mm:ss A" style={{ width: 140 }} />
            <TimePicker use12Hours format="h:mm a" />
          </Content>
          <MyFooter />
        </Layout>
      </>
    );
  }
}

export default Home;
