import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import queryClient from "utils/queryClient";
import { ReactQueryDevtools } from "react-query-devtools";
import { QueryClientProvider } from "react-query";
import Login from "./Login";
import Signup from "./Signup";
import AdminPanel from "../pages/AdminPanel";
import Home from "../pages/Home";
import ListingPage from "../pages/ListingPage";
import Navbar from "./Navbar";

const Main = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <div className="h-screen w-screen">
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route element={<Login />} path="/login" />
              <Route element={<Signup />} path="/signup" />
              <Route element={<AdminPanel />} path="/admin" />
              {isLoggedIn ? (
                <Route element={<ListingPage />} path="/listing" />
              ) : (
                <Route
                  element={<LoginRedirect from="/listing" />}
                  path="/listing"
                />
              )}
              <Route element={<Home />} path="/" />
            </Routes>
          </BrowserRouter>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </React.StrictMode>
    </div>
  );
};

const LoginRedirect = ({ from }) => {
  const queryParams = new URLSearchParams(window.location.search).toString();
  const state = { from, queryParams };

  return <Navigate replace state={state} to="/login" />;
};

export default Main;
