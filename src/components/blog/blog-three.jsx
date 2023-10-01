import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import BlogSidebar from "@/components/blog/blog-sidebar";
import BlogCard from "@/components/blog/blog-card";

// component yang berfungsi menampilkan di menu berita
const BlogThree = ({ articles, loading }) => {
  // sort data berdasar waktu terbaru
  const recentArticles = articles.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  return (
    <section className="commonSection blogPage">
      <Container>
        <Row className="">
          <Col lg={8} sm={8}>
            <Row>
              {articles.map(article => (
                <Col lg={10} sm={12} md={6} key={article.id}>
                  <BlogCard data={article} />
                </Col>
              ))}
            </Row>
          </Col>
          <Col lg={4} sm={4}>
            <BlogSidebar articles={recentArticles} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogThree;
