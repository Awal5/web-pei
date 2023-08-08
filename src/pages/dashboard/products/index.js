import React, { useState, useEffect } from "react";
import MainProduct from "@/components/dashboard/product/main-product";
import Dashboard from "..";
import { getProducts, deleteProduct } from "@/data";
import Swal from "sweetalert2";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getProduct();
  }, []);

  async function getProduct() {
    try {
      const { data } = await getProducts();
      if (data) {
        setProduct(data);
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  async function removeProduct(slug) {
    try {
      await deleteProduct(slug).then(() => getProduct());
    } catch (error) {
      console.log(error);
    }
  }

  function confirmDelete(slug) {
    Swal.fire({
      title: "Konfirmasi Hapus !",
      text: "Apakah anda yakin ingin menghapus Produk ini ?",
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
        removeProduct(slug);
        Swal.fire("Dihapus", "", "success");
      } else if (result.isDismissed) {
        Swal.fire("Dibatalkan", "", "error");
      }
    });
  }

  return (
    <Dashboard>
      <MainProduct
        products={product}
        errors={error}
        loading={loading}
        onDelete={confirmDelete}
      />
    </Dashboard>
  );
};

export default Product;
