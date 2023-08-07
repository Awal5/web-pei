import React from "react";
import { Container, Image } from "react-bootstrap";
import { Link } from "gatsby";
import parse from "html-react-parser";

const DetailProduct = props => {
  const { product } = props;

  return (
    <Container>
      <Link to="/dashboard/products" className="btn btn-secondary mt-4">
        <i className="bi bi-arrow-left"></i> &nbsp;Kembali
      </Link>
      <h1 className="my-4 border-bottom pb-2">{product.name}</h1>
      <div className="d-flex justify-content-center">
        <Image
          src={`http://localhost:4000/images/${product.image}`}
          className="w-50"
          fluid
          rounded
        />
      </div>
      <div className="mt-4 pt-3">{parse(product.description)}</div>
    </Container>
  );
};

export default DetailProduct;
