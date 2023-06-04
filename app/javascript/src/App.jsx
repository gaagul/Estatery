import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./components/main";
import "./stylesheets/main.scss";
import Homepage from "./pages/Home";
import Testpage from "./pages/test";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Testpage />
  </React.StrictMode>
);
