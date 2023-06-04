import React from "react";
import ReactDOM from "react-dom/client";
import "./stylesheets/main.scss";
// import Homepage from "./pages/Home";
import Main from "./components/main";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Homepage /> */}
    <Main />
  </React.StrictMode>
);
