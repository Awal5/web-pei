import React, { useEffect, useState } from "react";
import Dashboard from "..";
import { Container } from "react-bootstrap";
import DetailManagement from "@/components/dashboard/management/detail";
import { getManagementBySlug, deleteManagement } from "@/data";
import Loading from "@/components/atoms/Loading";
import { navigate } from "gatsby";
import Swal from "sweetalert2";

const ProductDetail = props => {
  // mengambil slug dari props url
  const { slug } = props.params;
  // deklarasi state
  const [management, setManagement] = useState(null);
  const [loading, setLoading] = useState(true);

  // fetch data management dan detail management saat component di mount
  useEffect(() => {
    try {
      getDetailManagement();
    } catch (error) {
      console.log("error: ", error);
    }
  }, [slug]);

  // fungsi fetch detail management
  const getDetailManagement = async () => {
    const data = await getManagementBySlug(slug);
    if (data) {
      setManagement(data);
      setLoading(false);
    }
  };

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
          .then(() => navigate("/dashboard/managements"));
      } else if (result.isDismissed) {
        Swal.fire("Dibatalkan", "", "error");
      }
    });
  }

  return (
    <Dashboard>
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <DetailManagement
            management={management}
            onDelete={removeManagement}
          />
        )}
      </Container>
    </Dashboard>
  );
};

export default ProductDetail;
