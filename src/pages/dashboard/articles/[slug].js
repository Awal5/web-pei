import React, { useEffect, useState } from "react";
import Dashboard from "..";
import { Container } from "react-bootstrap";
import DetailArticle from "@/components/dashboard/article/detail";
import { getArticleBySlug } from "@/data";

const ProductDetail = props => {
  const { slug } = props.params;

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

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

  return (
    <Dashboard>
      <Container>
        <DetailArticle article={article} loading={loading} />
      </Container>
    </Dashboard>
  );
};

export default ProductDetail;
