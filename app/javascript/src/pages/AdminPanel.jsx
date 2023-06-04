import React,{ useState } from "react";
import SideBar from "../components/AdminPanel/Sidebar";
import Table from "../components/AdminPanel/Table";
import Header from "../components/AdminPanel/Header";

const AdminPanel = () => {
  const [tab, setTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    console.log(event, newValue);
    setTab(newValue);
  };
  return (
  <div className="flex h-screen w-screen">
    <SideBar />
    <div className="flex h-full grow flex-col px-4 py-4">
      <Header tab={tab} setTab={handleTabChange}/>
      <Table />
    </div>
  </div>
);
}

export default AdminPanel;
