import React, { useEffect, useState } from "react";
import Axios from "axios";
import ArticleDetailed from "@/components/article/article-detail";

const ArticleDetail = props => {
  // const { encryptedId } = props.pageContext.encryptedId;
  // const [article, setArticle] = useState("");

  // useEffect(() => {
  //   const getArticleById = async () => {
  //     await Axios.get(
  //       `http://localhost:4000/blog/articles/decrypt/${encryptedId}`
  //     ).then(res => {
  //       const result = res.data;
  //       console.log(result);
  //       setArticle(result);
  //     });
  //   };
  //   getArticleById(id);
  // }, [encryptedId]);
  return (
    <div>
      <ArticleDetailed data={article} />
      <h1>hello wrodl</h1>
    </div>
  );
};

export default ArticleDetail;
