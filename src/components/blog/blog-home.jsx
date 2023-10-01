import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@/components/section-title";
import BlogCarousel from "@/components/blog/blog-carousel";
import { BlogHomeSection } from "@/data";

// component yang berfungsi menampilkan berita di home
const BlogHome = ({ articles }) => {
  return (
    <section className="commonSection blog">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <SectionTitle data={BlogHomeSection} />
          </Col>
        </Row>
        <Row>
          {articles.slice(0, 3).map(article => (
            <Col lg={4} sm={12} md={6} key={article.id}>
              <BlogCarousel data={article} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BlogHome;
