import React, { useState, useEffect } from "react";
import MainProduct from "@/components/dashboard/product/main-product";
import Dashboard from "..";
import { getProducts, deleteProduct } from "@/data";
import Swal from "sweetalert2";

const Product = () => {
  // deklarasi state
  const [product, setProduct] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  // fetch data products saat component di mount
  useEffect(() => {
    getProduct();
  }, []);

  // fungsi fetch semua products
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

  // fungsi hapus product
  function removeProduct(slug) {
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
        deleteProduct(slug)
          .then(() => {
            Swal.fire("Dihapus", "", "success");
          })
          .then(() => getProduct());
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
        onDelete={removeProduct}
      />
    </Dashboard>
  );
};

export default Product;
