import React from "react";
import { Container } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";
import Form from "react-bootstrap/Form";
import { Link } from "gatsby";

const DetailManagement = props => {
  const { management } = props;

  return (
    <Container>
      <Link to="/dashboard/managements" className="btn btn-secondary mt-4">
        <i className="bi bi-arrow-left"></i> &nbsp;Kembali
      </Link>
      <div className="w-100 d-flex justify-content-center flex-column mt-4 pt-4">
        <Figure className="mx-auto">
          <Figure.Image
            width={300}
            height={300}
            alt={management.name}
            src={`http://localhost:4000/images/${management.image}`}
            className="rounded shadow"
          />
          <Figure.Caption className="text-center fs-4 fw-bold">
            {management.name}
          </Figure.Caption>
        </Figure>

        <Form.Group>
          <Form.Label>Jabatan Direksi</Form.Label>
          <Form.Control
            type="text"
            defaultValue={management.position}
            readOnly
          />

          <Form.Label className="mt-3">Deskripsi</Form.Label>
          <Form.Control
            as="textarea"
            style={{ height: "100px" }}
            defaultValue={management.description}
            readOnly
          />
        </Form.Group>
        <ul className="mt-3 d-flex flex-row justify-content-end gap-3">
          <li>
            <Link to={`https://www.facebook.com/${management.facebook}`}>
              <i class="bi bi-facebook"></i>
            </Link>
          </li>
          <li>
            <Link to={`https://www.twitter.com/${management.twitter}`}>
              <i class="bi bi-twitter"></i>
            </Link>
          </li>
          <li>
            <Link to={`https://www.linkedin.com/${management.linkedin}`}>
              <i class="bi bi-linkedin"></i>
            </Link>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default DetailManagement;
