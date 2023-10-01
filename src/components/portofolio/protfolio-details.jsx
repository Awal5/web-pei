import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import parse from "html-react-parser";

const ProtfolioDetails = ({ product }) => {
  // desctructuring props product
  const { name, description, image } = product;

  return (
    <section className="commonSection porfolioDetail">
      <Container>
        <Row>
          <Col lg={8} md={7} sm={12}>
            <div className="portDetailThumb">
              <Image
                alt="portDetailThumb"
                src={`http://localhost:4000/images/${image}`}
                className="img-fluid"
              />
            </div>
          </Col>
          <Col lg={4} md={5} sm={12}>
            <div className="singlePortfoio_content">
              <h3>{name}</h3>
              <p>{parse(description)}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProtfolioDetails;
