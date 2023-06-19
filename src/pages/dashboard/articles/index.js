import React, { useState, useEffect } from "react";
import MainArticle from "@/components/dashboard/article/main-article";
import Dashboard from "..";
import { getArticles } from "@/data";

const ArticlesPages = () => {
  const [article, setArticle] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function getArticle() {
      try {
        const { data } = await getArticles();
        if (data) {
          setArticle(data);
        }
      } catch (error) {
        setError(error.message);
      }
    }
    getArticle();
  }, []);
  return (
    <Dashboard>
      <MainArticle articles={article} errors={error} />
    </Dashboard>
  );
};

export default ArticlesPages;
