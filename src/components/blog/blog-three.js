import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import BlogSidebar from "@/components/blog/blog-sidebar";
import Paginations from "@/components/paginations";
import { BlogData } from "@/data";
import BlogCard from "@/components/blog/blog-card";

const BlogThree = ({ articles, loading }) => {
  return (
    <section className="commonSection blogPage">
      <Container>
        <Row>
          <Col lg={8} sm={8}>
            <Row>
              {articles.map(article => (
                <Col lg={8} sm={12} md={6} key={article.id}>
                  <BlogCard data={article} />
                </Col>
              ))}
            </Row>
            <Paginations />
          </Col>
          <Col lg={4} sm={4}>
            <BlogSidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogThree;
