import React, { Component } from "react";
import { Layout } from "antd";
const { Header } = Layout;
export class Index extends Component {
  render() {
    return <Header style={headerContent}>Header</Header>;
  }
}

const headerContent = {
    height: 35,
    lineHeight: "35px",
    borderBottom:"5px solid #fff"
}

export default Index;

