import React, { Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogSidebar from "@/components/blog/blog-sidebar";
import Loading from "../atoms/Loading";
import SinglePostCard from "@/components/single-post-card";

// component yang berpagingsi menampilkan detail berita
const BlogDetails = ({ articles, article, loading }) => {
  return (
    <section className="commonSection blogDetails">
      <Container>
        <Row>
          <Col lg={8}>
            <SinglePostCard article={article} loading={loading} />
          </Col>
          <Col lg={4}>
            <BlogSidebar articles={articles} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogDetails;
