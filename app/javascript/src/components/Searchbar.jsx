import React from "react";
import { TextField, Box, Button } from "@mui/material";
import { Search } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Searchbar = () => (
  <Box className="flex items-center">
    <TextField
      id="outlined-basic"
      label="Property Type"
      sx={{ mx: 1 }}
      variant="outlined"
    />
    <TextField
      id="outlined-basic"
      label="Search based on location"
      sx={{ mx: 1 }}
      variant="outlined"
    />
    <Link to="/search">
    <Button
      className="!h-14 !bg-indigo-500"
      size="large"
      startIcon={<Search />}
      sx={{ mx: 1 }}
      variant="contained"
    >
      Search
    </Button>
    </Link>
  </Box>
);

export default Searchbar;
