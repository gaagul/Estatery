import React from "react";
import PropertyCard from "../components/PropertyCard";

const ListingPage = () => (
  <div className="listing-wrapper flex h-full w-full flex-col px-24 pt-16 pb-2">
    <div className=" h-16 rounded-md bg-white">TODO: FILTERS</div>
    <div className="mt-6 flex flex-wrap justify-around overflow-scroll flex-grow gap-8">
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
    </div>
    <div className="mt-2 h-8 bg-white">Pagination</div>
  </div>
);

export default ListingPage;
