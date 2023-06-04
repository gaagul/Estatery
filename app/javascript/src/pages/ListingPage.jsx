import React from "react";
import PropertyCard from "../components/PropertyCard";

const ListingPage = () => (
  <div className="listing-wrapper flex h-full w-full flex-col px-24 pb-2 pt-16">
    <div className=" h-16 rounded-md bg-white">TODO: FILTERS</div>
    <div className="mt-6 flex flex-grow flex-wrap justify-around gap-8 overflow-scroll">
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
