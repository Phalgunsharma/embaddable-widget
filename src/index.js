import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./home.jsx";
const App = () => {
  return <div>{<Homepage />}</div>;
};
ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(<App />, document.getElementsByClassName("root"));
