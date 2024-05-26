import React from "react";
import ReactDOM from "react-dom";


const div=React.createElement("div",{},"hello world from react");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(div);