import React from 'react';
import { Favorite, FavoriteBorder, BathtubOutlined, KingBedOutlined, AspectRatioOutlined } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import { HOUSE } from './constants';

const PropertyCard = ({ house = HOUSE }) => {
  return (
    <div className="rounded-lg border-2 w-64 h-80 shadow-md">
      <img className="h-1/2 w-full" src={house?.thumbnail} />
      <div className="mt-3 flex flex-col px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-end">
            <Typography
              className=" text-indigo-500"
            >
              ${house?.price}
            </Typography>
            <Typography>
              {house?.forRent ? " /month" : ""}
            </Typography>
          </div>
          <IconButton size="small">
            {house?.favorite ? <Favorite className="text-indigo-500" /> : <FavoriteBorder className="text-indigo-500" />}
          </IconButton>
        </div>
        <Typography className="mt-2" variant="h6">
          {house?.name}
        </Typography>
        <Typography className="mt-1 property-card__address">
          {house?.location}
        </Typography>
        <div className="mt-3 border border-gray-300" />
        <div className="mt-3 flex justify-between">
          <div className="flex gap-1"><KingBedOutlined fontSize="12" className="text-indigo-500"/><p className="property-card__footer-item">{house?.beds} beds</p></div>
          <div className="flex gap-1"><BathtubOutlined fontSize="12" className="text-indigo-500"/><p className="property-card__footer-item">{house?.baths} baths</p></div>
          <div className="flex gap-1"><AspectRatioOutlined fontSize="12" className="text-indigo-500"/><p className="property-card__footer-item">{house?.area} m2</p></div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;