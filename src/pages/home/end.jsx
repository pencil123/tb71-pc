import React, { Component } from 'react'
import { Row, Col} from "antd";
import "./end.less";

export class End extends Component {
    render() {
        return (
            <>
            <Row className="end">
                <Col span={24}>
                    <p>END</p>
                </Col>
            </Row>
            <Row style={{marginBottom:30}}>
                <Col span={6} className="end-tab" style={{borderBottomLeftRadius:18}}>
                    <div>
                        <i className="iconfont icon-baozhang"></i>
                        <p>消费者保障</p>
                    </div>
                    <div>
                        <span>保障范围</span>
                        <span>退货退款流程</span>
                        <span>服务中心</span>
                        <span>更多特色服务</span>
                    </div>
                </Col>
                <Col span={6} className="end-tab">
                    <div>
                        <i className="iconfont icon-wenhaocopy"></i>
                        <p>新手上路</p>
                    </div>
                    <div>
                        <span>新手专区</span>
                        <span>消费警示</span>
                        <span>交易安全</span>
                        <span>24小时在线帮助</span>
                        <span>免费开店</span>
                    </div>
                </Col>
                <Col span={6} className="end-tab">
                    <div>
                        <i className="iconfont icon-fukuan"></i>
                        <p>付款方式</p>
                    </div>
                    <div>
                        <span>快捷支付</span>
                        <span>信用卡</span>
                        <span>余额宝</span>
                        <span>蚂蚁花呗</span>
                        <span>货到付款</span>
                    </div>
                </Col>
                <Col span={6} className="end-tab" style={{borderBottomRightRadius:18}}>
                    <div>
                        <i className="iconfont icon-tao"></i>
                        <p>淘宝特色</p>
                    </div>
                    <div>
                        <span>手机淘宝</span>
                        <span>旺旺/旺信</span>
                        <span>大众评审</span>
                    </div>
                </Col>
            </Row>
            </>
        )
    }
}

export default End
