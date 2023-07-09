import React, { useState } from "react";
import { Container } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { pickBy, identity } from "ramda";
import PropertyCard from "components/PropertyCard";
import Filterbar from "components/Filterbar";
import { initializeFilters } from "../utils";
import { useFetchProperties, useFetchPropertyById } from "../hooks/usePropertiesApi";
import { Spin } from 'antd';


const ListingPage = () => {
  const [filters, setFilters] = useState(initializeFilters());
  const [_, setSearchParams] = useSearchParams();

  const { data, status, error } = useFetchProperties();

  const handleFilterSubmit = values => {
    setFilters(values);
    const nonEmptyFilters = pickBy(identity, values);

    setSearchParams(nonEmptyFilters);
  };

  if (status === "loading") {
    <Spin />
  }

  if (status === "error") {
    console.log(error);
  }

  if (status === "success") {
    console.log(data);
    return (
      <div className="min-h-screen bg-[#f7f7fe]">
        <Container className="min-h-screen">
          <div className="flex h-full w-full flex-col px-24 pb-2 pt-16">
            <Filterbar filters={filters} onSubmit={handleFilterSubmit} />
            <div className="mt-4 flex flex-grow flex-wrap justify-start gap-6">
              {data.docs.map(doc => {
                let property = doc.data();
                console.log(property);
                return <PropertyCard key={doc.id} property={property} />
              }
              )}
            </div>
          </div>
        </Container>
      </div>
    );
  }
};

export default ListingPage;
