import React, { useEffect, useState } from "react";
import Dashboard from "..";
import { Container } from "react-bootstrap";
import DetailArticle from "@/components/dashboard/article/detail";
import { getArticleBySlug, deleteArticle } from "@/data";
import Swal from "sweetalert2";
import { navigate } from "gatsby";

const ProductDetail = props => {
  // mengambil slug dari props url
  const { slug } = props.params;

  // deklarasi state
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  // fetch data article dan detail article saat component di mount
  useEffect(() => {
    const getDetailArticle = async () => {
      const data = await getArticleBySlug(slug);
      if (data) {
        setArticle(data);
        setLoading(false);
      }
    };
    try {
      getDetailArticle();
    } catch (error) {
      console.log("error: ", error);
    }
  }, [slug]);

  // fungsi hapus article
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
            .then(() => navigate("/dashboard/articles"));
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
      <Container>
        <DetailArticle
          article={article}
          loading={loading}
          onDelete={removeArticle}
        />
      </Container>
    </Dashboard>
  );
};

export default ProductDetail;
