import React, { useState } from "react";
import { Container } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { pickBy, identity } from "ramda";
import PropertyCard from "components/PropertyCard";
import Filterbar from "components/Filterbar";
import { initializeFilters } from "../utils";

const ListingPage = () => {
  const [filters, setFilters] = useState(initializeFilters());
  const [_, setSearchParams] = useSearchParams();

  //  const { data: properties = [], isLoading } = useFetchAssets(filters);

  const handleFilterSubmit = values => {
    setFilters(values);
    const nonEmptyFilters = pickBy(identity, values);

    setSearchParams(nonEmptyFilters);
  };

  return (
    <div className="min-h-screen bg-[#f7f7fe]">
      <Container className="min-h-screen">
        <div className="flex h-full w-full flex-col px-24 pb-2 pt-16">
          <Filterbar filters={filters} onSubmit={handleFilterSubmit} />
          <div className="mt-4 flex flex-grow flex-wrap justify-around gap-6 overflow-scroll">
            {/* {properties &&
              properties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))} */}
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ListingPage;
