import React, { Component } from "react";
import { Row, Col } from "antd";
import rightImg from "@/assets/right.png";
import leftImg from "@/assets/left.png";

export class Home extends Component {
  render() {
    return (
      <>
        <Row justify="center">
          <Col xxl={4} xl={3} style={{
              backgroundImage: `url(${leftImg})`,
              backgroundPosition: "top right",
              backgroundRepeat: "no-repeat",
            }}
          >
          </Col>
          <Col xxl={16} xl={18} style={{ background: "white"}}>
            <Row>
              <Col span={6}>浮动的Logo</Col>
              <Col span={12}>Search 搜索框</Col>
              <Col span={6}>二维码</Col>
            </Row>
            <Row>
              <Col span={6}>主题市场</Col>
              <Col span={18}>
                天猫 聚划算 天猫超市|司法拍卖 飞猪旅行 天天特卖 淘小铺|造点新货
                苏宁易购 淘宝心选 智能生活
              </Col>
            </Row>

            <Row>
              <Col span={6}>
                女装 / 内衣 / 家居
                <br />
                女鞋 / 男鞋 / 箱包
                <br />
                母婴 / 童装 / 玩具
                <br />
                男装 / 运动户外
                <br />
                美妆 / 彩妆 / 个护
                <br />
                手机 / 数码 / 企业
                <br />
                大家电 / 生活电器
                <br />
                零食 / 生鲜 / 茶酒
                <br />
                厨具 / 收纳 / 清洁
                <br />
                家纺 / 家饰 / 鲜花
                <br />
                图书音像 / 文具
                <br />
                医药保健 / 进口
                <br />
                汽车 / 二手车 / 用品
                <br />
                房产 / 装修家具 / 建材
                <br />
                手表 / 眼镜 / 珠宝饰品 女装 / 内衣 / 家居
                <br />
                女鞋 / 男鞋 / 箱包
                <br />
                母婴 / 童装 / 玩具
                <br />
                男装 / 运动户外
                <br />
                美妆 / 彩妆 / 个护
                <br />
                手机 / 数码 / 企业
                <br />
                大家电 / 生活电器
                <br />
                零食 / 生鲜 / 茶酒
                <br />
                厨具 / 收纳 / 清洁
                <br />
                家纺 / 家饰 / 鲜花
                <br />
                图书音像 / 文具
                <br />
                医药保健 / 进口
                <br />
                汽车 / 二手车 / 用品
                <br />
                房产 / 装修家具 / 建材
                <br />
                手表 / 眼镜 / 珠宝饰品 女装 / 内衣 / 家居
                <br />
                女鞋 / 男鞋 / 箱包
                <br />
                母婴 / 童装 / 玩具
                <br />
                男装 / 运动户外
                <br />
                美妆 / 彩妆 / 个护
                <br />
                手机 / 数码 / 企业
                <br />
                大家电 / 生活电器
                <br />
                零食 / 生鲜 / 茶酒
                <br />
                厨具 / 收纳 / 清洁
                <br />
                家纺 / 家饰 / 鲜花
                <br />
                图书音像 / 文具
                <br />
                医药保健 / 进口
                <br />
                汽车 / 二手车 / 用品
                <br />
                房产 / 装修家具 / 建材
                <br />
                手表 / 眼镜 / 珠宝饰品 女装 / 内衣 / 家居
                <br />
                女鞋 / 男鞋 / 箱包
                <br />
                母婴 / 童装 / 玩具
                <br />
                男装 / 运动户外
                <br />
                美妆 / 彩妆 / 个护
                <br />
                手机 / 数码 / 企业
                <br />
                大家电 / 生活电器
                <br />
                零食 / 生鲜 / 茶酒
                <br />
                厨具 / 收纳 / 清洁
                <br />
                家纺 / 家饰 / 鲜花
                <br />
                图书音像 / 文具
                <br />
                医药保健 / 进口
                <br />
                汽车 / 二手车 / 用品
                <br />
                房产 / 装修家具 / 建材
                <br />
                手表 / 眼镜 / 珠宝饰品
              </Col>
              <Col span={12}>Search 搜索框</Col>
              <Col span={6}>二维码</Col>
            </Row>
          </Col>
          <Col xxl={4} xl={3} style={{ background: `url(${rightImg}) no-repeat` }} >
          </Col>
        </Row>
      </>
    );
  }
}

export default Home;
