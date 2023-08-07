import React, { useState, useEffect } from "react";
import MainManagement from "@/components/dashboard/management/main-management";
import Dashboard from "..";
import { getManagements, deleteManagement } from "@/data";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const ManagementsPages = () => {
  const [management, setManagement] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getManagement();
  }, []);

  async function getManagement() {
    try {
      const { data } = await getManagements();
      if (data) {
        setManagement(data);
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }
  async function removeManagement(slug) {
    try {
      await deleteManagement(slug).then(() => getManagement());
    } catch (error) {
      console.log(error);
    }
  }
  function confirmDelete(slug) {
    confirmAlert({
      title: "Delete Product",
      message: "Apakah anda yakin ingin Management?",
      buttons: [
        {
          label: "Cancel",
        },
        {
          label: "Delete",
          onClick: () => {
            removeManagement(slug);
          },
        },
      ],
    });
  }
  return (
    <Dashboard>
      <MainManagement
        managements={management}
        errors={error}
        onDelete={confirmDelete}
        loading={loading}
      />
    </Dashboard>
  );
};

export default ManagementsPages;
