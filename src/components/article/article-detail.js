import React from "react";

const ArticleDetailed = ({ data }) => {
  const { title, image, description } = data;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default ArticleDetailed;
