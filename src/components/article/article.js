import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "gatsby";

const Article = ({ articles }) => {
  return (
    <div>
      {articles.map((article, index) => {
        return (
          <Card key={article.id} style={{ width: "18rem" }}>
            <small>{index + 1}</small>
            <Card.Img
              variant="top"
              src={`http://localhost:4000/${article.image}`}
            />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Text>{article.description}</Card.Text>
              <Link to={`/articlesDetail/${article.id}`}>View More</Link>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default Article;
