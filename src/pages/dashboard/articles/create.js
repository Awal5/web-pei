import React from "react";
import CreateArticle from "@/components/dashboard/article/create";
import { Container } from "react-bootstrap";
import Dashboard from "..";

const CreatePage = () => {
  return (
    <Dashboard>
      <Container>
        <CreateArticle />
      </Container>
    </Dashboard>
  );
};

export default CreatePage;
