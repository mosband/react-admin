import "./styles/index.css";
import React from "react";
import ReactDOM from "react-dom";
import addGlobalMethods from "./addGlobalMethods";
import App from "./App";

addGlobalMethods(React);

ReactDOM.render(<App />, document.getElementById("root"));
