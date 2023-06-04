import React from "react";
import PropertyCard from "../components/PropertyCard";
import Filterbar from "../components/Filterbar";
import { Container } from "@mui/material";

const ListingPage = () => (
  <div className="bg-[#f7f7fe] min-h-screen">
  <Container className="!min-h-screen">
  <div className="flex h-full w-full flex-col px-24 pt-16 pb-2">
    <Filterbar />
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
    {/* <div className="mt-2 h-8 bg-white">Pagination</div> */}
  </div>
  </Container>
  </div>
);

export default ListingPage;
