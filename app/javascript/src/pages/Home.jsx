import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Searchbar from "../components/Searchbar";
import Navbar from "../components/Navbar";
import RoofingIcon from '@mui/icons-material/Roofing';
import TileGrid from "../components/TileGrid";


const Homepage = () => (
    <>
        <Container maxWidth="lg">
            <Navbar />
            <Grid className="flex items-center h-screen" container>
                <Grid item sx={12} md={8}>
                    <Box mb={10}>
                        <Box p={2} mb={5} className="bg-indigo-200 text-indigo-900 rounded-md !h-100px !w-[67px]" >
                            <RoofingIcon fontSize="large" className="!mr-2" />
                        </Box>
                        <Typography variant="h2" className="!font-semibold">
                            Sell or Rent<br></br>your home at the <span className="text-indigo-500">best</span> price<span className="text-indigo-500">.</span>
                        </Typography>
                    </Box>
                    <Box>
                        <Searchbar />
                    </Box>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={12}>
                    <Box mt={14} mb={5}>
                        <Typography variant="h3" className="!font-semibold">
                            <span className="text-indigo-500">Featured</span> Properties
                        </Typography>
                        <Box mt={4}> 
                        <TileGrid/>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container >
        {/* This grid is the hero image shown in the top right of the homepage */}
        <Grid item sx={12} md={4} className="h-screen w-1/3 bg-[url('../assets/home-bg.jpg')] bg-cover absolute right-0 top-0">
        </Grid>
    </>
)

export default Homepage;