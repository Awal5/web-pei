import React, { useState } from "react";
import CreateProduct from "@/components/dashboard/product/create";
import { Container } from "react-bootstrap";
import Dashboard from "..";
import { navigate } from "gatsby";
import { createProduct } from "@/data";

const CreatePage = () => {
  async function onCreateProduct(product) {
    try {
      createProduct(product);
      navigate("/dashboard/products");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Dashboard>
      <Container>
        <CreateProduct addProduct={onCreateProduct} />
      </Container>
    </Dashboard>
  );
};

export default CreatePage;
