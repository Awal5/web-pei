import React from "react";
import CreateProduct from "@/components/dashboard/product/create";
import { Container } from "react-bootstrap";
import Dashboard from "..";

const CreateProductPage = () => {
  return (
    <Dashboard>
      <Container>
        <CreateProduct />
      </Container>
    </Dashboard>
  );
};

export default CreateProductPage;
