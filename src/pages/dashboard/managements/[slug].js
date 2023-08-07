import React, { useEffect, useState } from "react";
import Dashboard from "..";
import { Container } from "react-bootstrap";
import DetailManagement from "@/components/dashboard/management/detail";
import { getManagementBySlug } from "@/data";
import Loading from "@/components/atoms/Loading";

const ProductDetail = props => {
  const { slug } = props.params;
  const [management, setManagement] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDetailManagement = async () => {
      const data = await getManagementBySlug(slug);
      if (data) {
        setManagement(data);
        setLoading(false);
      }
    };
    try {
      getDetailManagement();
    } catch (error) {
      console.log("error: ", error);
    }
  }, [slug]);

  return (
    <Dashboard>
      <Container>
        {loading ? <Loading /> : <DetailManagement management={management} />}
      </Container>
    </Dashboard>
  );
};

export default ProductDetail;
