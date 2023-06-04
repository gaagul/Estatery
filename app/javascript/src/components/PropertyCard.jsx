import React from "react";
import {
  Favorite,
  FavoriteBorder,
  KingBedOutlined,
  BathtubOutlined,
  AspectRatioOutlined,
} from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { HOUSE } from "./constants";

const PropertyCard = ({ house = HOUSE }) => (
  <div className="h-60 w-52 rounded-lg border-2 shadow-md">
    <img alt="img" className="thumbnail h-1/2 w-full" src={house?.thumbnail} />
    <div className="mt-2 flex flex-col px-4">
      <div className="flex items-center justify-between">
        <div className="flex items-end">
          <Typography className="primary-text" fontSize={14}>
            ${house?.price}
          </Typography>
          <Typography fontSize={14}>
            {house?.forRent ? " /month" : ""}
          </Typography>
        </div>
        <IconButton
          size="small"
          style={{
            height: "30px",
          }}
        >
          {house?.favorite ? (
            <Favorite className="primary-text" />
          ) : (
            <FavoriteBorder className="primary-text" />
          )}
        </IconButton>
      </div>
      <Typography className="mt-1" fontSize={14} variant="h6">
        {house?.name}
      </Typography>
      <Typography className="property-card__address mt-1">
        {house?.location}
      </Typography>
      <div className="mt-2 border border-gray-300" />
      <div className="mt-2 flex justify-between">
        <div className="flex items-center gap-1">
          <KingBedOutlined className="primary-text" fontSize="10" />
          <p className="property-card__footer-item">{house?.beds} beds</p>
        </div>
        <div className="flex items-center gap-1">
          <BathtubOutlined className="primary-text" fontSize="10" />
          <p className="property-card__footer-item">{house?.baths} baths</p>
        </div>
        <div className="flex items-center gap-1">
          <AspectRatioOutlined className="primary-text" fontSize="10" />
          <p className="property-card__footer-item">{house?.area} m2</p>
        </div>
      </div>
    </div>
  </div>
);

export default PropertyCard;
