import React, { useState, useEffect } from "react";
import MainManagement from "@/components/dashboard/management/main-management";
import Dashboard from "..";
import { getManagements, deleteManagement } from "@/data";
import Swal from "sweetalert2";
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
    Swal.fire({
      title: "Konfirmasi Hapus !",
      text: "Apakah anda yakin ingin menghapus Direksi ini ?",
      showCancelButton: true,
      confirmButtonColor: "#00bf06",
      cancelButtonColor: "#f01202",
      focusConfirm: false,
      allowOutsideClick: false,
      icon: "warning",
      confirmButtonText: "Ya",
      cancelButtonText: "Batal",
    }).then(result => {
      if (result.isConfirmed) {
        removeManagement(slug);
        Swal.fire("Dihapus", "", "success");
      } else if (result.isDismissed) {
        Swal.fire("Dibatalkan", "", "error");
      }
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
