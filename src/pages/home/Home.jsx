import React, { Component } from "react";
import { Layout } from "antd";
import { TimePicker } from 'antd';
import MyFooter from "../../components/footer";

const { Header, Footer, Content } = Layout;

export class Home extends Component {


  render() {
    return (
      <>
        <Layout>
          <Header>Header</Header>
          <Content>
              
    <TimePicker use12Hours  />
    <TimePicker use12Hours format="h:mm:ss A"  style={{ width: 140 }} />
    <TimePicker use12Hours format="h:mm a"  />
          </Content>
          <Footer><MyFooter /></Footer>
        </Layout>
      </>
    );
  }
}

export default Home;
