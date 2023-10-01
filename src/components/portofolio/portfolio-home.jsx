import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../section-title";
import PortfolioCard from "@/components/portofolio/portfolio-card";
import { PortfolioHomeData } from "@/data";

const PortfolioHome = ({ products }) => {
  // desctructuring props portofolioHomeData
  const { sectionContent } = PortfolioHomeData;
  return (
    <section className="commonSection testimonial">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <SectionTitle data={sectionContent} />
          </Col>
        </Row>
        <Row id="Grid">
          <div className="custom">
            <Row>
              {/* looping props product */}
              {products.map(product => (
                <Col lg={4} md={6} sm={12} key={product.id}>
                  <PortfolioCard data={product} />
                </Col>
              ))}
            </Row>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default PortfolioHome;
