import React from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = () => (
    <>
        <Box className="flex items-center">
            <TextField id="outlined-basic" label="Property Type" variant="outlined" sx={{ mx: 1 }} />
            <TextField id="outlined-basic" label="Search based on location" variant="outlined" sx={{ mx: 1 }} />
            <Button variant="contained" size="large" startIcon={<SearchIcon />} sx={{ mx: 1 }} className="!bg-indigo-500 !h-14">Search</Button>
        </Box>
    </>
)

export default Searchbar;