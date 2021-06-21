import React, { Component } from "react";
import { Row, Col, Carousel, Image, Card } from "antd";

import goods1 from "@/assets/goods1.jpg";
import goods2 from "@/assets/goods2.jpg";
import goods3 from "@/assets/goods3.jpg";
import "./goods.less";

export class Goods extends Component {
  render() {
    return (
      <div className="goods">
        <div style={{backgroundColor:"white"}}>
            <p>有好货</p>
            <i></i>
        </div>
        <ul>
          <li>
              <img src="//img.alicdn.com/tfscom/TB2pqTubVHzQeBjSZFsXXbGvXXa_!!647424941.jpg_180x180xzq90.jpg_.webp" alt="1" />
              <p>加厚保暖短毛绒四件套</p>
              <i>短毛绒保暖四件套，非常小...</i>
          </li>
          <li>
              <img src="//img.alicdn.com/tfscom/TB2pqTubVHzQeBjSZFsXXbGvXXa_!!647424941.jpg_180x180xzq90.jpg_.webp" alt="1" />
              <p>加厚保暖短毛绒四件套</p>
              <i>短毛绒保暖四件套，非常小...</i>
          </li>
          <li>
              <img src="//img.alicdn.com/tfscom/TB2pqTubVHzQeBjSZFsXXbGvXXa_!!647424941.jpg_180x180xzq90.jpg_.webp" alt="1" />
              <p>加厚保暖短毛绒四件套</p>
              <i>短毛绒保暖四件套，非常小...</i>
          </li>
          <li>
              <img src="//img.alicdn.com/tfscom/TB2pqTubVHzQeBjSZFsXXbGvXXa_!!647424941.jpg_180x180xzq90.jpg_.webp" alt="1" />
              <p>加厚保暖短毛绒四件套</p>
              <i>短毛绒保暖四件套，非常小...</i>
          </li>
          <li>
              <img src="//img.alicdn.com/tfscom/TB2pqTubVHzQeBjSZFsXXbGvXXa_!!647424941.jpg_180x180xzq90.jpg_.webp" alt="1" />
              <p>加厚保暖短毛绒四件套</p>
              <i>短毛绒保暖四件套，非常小...</i>
          </li>
                  <div style={{clear:"both"}}></div>
        </ul>
      </div>
    );
  }
}

export default Goods;
