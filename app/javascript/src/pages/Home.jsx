import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import RoofingIcon from "@mui/icons-material/Roofing";
import { useNavigate } from "react-router-dom";
import Searchbar from "../components/Searchbar";
import Navbar from "../components/Navbar";
import TileGrid from "../components/TileGrid";
import { createQueryString } from "../utils";

const Homepage = () => {
  const navigate = useNavigate();

  const handleSearch = values => {
    const getQueryParams = createQueryString(values);
    navigate(`/listing?${getQueryParams}`);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Grid container className="flex h-screen items-center">
          <Grid item md={8} sx={12}>
            <Box mb={10}>
              <Box
                className="!h-100px !w-[67px] rounded-md bg-indigo-200 text-indigo-900"
                mb={5}
                p={2}
              >
                <RoofingIcon className="!mr-2" fontSize="large" />
              </Box>
              <Typography className="!font-semibold" variant="h2">
                Sell or Rent
                <br />
                your home at the <span className="text-indigo-500">
                  best
                </span>{" "}
                price
                <span className="text-indigo-500">.</span>
              </Typography>
            </Box>
            <Box>
              <Searchbar handleSearch={handleSearch} />
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={12}>
            <Box mb={5} mt={14}>
              <Typography className="!font-semibold" variant="h3">
                <span className="text-indigo-500">Featured</span> Properties
              </Typography>
              <Box mt={4}>
                <TileGrid />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      {/* This grid is the hero image shown in the top right of the homepage */}
      <Grid
        item
        className="absolute right-0 top-0 h-screen w-1/3 bg-[url('../assets/home-bg.jpg')] bg-cover"
        md={4}
        sx={12}
      />
    </>
  );
};

export default Homepage;
