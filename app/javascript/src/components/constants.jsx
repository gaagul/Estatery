import React from "react";
import {
  SettingsOutlined,
  HomeOutlined,
  AssessmentOutlined,
} from "@mui/icons-material";

export const HOUSE = {
  name: "Palm Harbor",
  location: "2699 Green Valley, Highland Lake, FL",
  thumbnail:
    "https://ik.imagekit.io/gaagultest/CASA/house1?updatedAt=1685449331112",
  price: 1900,
  beds: 3,
  baths: 2,
  area: 200,
  forRent: true,
  favorite: false,
};

export const ADMIN_OPTIONS = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: () => <AssessmentOutlined />,
  },
  {
    key: "properties",
    label: "Properties",
    icon: () => <HomeOutlined />,
  },
  {
    key: "settings",
    label: "Settings",
    icon: () => <SettingsOutlined />,
  },
];
