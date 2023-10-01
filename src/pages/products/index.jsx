import React, { useState, useEffect } from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import PortfolioOne from "@/components/portofolio/portfolio-one";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderTwo from "@/components/header/header-two";
import { getProducts } from "@/data";

const PortfolioPage = () => {
  // deklarasi state
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // fetch data products saat component di mount
  useEffect(() => {
    getAllProducts();
  }, []);

  // fungsi fetch semua products
  async function getAllProducts() {
    try {
      const { data } = await getProducts();
      if (data) {
        setProduct(data);
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Produk">
          <HeaderTwo />
          <PageBanner title="Bisnis Kami" name="Produk" />

          <PortfolioOne products={product} loading={loading} error={error} />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default PortfolioPage;
