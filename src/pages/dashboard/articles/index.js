import React, { useState, useEffect } from "react";
import MainArticle from "@/components/dashboard/article/main-article";
import Dashboard from "..";
import { getArticles, deleteArticle } from "@/data";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const ArticlesPages = () => {
  const [article, setArticle] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticle();
  }, []);

  async function getArticle() {
    try {
      const { data } = await getArticles();
      if (data) {
        setArticle(data);
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  async function removeArticle(slug) {
    try {
      await deleteArticle(slug).then(() => getArticle());
    } catch (error) {
      console.log(error);
    }
  }

  function confirmDelete(slug) {
    confirmAlert({
      title: "Delete Article",
      message: "Apakah anda yakin ingin menghapus?",
      buttons: [
        {
          label: "Cancel",
        },
        {
          label: "Delete",
          onClick: () => {
            removeArticle(slug);
          },
        },
      ],
    });
  }

  return (
    <Dashboard>
      <MainArticle
        articles={article}
        errors={error}
        loading={loading}
        onDelete={confirmDelete}
      />
    </Dashboard>
  );
};

export default ArticlesPages;
