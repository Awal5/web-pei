import React, { useState, useEffect } from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import ProtfolioDetails from "@/components/portofolio/protfolio-details";
import RelatedPortfolio from "@/components/portofolio/related-portfolio";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header/header-one";
import { getProductBySlug, getProducts } from "@/data";
import Loading from "@/components/atoms/Loading";

const PortfolioDetailsPage = props => {
  // mengambil slug dari props url
  const { slug } = props.params;

  // deklarasi state
  const [product, setProduct] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch data product dan detail product saat component di mount
  useEffect(() => {
    getDetailSlug();
    getAllProducts();
  }, [slug]);

  // fungsi fetch detail product
  async function getDetailSlug() {
    try {
      const data = await getProductBySlug(slug);
      if (data) {
        setProduct(data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  }

  // fungsi fetch semua products
  async function getAllProducts() {
    try {
      const { data } = await getProducts();
      if (data) {
        setProducts(data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  }
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Portfolio Details Page">
          <HeaderOne />
          <PageBanner title="Produk Detail" name="Produk" slug={slug} />
          {loading ? <Loading /> : <ProtfolioDetails product={product} />}

          <RelatedPortfolio products={products} loading={loading} />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default PortfolioDetailsPage;
