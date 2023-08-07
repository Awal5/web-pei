import React from "react";
import EditProduct from "@/components/dashboard/product/edit";
import { Container } from "react-bootstrap";
import Dashboard from "../..";

const EditProductPage = props => {
  const { slug } = props.params;

  return (
    <Dashboard>
      <Container>
        <EditProduct slug={slug} />
      </Container>
    </Dashboard>
  );
};

export default EditProductPage;
