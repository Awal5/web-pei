import React, { useEffect, useState } from "react";
import Dashboard from "..";
import { Container } from "react-bootstrap";
import DetailProduct from "@/components/dashboard/product/detail";
import { getProductBySlug, deleteProduct } from "@/data";
import Loading from "@/components/atoms/Loading";
import Swal from "sweetalert2";
import { navigate } from "gatsby";

const ProductDetail = props => {
  // mengambil slug dari props url
  const { slug } = props.params;
  // deklarasi state
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // fetch data product dan detail product saat component di mount
  useEffect(() => {
    const getDetailProduct = async () => {
      const data = await getProductBySlug(slug);
      if (data) {
        setProduct(data);
        setLoading(false);
      }
    };
    try {
      getDetailProduct();
    } catch (error) {
      console.log("error: ", error);
    }
  }, [slug]);

  // fungsi hapus product
  function removeProduct(slug) {
    Swal.fire({
      title: "Konfirmasi Hapus !",
      text: "Apakah anda yakin ingin menghapus Produk ini ?",
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
        deleteProduct(slug)
          .then(() => {
            Swal.fire("Dihapus", "", "success");
          })
          .then(() => navigate("/dashboard/products"));
      } else if (result.isDismissed) {
        Swal.fire("Dibatalkan", "", "error");
      }
    });
  }

  return (
    <Dashboard>
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <DetailProduct product={product} onDelete={removeProduct} />
        )}
      </Container>
    </Dashboard>
  );
};

export default ProductDetail;
