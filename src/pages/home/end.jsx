import React, { Component } from 'react'
import { Row, Col} from "antd";
import "./end.less";

export class End extends Component {
    render() {
        return (
            <Row className="end">
                <Col span={24}>
                    <p>END</p>
                </Col>
            </Row>
        )
    }
}

export default End
