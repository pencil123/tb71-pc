import React, { Component } from 'react'
import { Layout,Row,Col } from "antd";
const {Footer } = Layout;
export class index extends Component {
    render() {
        return (
            <Footer>
                <Row justify="center">
                    <Col xxl={15} xl={19} style={{textAlign:"center"}}>
                        <a href="https://beian.miit.gov.cn/">鲁ICP备18001334号-5</a>
                    </Col>
                </Row>
            
            </Footer>
        )
    }
}

export default index
