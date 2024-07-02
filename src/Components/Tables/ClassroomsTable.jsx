import React from "react";
import { Table } from "antd";
const { Column } = Table;

const generateRandomData = () => {};

const ClassroomsTable = () => {
  const data = generateRandomData();

  return (
    <Table dataSource={data} pagination={false}>
      <Column
        title="Building"
        dataIndex="building"
        key="building"
      />
      <Column
        title="Floor"
        dataIndex="floor"
        key="floor"
      />
      <Column
        title="Room Number"
        dataIndex="roomNumber"
        key="roomNumber"
      />
    </Table>
  );
};

export default ClassroomsTable;
