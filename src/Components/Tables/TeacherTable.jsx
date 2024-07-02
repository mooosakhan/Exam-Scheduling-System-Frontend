import React from "react";
import { Table } from "antd";
const { Column } = Table;

const generateRandomData = () => {};

const TeachersTable = () => {
  const data = generateRandomData();

  return (
    <Table dataSource={data} pagination={false}>
      <Column
        title="Id"
        dataIndex="id"
        key="id"
      />
      <Column
        title="Name"
        dataIndex="name"
        key="name"
      />
      <Column
        title="Department"
        dataIndex="department"
        key="department"
      />
      <Column
        title="Free hours"
        dataIndex="freeHours"
        key="freeHours"
      />
      <Column
        title="Email"
        dataIndex="email"
        key="email"
      />
      <Column
        title="Password"
        dataIndex="password"
        key="password"
      />
    </Table>
  );
};

export default TeachersTable;
