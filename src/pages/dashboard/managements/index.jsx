import React, { useState, useEffect } from "react";
import MainManagement from "@/components/dashboard/management/main-management";
import Dashboard from "..";
import { getManagements, deleteManagement } from "@/data";
import Swal from "sweetalert2";
const ManagementsPages = () => {
  // deklarasi state
  const [management, setManagement] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  // fetch data managements saat component di mount
  useEffect(() => {
    getManagement();
  }, []);

  // fungsi fetch semua managements
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

  // fungsi hapus management
  function removeManagement(slug) {
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
        deleteManagement(slug)
          .then(() => {
            Swal.fire("Dihapus", "", "success");
          })
          .then(() => getManagement());
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
        onDelete={removeManagement}
        loading={loading}
      />
    </Dashboard>
  );
};

export default ManagementsPages;
