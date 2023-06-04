import React from "react";
import ReactDOM from "react-dom/client";
import "./stylesheets/main.scss";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from "./components/main";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AdminPanel from "./pages/AdminPanel";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact element={<Login />} path="/login" />
        <Route exact element={<Signup />} path="/signup" />
        <Route exact element={<AdminPanel />} path="/admin" />
        <Route element={<Main />} path="/" />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
