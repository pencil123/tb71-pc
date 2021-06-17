import React, { Component } from "react";
import { Row, Col, Image } from "antd";
import { Input, Form, Select } from "antd";
import { Button } from 'antd';

import flashLogo from "@/assets/logoflash.gif";
import ewm from "@/assets/erweima.png";
import "./search.less";
const { Option } = Select;

export class SearchTab extends Component {
  render() {
    return (
      <Row style={{ borderRadius: "18px 18px 0px 0px", background: "white" }}>
        <Col span={6} style={{ paddingLeft: 20 }}>
          <Image src={flashLogo} width={160} height={120}></Image>
        </Col>
        <Col span={12} style={{ display: "flex" }}>
          <div className="search_center" >
            <Form layout="inline" >
              <Form.Item >
                <Select defaultValue="1" size="large" bordered={false} style={{height:45}}>
                  <Option value="1" style={{height:45}}>宝贝</Option>
                  <Option value="2">天猫</Option>
                  <Option value="3">店铺</Option>
                </Select>
              </Form.Item>
              <Form.Item style={{marginLeft:"0px"}}><div style={{height:45,border:"1px solid #d0d0d0",display:"inline-block"}}></div></Form.Item>
              <Form.Item style={{flexGrow:1}}>
                <Input placeholder="Jenkins2权威指南" size="large" bordered={false} style={{height:44}} />
              </Form.Item>
              <Form.Item>
                  <Button type="primary" style={{background:"#ff8651",borderStyle:"none",marginTop:1}} shape="round"  size="large">搜索</Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
        <Col span={6} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Image src={ewm} width={64} height={64}></Image>
        </Col>
      </Row>
    );
  }
}

export default SearchTab;
