import React from "react";
import SideBar from "../components/AdminPanel/Sidebar";
import Table from "../components/AdminPanel/Table";
import Header from "../components/AdminPanel/Header";

const AdminPanel = () => (
  <div className="flex h-screen w-screen">
    <SideBar />
    <div className="flex h-full grow flex-col px-4 py-4">
      <Header />
      <Table />
    </div>
  </div>
);

export default AdminPanel;
