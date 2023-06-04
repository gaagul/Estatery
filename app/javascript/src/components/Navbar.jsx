import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import RoofingIcon from "@mui/icons-material/Roofing";

const Navbar = () => (
  <AppBar className="!bg-indigo-500" elevation={0} position="absolute">
    <Container maxWidth="lg">
      <Toolbar>
        <Typography variant="h4">
          <RoofingIcon className="!mr-2" fontSize="large" />
          Casa.
        </Typography>
        <Box className="ml-auto block">
          <Button className="!mx-2 !bg-indigo-500 !text-white">Sign Up</Button>
          <Button
            className="!mx-2 !border-white !bg-indigo-500 !text-white"
            variant="outlined"
          >
            Sign In
          </Button>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Navbar;
