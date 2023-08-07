import React from "react";
import EditArticle from "@/components/dashboard/article/edit";
import { Container } from "react-bootstrap";
import Dashboard from "../..";

const EditArticlePage = props => {
  const { slug } = props.params;

  return (
    <Dashboard>
      <Container>
        <EditArticle slug={slug} />
      </Container>
    </Dashboard>
  );
};

export default EditArticlePage;
