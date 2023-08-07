import React, { useEffect, useState } from "react";
import Dashboard from "..";
import { Container } from "react-bootstrap";
import DetailProduct from "@/components/dashboard/product/detail";
import { getProductBySlug } from "@/data";
import Loading from "@/components/atoms/Loading";

const ProductDetail = props => {
  const { slug } = props.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

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

  return (
    <Dashboard>
      <Container>
        {loading ? <Loading /> : <DetailProduct product={product} />}
      </Container>
    </Dashboard>
  );
};

export default ProductDetail;
