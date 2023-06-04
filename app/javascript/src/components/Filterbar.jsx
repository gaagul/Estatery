import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

const Filterbar = ()=>{
    return <>
        <div className="flex justify-center p-10 rounded-md shadow-md shadow-indigo-100 bg-white">
            <TextField variant="outlined" label="Location" defaultValue="New York, USA" className="!mx-2"/>
            <TextField variant="outlined" label="Price" defaultValue="$500" className="!mx-2"/>
            <TextField variant="outlined" label="Property Type" defaultValue="Houses" className="!mx-2"/>
            <Button startIcon={<SearchIcon />} variant="contained" className="!bg-indigo-500 !mx-2">Search</Button>
        </div>
    </>
}

export default Filterbar;