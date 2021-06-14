import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import { Layout} from "antd";

import LoadableComponent from "@/utils/loadableComponent";
import MyHeader from "@/components/header";
import MyFooter from "@/components/footer";
const { Content } = Layout;
const MyHome = LoadableComponent(import("@/pages/home/Home"));

export class index extends Component {
  render() {
    return (
      <HashRouter>
        <Layout>
          <MyHeader />
          <Content>
            <Switch>
              <Route path="/" component={MyHome} />
            </Switch>
          </Content>
          <MyFooter />
        </Layout>
      </HashRouter>
    );
  }
}

export default index;
