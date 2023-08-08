import React, { useState, useEffect } from "react";
import MainArticle from "@/components/dashboard/article/main-article";
import Dashboard from "..";
import { getArticles, deleteArticle } from "@/data";
import Swal from "sweetalert2";

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
      Swal.fire({
        title: "Konfirmasi Hapus !",
        text: "Apakah anda yakin ingin menghapus Artikel ini ?",
        showCancelButton: true,
        confirmButtonColor: "#00bf06",
        cancelButtonColor: "#f01202",
        focusConfirm: false,
        allowOutsideClick: false,
        icon: "warning",
        confirmButtonText: "Ya",
        cancelButtonText: "Batal",
      }).then(result => {
        if (result.isConfirmed) {
          deleteArticle(slug)
            .then(() => {
              Swal.fire("Artikel Dihapus", "", "success");
            })
            .then(() => getArticle());
        } else if (result.isDismissed) {
          Swal.fire("Dibatalkan", "", "error");
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Dashboard>
      <MainArticle
        articles={article}
        errors={error}
        loading={loading}
        onDelete={removeArticle}
      />
    </Dashboard>
  );
};

export default ArticlesPages;
