import React, { useState } from "react";
import { Layout } from "antd";
import Sidebar from "../components/AdminPanel/Sidebar";
import Table from "../components/AdminPanel/Table";

const { Header } = Layout;

const AdminPanel = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Layout className="min-h-screen w-screen">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <Layout className="px-4">
        <Header className="bg-gray-200" />
        <Table />
      </Layout>
    </Layout>
  );
};
export default AdminPanel;
