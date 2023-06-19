import React from "react";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Tabs, Input, Button } from "antd";

const { Header } = Layout;
const { Search } = Input;

const AntdHeader = () => {
  const items = [
    {
      key: "1",
      label: "Pending",
    },
    {
      key: "2",
      label: "Approved",
    },
    {
      key: "3",
      label: "Rejected",
    },
  ];

  return (
    <Header className="mt-6 flex items-center justify-between bg-white">
      <div className="flex items-center gap-4">
        <Button
          className="-ml-10"
          icon={<MenuUnfoldOutlined />}
          type="secondary"
        />
        <Tabs
          defaultActiveKey="1"
          items={items}
          size="small"
          onChange={() => {}}
        />
      </div>
      <Search allowClear className="w-60" placeholder="Search name" />
    </Header>
  );
};

export default AntdHeader;
