import React from "react";
import { Container, Image, Button } from "react-bootstrap";
import { Link } from "gatsby";
import parse from "html-react-parser";

const DetailProduct = props => {
  //desctructuring props
  const { product, onDelete } = props;

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
      <div>
        <Link
          to={`/dashboard/products/edit/${product.slug}`}
          className="btn btn-warning mx-3"
        >
          Edit <i className="bi bi-pencil-square"></i>
        </Link>
        <Button
          type="button"
          className="btn btn-danger"
          onClick={() => onDelete(product.slug)}
        >
          Hapus <i className="bi bi-trash"></i>
        </Button>
      </div>
    </Container>
  );
};

export default DetailProduct;
