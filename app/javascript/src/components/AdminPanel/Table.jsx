import React from "react";
import { Table as AntdTable } from "antd";
import { data, columns } from "./constants";

const Table = () => <AntdTable columns={columns} dataSource={data} />;

export default Table;
