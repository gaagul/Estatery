import React from "react";
import { Avatar } from "@mui/material";
import { ADMIN_OPTIONS } from "../constants";

const SideBar = () => (
  <div className="flex h-screen w-16 flex-col items-center justify-between py-4 text-gray-500 secondary">
    <div className="mt-6 h-16 text-lg font-bold uppercase">LOGO</div>
    <div className="flex flex-col items-center justify-start gap-8">
      {ADMIN_OPTIONS.map((option, index) => (
        <button
          className="flex h-12 w-12 items-center justify-center rounded-lg transition-colors hover:bg-purple-100 focus:bg-purple-100"
          key={index}
        >
          {option?.icon()}
        </button>
      ))}
    </div>
    <div className="py-4">
      <Avatar src="/broken-image.jpg" />
    </div>
  </div>
);

export default SideBar;
