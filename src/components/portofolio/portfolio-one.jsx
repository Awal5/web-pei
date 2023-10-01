import React from "react";

import PortfolioCard from "@/components/portofolio/portfolio-card";

const PortfolioOne = ({ products }) => {
  return (
    <section
      className="commonSection porfolioPage"
      style={{ background: "#181a1cff" }}
    >
      <h1 className="text-center text-white fw-semibold">Produk Kami</h1>
      <Row id="Grid">
        <div className="custom">
          <Row>
            {products.map(product => (
              <Col lg={3} md={6} sm={12} key={product.id}>
                <PortfolioCard data={product} />
              </Col>
            ))}
          </Row>
        </div>
      </Row>
    </section>
  );
};

export default PortfolioOne;
