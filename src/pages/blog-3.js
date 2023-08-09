import React, { useState, useEffect } from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import BlogThree from "@/components/blog/blog-three";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header/header-one";
import { getArticles } from "@/data";

const BlogThreePage = () => {
  const [article, setArticle] = useState([]);
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
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Blog 03 Page">
          <HeaderOne />
          <PageBanner title="Blog 03" name="Blog" />
          <BlogThree articles={article} loading={loading} />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default BlogThreePage;
