import React from "react";
import EditManagement from "@/components/dashboard/management/edit";
import { Container } from "react-bootstrap";
import Dashboard from "../..";

const EditManagementPage = props => {
  const { slug } = props.params;

  return (
    <Dashboard>
      <Container>
        <EditManagement slug={slug} />
      </Container>
    </Dashboard>
  );
};

export default EditManagementPage;
