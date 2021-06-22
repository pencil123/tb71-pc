import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import "./footer.less";
const { Footer } = Layout;
export class index extends Component {
  render() {
    return (
      <Footer style={{ paddingTop: 12 }}>
        <Row justify="center">
          <Col xxl={15} xl={19} style={{ textAlign: "center" }}>
            <div className="tb-footer-hd">
              <span>阿里巴巴集团</span>
              <b>|</b>
              <span>淘宝网</span>
              <b>|</b>
              <span>天猫</span>
              <b>|</b>
              <span>聚划算</span>
              <b>|</b>
              <span>全球速卖通</span>
              <b>|</b>
              <span>阿里巴巴国际交易市场</span>
              <b>|</b>
              <span>1688</span>
              <b>|</b>
              <span>阿里妈妈</span>
              <b>|</b>
              <span>飞猪</span>
              <b>|</b>
              <span>淘小铺</span>
              <b>|</b>
              <span>阿里云计算</span>
              <b>|</b>
              <span>AliOS</span>
              <b>|</b>
              <span>阿里通信</span>
              <b>|</b>
              <span>一淘</span>
              <b>|</b>
              <span>万网</span>
              <b>|</b>
              <span>高德</span>
              <b>|</b>
              <span>UC</span>
              <b>|</b>
              <span>友盟</span>
              <b>|</b>
              <span>阿里安全</span>
              <b>|</b>
              <span>大麦网</span>
              <b>|</b>
              <span>钉钉</span>
              <b>|</b>
              <span>支付宝</span>
              <b>|</b>
              <span>优酷</span>
              <b>|</b>
              <span>土豆</span>
              <b>|</b>
              <span>阿里健康</span>
              <b>|</b>
              <span>阿里影业</span>
              <b>|</b>
              <span>阿里体育</span>
              <b>|</b>
              <span>网商银行</span>
            </div>
            <div className="tb-footer-bd">
              <p>
                <span>关于淘宝</span>
                <span>合作伙伴</span>
                <span>营销中心</span>
                <span>廉正举报</span>
                <span>联系客服</span>
                <span>开放平台</span>
                <span>诚征英才</span>
                <span>联系我们</span>
                <span>网站地图</span>
                <span>隐私权政策</span>
                <span>法律声明</span>
                <span>知识产权</span>
                <b>|</b>
                <i> © 2003-现在 Taobao.com 版权所有 </i>
              </p>
              <p>
                <span>增值电信业务经营许可证：浙B2-20080224</span>
                <b>|</b>
                <span>
                  增值电信业务经营许可证（跨地区）：
                  B2-20150210|浙网文（2019）1033-086号
                </span>
                <b>|</b>
                <span>
                  浙江省网络食品销售第三方平台提供者备案：浙网食A33010001
                </span>
              </p>
              <p>
                <span>互联网药品信息服务资格证书（浙）-经营性-2018-0010</span>
                <b>|</b>
                <span>短消息类服务接入代码使用证书：号【2016】00154-A01</span>
                <b>|</b>
                <span>信息网络传播视听许可证：1109364号</span>
                <b>|</b>
                <span>
                  出版物网络交易平台服务经营备案号：新出发浙备字第002号
                </span>
              </p>
              <p>
                <span>某某某某某某 33010002000078号</span>
                <b>|</b>
                <span>
                  <a href="https://beian.miit.gov.cn/">鲁ICP备18001334号-5</a>
                </span>
                <b>|</b>
                <span>广播电视节目制作经营许可证（浙）字</span>
                <b>|</b>
                <span>市场名称登记证</span>
              </p>
            </div>
          </Col>
        </Row>
      </Footer>
    );
  }
}

export default index;
