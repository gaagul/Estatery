import React from "react";
import { OutlinedInput, Button } from "@mui/material";

const Header = () => (
  <header className="flex h-16 items-center justify-between">
    <h1 className="text-lg font-semibold">Approval requests</h1>
    <div className="flex items-center">
      <OutlinedInput
        placeholder="Search"
        size="small"
        style={{ maxHeight: "30px" }}
        type="text"
      />
      <Button className="rounded bg-white px-4 py-2 font-semibold text-purple-700">
        Search
      </Button>
    </div>
  </header>
);

export default Header;
