import React, { useState, useEffect } from "react";
import MainManagement from "@/components/dashboard/management/main-management";
import Dashboard from "..";
import { getManagements } from "@/data";

const ManagementsPages = () => {
  const [management, setManagement] = useState([]);
  const [error, setError] = useState();
  useEffect(() => {
    async function getManagement() {
      try {
        const { data } = await getManagements();
        if (data) {
          setManagement(data);
        }
      } catch (error) {
        setError(error.message);
      }
    }
    getManagement();
  }, []);
  return (
    <Dashboard>
      <MainManagement managements={management} errors={error} />
    </Dashboard>
  );
};

export default ManagementsPages;
