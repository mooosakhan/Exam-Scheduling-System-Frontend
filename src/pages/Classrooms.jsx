import React from "react";
import ClassroomsTable from "../Components/Tables/ClassroomsTable";
import ClassroomsCreate from "../Components/Modals/ClassroomsCreate";

const Classrooms = () => {
  return (
    <div style={{ width: "100%" }}>
      <div>
        <ClassroomsCreate />
      </div>
      <div>
        <ClassroomsTable />
      </div>
    </div>
  );
};

export default Classrooms;
