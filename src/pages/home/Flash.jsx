import React, { Component } from "react";
import { Row, Col } from "antd";
import "./flash.less";

export class Flash extends Component {
  render() {
    return (
      <Row style={{background: "white" }}>
        <Col span={5} style={{background:"#f5f5f5"}}>
            <ul className="flash_left">
                <li>女装 / 内衣 / 家居
                    <i>&gt;</i>
                </li>
                <li>女鞋 / 男鞋 / 箱包
                    <i>&gt;</i>
                </li>
                <li>母婴 / 童装 / 玩具
                    <i>&gt;</i>
                </li>
                <li>男装 / 运动户外
                    <i>&gt;</i>
                </li>
                <li>美妆 / 彩妆 / 个护
                    <i>&gt;</i>
                </li>
                <li>手机 / 数码 / 企业
                    <i>&gt;</i>
                </li>
                <li>大家电 / 生活电器
                    <i>&gt;</i>
                </li>
                <li>零食 / 生鲜 / 茶酒
                    <i>&gt;</i>
                </li>
                <li>厨具 / 收纳 / 清洁
                    <i>&gt;</i>
                </li>
                <li>家纺 / 家饰 / 鲜花
                    <i>&gt;</i>
                </li>
                <li>图书音像 / 文具
                    <i>&gt;</i>
                </li>
                <li>医药保健 / 进口
                    <i>&gt;</i>
                </li>
                <li>汽车 / 二手车 / 用品
                    <i>&gt;</i>
                </li>
                <li>房产 / 装修家具 / 建材
                    <i>&gt;</i>
                </li>
                <li>手表 / 眼镜 / 珠宝饰品
                    <i>&gt;</i>
                </li>
            </ul>
        </Col>
        <Col span={12}>Search 搜索框</Col>
        <Col span={7}>二维码</Col>
      </Row>
    );
  }
}

export default Flash;
