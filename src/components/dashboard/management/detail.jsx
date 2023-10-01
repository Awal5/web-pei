import React from "react";
import { Container, Button } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";
import Form from "react-bootstrap/Form";
import { Link } from "gatsby";
import parse from "html-react-parser";

const DetailManagement = props => {
  // Destructure props
  const { management, onDelete } = props;

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
          <Form.Label>Jabatan Manajemen</Form.Label>
          <Form.Control
            type="text"
            defaultValue={management.position}
            readOnly
          />

          <Form.Label className="mt-3">Deskripsi</Form.Label>
          <div className="w-100 border border-1 p-2 rounded text-black">
            {parse(management.description)}
          </div>
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
      <div className="py-3">
        <Link
          to={`/dashboard/managements/edit/${management.slug}`}
          className="btn btn-warning mx-3"
        >
          Edit <i className="bi bi-pencil-square"></i>
        </Link>
        <Button
          type="button"
          className="btn btn-danger"
          onClick={() => onDelete(management.slug)}
        >
          Hapus <i className="bi bi-trash"></i>
        </Button>
      </div>
    </Container>
  );
};

export default DetailManagement;
