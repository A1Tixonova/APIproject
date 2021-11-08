import React from "react";
import Header from "./bsStyle/Header";
import Menu from "./bsStyle/Menu";
import TextTest from "./bsStyle/TextTest";

let rootStyle = {
  height: "100%",
  minHeight: "100vh",
  backgroundColor: "rgba(42, 43, 50, 1)",
};

const App = () => {
  return (
    <div style={rootStyle}>
      <Header />
      <Menu />
      <TextTest />
    </div>
  );
};

export default App;
