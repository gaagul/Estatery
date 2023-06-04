import React from "react";
import { Tabs, Tab } from "@mui/material";

const Header = ({ tab, setTab }) => (
  <header className="flex h-16 items-center gap-10">
    <h1 className="text-lg font-semibold">Requests: 100</h1>
    <Tabs aria-label="basic tabs example" value={tab} onChange={setTab}>
      <Tab label="Pending" />
      <Tab label="Approved" />
      <Tab label="Rejected" />
    </Tabs>
  </header>
);

export default Header;
