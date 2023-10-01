import React from "react";
import Dashboard from "..";
import { Container } from "react-bootstrap";
import CreateManagement from "@/components/dashboard/management/createManagement";

const CreateManagementPage = () => {
  return (
    <Dashboard>
      <Container>
        <CreateManagement />
      </Container>
    </Dashboard>
  );
};

export default CreateManagementPage;
