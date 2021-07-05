import React from "react";

const ColorfulMessage = (props) => {
  //変数をここでまとめる
  const { color, children } = props;
  const contentStyle = {
    color, //color: color なら省略可能
    fonctSize: "18px"
  };
  //かこった中身を指定する。
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
