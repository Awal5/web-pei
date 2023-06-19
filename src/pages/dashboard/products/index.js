import React, { useState, useEffect } from "react";
import MainProduct from "@/components/dashboard/product/main-product";
import Dashboard from "..";
import { getProducts } from "@/data";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState();
  useEffect(() => {
    async function getProduct() {
      try {
        const { data } = await getProducts();
        if (data) {
          setProduct(data);
        }
      } catch (error) {
        setError(error.message);
        console.log(error.message);
      }
    }

    getProduct();
  }, []);
  return (
    <Dashboard>
      <MainProduct products={product} errors={error} />
    </Dashboard>
  );
};

export default Product;
