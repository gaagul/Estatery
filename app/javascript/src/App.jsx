import React from "react";
import ReactDOM from "react-dom/client";
import "./stylesheets/main.scss";
import Main from "./components/main";
import Login from "./components/login";
import Signup from "./components/signup";
import AdminPanel from "./pages/adminPanel";
import ListingPage from "./pages/ListingPage"
import { Route, Routes, BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/admin" element={<AdminPanel />} />
      <Route exact path="/search" element={<ListingPage />} />
      <Route path="/" element={<Main />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
