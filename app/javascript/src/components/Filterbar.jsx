import React, { useState } from "react";
import { TextField, Button, IconButton } from "@mui/material";
import { Formik, Form, Field } from "formik";
import SearchIcon from "@mui/icons-material/Search";
import { not } from "ramda";
import { FilterOutlined } from "@ant-design/icons";

const Filterbar = ({ filters, onSubmit }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return isFilterOpen ? (
    <div className="mt-4 flex justify-center rounded-md bg-white p-4 shadow-md shadow-indigo-100">
      <Formik enableReinitialize initialValues={filters} onSubmit={onSubmit}>
        {() => (
          <Form className="flex items-center">
            <Field
              as={TextField}
              className="mx-2"
              label="Location"
              name="location"
              size="small"
              variant="outlined"
            />
            <Field
              as={TextField}
              className="mx-2"
              label="Price"
              name="price"
              size="small"
              variant="outlined"
            />
            <Field
              as={TextField}
              className="mx-2"
              label="Property Type"
              name="type"
              size="small"
              variant="outlined"
            />
            <Button
              className="mx-2 !bg-indigo-500"
              startIcon={<SearchIcon />}
              type="submit"
              variant="contained"
            >
              Search
            </Button>
            <IconButton onClick={() => setIsFilterOpen(not)}>
              <FilterOutlined />
            </IconButton>
          </Form>
        )}
      </Formik>
    </div>
  ) : (
    <div className="mt-4 flex items-center justify-between rounded-md bg-white px-4 py-1 shadow-md shadow-indigo-100">
      <div>Filters:</div>
      <IconButton onClick={() => setIsFilterOpen(not)}>
        <FilterOutlined />
      </IconButton>
    </div>
  );
};
export default Filterbar;
