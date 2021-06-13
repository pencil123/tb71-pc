import React, { Component } from "react";
import { Layout } from "antd";
import MyFooter from "../../components/footer";

const { Header, Footer, Content } = Layout;

export class Home extends Component {
  render() {
    return (
      <>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer><MyFooter /></Footer>
        </Layout>
      </>
    );
  }
}

export default Home;
