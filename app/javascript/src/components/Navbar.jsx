import React from "react";
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import RoofingIcon from '@mui/icons-material/Roofing';

const Navbar = () => (
    <>
        <AppBar position="absolute" className="!bg-indigo-500" elevation={0}>

            <Container maxWidth="lg">
                <Toolbar>
                    <Typography variant="h4"><RoofingIcon fontSize="large" className="!mr-2" />Casa.</Typography>
                    <Box className="block ml-auto">
                        <Button className="!bg-indigo-500 !mx-2 !text-white">Sign Up</Button>
                        <Button variant="outlined" className="!bg-indigo-500 !text-white !mx-2 !border-white">Sign In</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    </>
)

export default Navbar;