import React from "react";
import ReactDom from "react-dom";
import App from "./App.jsx";

//　reactdom　の使用例。　引数：関数、どこに表示するかのID
ReactDom.render(<App />, document.getElementById("root"));
