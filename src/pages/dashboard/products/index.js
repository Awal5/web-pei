import React, { useState, useEffect } from "react";
import MainProduct from "@/components/dashboard/product/main-product";
import Dashboard from "..";
import { getProducts, deleteProduct } from "@/data";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

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
    confirmAlert({
      title: "Delete Product",
      message: "Apakah anda yakin ingin menghapus?",
      buttons: [
        {
          label: "Cancel",
        },
        {
          label: "Delete",
          onClick: () => {
            removeProduct(slug);
          },
        },
      ],
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
