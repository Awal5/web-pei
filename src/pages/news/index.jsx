import React, { useState, useEffect } from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import BlogThree from "@/components/blog/blog-three";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import { getArticles } from "@/data";
import HeaderTwo from "@/components/header/header-two";

const BlogThreePage = () => {
  // state
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch data article
  useEffect(() => {
    getArticle();
  }, []);

  // fungsi fetch all Article
  async function getArticle() {
    try {
      const { data } = await getArticles();
      // jika data ada, set ke state
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
        <Layout PageTitle="Berita">
          <HeaderTwo />
          <PageBanner title="Berita" name="berita" />
          <BlogThree articles={article} loading={loading} />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default BlogThreePage;
