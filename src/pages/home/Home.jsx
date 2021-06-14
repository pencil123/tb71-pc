import React, { Component } from "react";
import { Layout } from "antd";
import MyFooter from "@/components/footer";
import MyHeader from "@/components/header"

const { Header, Footer, Content } = Layout;

export class Home extends Component {
  render() {
    return (
      <>
        <Layout>
          <Header><MyHeader/></Header>
          <Content>Content</Content>
          <Footer><MyFooter /></Footer>
        </Layout>
      </>
    );
  }
}

export default Home;
