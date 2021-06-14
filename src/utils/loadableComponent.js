import React from "react";
import Loadable from "react-loadable";
import { Spin } from "antd";

const LoadableComponent = (component) => {
  return Loadable({
    loader: () => component,
    loading: () => {
      return (
        <>
          <Spin />
        </>
      );
    },
    delay: 5000,
  });
};

export default LoadableComponent;
