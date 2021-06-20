import React, { Component } from "react";
import { Row, Col,Carousel,Image,Card } from "antd";
import "./flash.less";
import Tm from "@/assets/tianmao.png";
import together from "@/assets/flash_right_together.jpg";
import center_left_top from "@/assets/flash_center_left_top.png";
import center_left_bottom from "@/assets/flash_center_left_bottom.jpg";
import dingding from "@/assets/dingding.webp";
import taobao from "@/assets/taobao.webp";
import taoxiaopu from "@/assets/taoxiaopu.webp";
import tianmao from "@/assets/tianmao.webp";
import zhifubao from "@/assets/zhifubao.webp";

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
        <Col span={6}>
            <div className="flash_right">
                <img alt="img" src="//wwc.alicdn.com/avatar/getAvatar.do?userNick=&width=50&height=50&type=sns&_input_charset=UTF-8" className="ant-image-img" />
                <p style={{padding:"0 auto",fontWeight:400,textAlign:"center",marginBottom:0}}>Hi! 你好</p>
                <div style={{padding:"0 auto"}}>
                    <span style={{marginRight:5}}><i></i><p>领淘金币抵钱</p></span>
                    <span><i></i><p>会员俱乐部</p></span>
                </div>
            </div>
            <div className="member_ft" style={{height:40,textAlign:"center"}}>
                <span>登录</span>
                <span>注册</span>
                <span>开店</span>
            </div>
            <div>
                <img style={{width:300}} src={together} alt="together"></img>
            </div>
            <div className="web_notice">
                <div>
                    <span>公告</span>
                    <span>规则</span>
                    <span>安全</span>
                    <span>公益</span>
                    <span>千牛</span>
                </div>
                <div>
                    <span>千牛头条</span>
                    <span>新手开店</span>
                </div>
            </div>
            <div className="conve">
                <ul>
                    <li>
                        <i style={{backgroundPosition:"0 0"}}></i>
                        <p>充话费</p>
                    </li>
                    <li>
                        <i style={{backgroundPosition:"0 -87px"}}></i>
                        <p>旅行</p>
                    </li>
                    <li>
                        <i style={{backgroundPosition:"0 -44px"}}></i>
                        <p>车险</p>
                    </li>
                    <li>
                        <i style={{backgroundPosition:"0 -132px"}}></i>
                        <p>游戏</p>
                    </li>
                    <li>
                        <i style={{backgroundPosition:"0 -176px"}}></i>
                        <p>彩票</p>
                    </li>
                    <li>
                        <i style={{backgroundPosition:"0 -220px"}}></i>
                        <p>电影</p>
                    </li>
                    <li>
                        <i style={{backgroundPosition:"0 -264px"}}></i>
                        <p>酒店</p>
                    </li>
                    <li>
                        <i style={{backgroundPosition:"0 -308px"}}></i>
                        <p>理财</p>
                    </li>
                </ul>
            </div>
            <div className="ali_app">
                <div>
                    <span>阿里APP</span>
                    <a href="aliyun">更多&gt;</a>
                </div>
                <div>
                    <ul>
                        <li><img src={taobao} alt="1"></img></li>
                        <li><img src={tianmao} alt="2"></img></li>
                        <li><img src={zhifubao} alt="3"></img></li>
                        <li><img src={dingding} alt="4"></img></li>
                        <li><img src={taoxiaopu} alt="5"></img></li>
                    </ul>
                </div>
            </div>
        </Col>
      </Row>
    );
  }
}

export default Flash;
