import React, { useState, useEffect } from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import BlogDetails from "@/components/blog/blog-details";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderTwo from "@/components/header/header-two";
import { getArticleBySlug, getArticles } from "@/data";

// class blog single page
const BlogSinglePage = props => {
  // parameter slug dari props parameter
  const { slug } = props.params;

  // state
  const [article, setArticle] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // useEffect data
  useEffect(() => {
    getAllArticles();
    getDetailArticle();
  }, [slug]);

  // get semua data
  async function getAllArticles() {
    try {
      const { data } = await getArticles();
      if (data) {
        setArticles(data);
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  // get detail artikel
  const getDetailArticle = async () => {
    try {
      const data = await getArticleBySlug(slug);
      if (data) {
        setArticle(data);
        setLoading(false);
      }
    } catch (err) {
      console.log("err:", err);
    }
  };

  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle={`${article.title}`}>
          <HeaderTwo />
          <PageBanner title="Berita" name="Berita" slug={slug} />
          <BlogDetails
            articles={articles}
            article={article}
            loading={loading}
            error={error}
          />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default BlogSinglePage;
