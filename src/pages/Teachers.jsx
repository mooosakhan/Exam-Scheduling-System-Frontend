import React from "react";
import TeachersTable from "../Components/Tables/TeacherTable";
import TeachersCreate from "../Components/Modals/TeachersCreate";

const Teachers = () => {
  return (
    <div style={{ width: "100%" }}>
      <div>
        <TeachersCreate />
      </div>
      <div>
        <TeachersTable />
      </div>
    </div>
  );
};

export default Teachers;
