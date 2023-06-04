import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70, headerClassName: "bg-gray-200" },
  { field: "name", headerName: "Name", width: 130, headerClassName: "bg-gray-200" },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    width: 90,
    headerClassName: "bg-gray-200"
  },
  {
    field: "forRent",
    headerName: "Is for rent",
    type: "boolean",
    width: 160,
    headerClassName: "bg-gray-200"
  },
];

const rows = [
  { id: 1, name: "Snow", price: 35, forRent: true },
  { id: 2, name: "Lannister", price: 42, forRent: false },
  { id: 3, name: "Lannister", price: 45, forRent: true },
  { id: 4, name: "Stark", price: 16, forRent: false },
  { id: 5, name: "Targaryen", price: 77, forRent: true },
  { id: 6, name: "Melisandre", price: 150, forRent: false },
  { id: 7, name: "Clifford", price: 44, forRent: true },
  { id: 8, name: "Frances", price: 36, forRent: false },
  { id: 9, name: "Roxie", price: 65, forRent: true },
];

const Table = () => (
  <div className="mt-4 h-full w-full">
    <DataGrid
      // checkboxSelection
      columns={columns}
      pageSizeOptions={[5, 10]}
      rows={rows}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 10 },
        },
      }}
    />
  </div>
);

export default Table;
