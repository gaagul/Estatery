import React from "react";
import { Table as AntdTable } from "antd";
import { data, columns } from "./constants";

const Table = () => (
  <AntdTable className="mt-4" columns={columns} dataSource={data} />
);

export default Table;
