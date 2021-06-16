import React, { Component } from "react";
import { Row, Col, Image } from "antd";
import { Input, Form, Select } from "antd";

import flashLogo from "@/assets/logoflash.gif";

const { Search } = Input;
const { Option } = Select;

export class SearchTab extends Component {
  render() {
    return (
      <Row style={{ borderRadius: "18px 18px 0px 0px", background: "white" }}>
        <Col span={6} style={{ marginLeft: 20 }}>
          <Image src={flashLogo} width={160} height={120}></Image>
        </Col>
        <Col span={12}>
          <Form >
            {/* <Input.Group compact>
              <Select defaultValue="1">
                <Option value="1">Between</Option>
                <Option value="2">Except</Option>
              </Select>
              <Search
                placeholder="input search text"
                allowClear
                enterButton="搜索"
                size="large"
              />
            </Input.Group> */}
          </Form>
        </Col>
        <Col span={6}>二维码</Col>
      </Row>
    );
  }
}

export default SearchTab;
