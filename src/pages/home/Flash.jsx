import React, { Component } from "react";
import { Row, Col,Carousel,Image,Card } from "antd";
import "./flash.less";
import Tm from "@/assets/tianmao.png";
import center_left_top from "@/assets/flash_center_left_top.png";
import center_left_bottom from "@/assets/flash_center_left_bottom.jpg";

const { Meta } = Card;
const contentStyle1 = {
  height: 280,
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  borderRadius:10,
};
const contentImgStyle1 = {
    width: "100%",
    borderRadius:10,
}

const contentStyle2 = {
  height: 190,
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  borderRadius:10,
};

export class Flash extends Component {
onChange =() =>{
    console.log("123");
}
  render() {
    return (
      <Row style={{ background: "white" }}>
        <Col span={18} >
          <Row>
            <Col span={5}>
              <ul className="flash_left">
                <li>
                  女装 / 内衣 / 家居<i>&gt;</i>
                </li>
                <li>
                  女鞋 / 男鞋 / 箱包<i>&gt;</i>
                </li>
                <li>
                  母婴 / 童装 / 玩具<i>&gt;</i>
                </li>
                <li>
                  男装 / 运动户外<i>&gt;</i>
                </li>
                <li>
                  美妆 / 彩妆 / 个护<i>&gt;</i>
                </li>
                <li>
                  手机 / 数码 / 企业<i>&gt;</i>
                </li>
                <li>
                  大家电 / 生活电器<i>&gt;</i>
                </li>
                <li>
                  零食 / 生鲜 / 茶酒<i>&gt;</i>
                </li>
                <li>
                  厨具 / 收纳 / 清洁<i>&gt;</i>
                </li>
                <li>
                  家纺 / 家饰 / 鲜花<i>&gt;</i>
                </li>
                <li>
                  图书音像 / 文具<i>&gt;</i>
                </li>
                <li>
                  医药保健 / 进口<i>&gt;</i>
                </li>
                <li>
                  汽车 / 二手车 / 用品<i>&gt;</i>
                </li>
                <li>
                  房产 / 装修家具 / 建材<i>&gt;</i>
                </li>
                <li>
                  手表 / 眼镜 / 珠宝饰品<i>&gt;</i>
                </li>
              </ul>
            </Col>
            <Col span={14} className="flash_center_left">
                <Carousel afterChange={this.onChange}>
                  <div>
                    <h3 style={contentStyle1}>
                        <img alt="1" style={contentImgStyle1} src="https://aecpm.alicdn.com/imgextra/i3/4130776110/O1CN01IJqoJ21v0QeA4WMp8_!!4130776110-0-alimamazszw.jpg"></img>
                    </h3>
                  </div>
                  <div>
                    <h3 style={contentStyle1}>
                         <img alt="1" style={contentImgStyle1} src="https://aecpm.alicdn.com/imgextra/i1/1740894788/O1CN011w7LGt1lEx2o6QX1d_!!1740894788-0-alimamazszw.jpg"></img>
                    </h3>
                  </div>
                  <div>
                    <h3 style={contentStyle1}>
                         <img alt="1" style={contentImgStyle1} src="https://img.alicdn.com/imgextra/i4/143584903/O1CN01quRzdz1m5cXM0oX3V_!!143584903-0-alimamazszw.jpg"></img>
                    </h3>
                  </div>
                  <div>
                    <h3 style={contentStyle1}>
                         <img alt="1" style={contentImgStyle1} src="https://img.alicdn.com/imgextra/i3/6000000001461/O1CN01JqxoQk1MfBL5N9kyg_!!6000000001461-0-octopus.jpg"></img>
                    </h3>
                  </div>
                </Carousel>
              <div style={{height:22,background:"white"}}>
                    <span style={{backgroundImage:`url(${Tm})`,backgroundRepeat:"none"}}></span>
                    <em>理想生活上天猫</em>
              </div>
              <Carousel afterChange={this.onChange}>
                  <div>
                    <h3 style={contentStyle2}>
                        1
                    </h3>
                  </div>
                  <div>
                    <h3 style={contentStyle2}>2</h3>
                  </div>
                  <div>
                    <h3 style={contentStyle2}>3</h3>
                  </div>
                  <div>
                    <h3 style={contentStyle2}>4</h3>
                  </div>
                </Carousel>
            </Col>
            <Col span={5} className="flash_center_left">
                <Image style={{width:"100%",height:280,borderRadius:10}} src={center_left_top}></Image>
                <div style={{height:22,background:"white"}}>
                    <em>今日热卖</em>
              </div>
              <Image style={{width:"100%",height:190,borderRadius:10}} src={center_left_bottom}></Image>
            </Col>
          </Row>
        </Col>
        <Col span={6} className="flash_right">
            <div>
                <img alt="img" src="//wwc.alicdn.com/avatar/getAvatar.do?userNick=&width=50&height=50&type=sns&_input_charset=UTF-8" className="ant-image-img" />
                <p style={{padding:"0 auto"}}>Hi! 你好</p>
            </div>
            <div>
                
            </div>
        </Col>
      </Row>
    );
  }
}

export default Flash;
