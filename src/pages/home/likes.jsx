import React, { Component } from "react";
import { Row, Col } from "antd";
import "./likes.less";

export class likes extends Component {
  render() {
    return (
      <Row style={{ backgroundColor: "white" }}>
        <Col span={24}>
          <div className="likes">
            <div>
              <p>猜你喜欢</p>
              <i></i>
            </div>
          </div>

          <Row className="like_imgs">
            <Col span={4}>
              <img
                src="https://img.alicdn.com/bao/uploaded/i3/3893655531/O1CN01jNvs5n1qjFJWXqk9S_!!0-item_pic.jpg_200x200q90.jpg_.webp"
                alt="1"
              />
              <p>夏季2021年新款韩版小熊凹凸卡通奶黄色chic学院少女风短袖女T恤</p>
              <span>¥19.8</span>
              <i>1223人购买</i>
            </Col>
            <Col span={4}>
              <img
                src="https://img.alicdn.com/bao/uploaded/i3/3893655531/O1CN01jNvs5n1qjFJWXqk9S_!!0-item_pic.jpg_200x200q90.jpg_.webp"
                alt="1"
              />
              <p>夏季2021年新款韩版小熊凹凸卡通奶黄色chic学院少女风短袖女T恤</p>
              <span>¥19.8</span>
              <i>1223人购买</i>
            </Col>
            <Col span={4}>
              <img
                src="https://img.alicdn.com/bao/uploaded/i3/3893655531/O1CN01jNvs5n1qjFJWXqk9S_!!0-item_pic.jpg_200x200q90.jpg_.webp"
                alt="1"
              />
              <p>夏季2021年新款韩版小熊凹凸卡通奶黄色chic学院少女风短袖女T恤</p>
              <span>¥19.8</span>
              <i>1223人购买</i>
            </Col>
            <Col span={4}>
              <img
                src="https://img.alicdn.com/bao/uploaded/i3/3893655531/O1CN01jNvs5n1qjFJWXqk9S_!!0-item_pic.jpg_200x200q90.jpg_.webp"
                alt="1"
              />
              <p>夏季2021年新款韩版小熊凹凸卡通奶黄色chic学院少女风短袖女T恤</p>
              <span>¥19.8</span>
              <i>1223人购买</i>
            </Col>
            <Col span={4}>
              <img
                src="https://img.alicdn.com/bao/uploaded/i3/3893655531/O1CN01jNvs5n1qjFJWXqk9S_!!0-item_pic.jpg_200x200q90.jpg_.webp"
                alt="1"
              />
              <p>夏季2021年新款韩版小熊凹凸卡通奶黄色chic学院少女风短袖女T恤</p>
              <span>¥19.8</span>
              <i>1223人购买</i>
            </Col>
            <Col span={4}>
              <img
                src="https://img.alicdn.com/bao/uploaded/i3/3893655531/O1CN01jNvs5n1qjFJWXqk9S_!!0-item_pic.jpg_200x200q90.jpg_.webp"
                alt="1"
              />
              <p>夏季2021年新款韩版小熊凹凸卡通奶黄色chic学院少女风短袖女T恤</p>
              <span>¥19.8</span>
              <i>1223人购买</i>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default likes;
