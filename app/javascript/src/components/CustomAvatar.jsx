import { UserOutlined } from "@ant-design/icons";
import React, { useState } from "react";

const AvatarMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        className="overflow-hidden rounded-full focus:outline-none"
        type="button"
        onClick={toggleMenu}
      >
        <UserOutlined />
      </button>
      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {/* Menu content goes here */}
          <div className="py-1">
            <a
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              href="/"
            >
              Menu Item 1
            </a>
            <a
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              href="/"
            >
              Menu Item 2
            </a>
            <a
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              href="/"
            >
              Menu Item 3
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvatarMenu;
