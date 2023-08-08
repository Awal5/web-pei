import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import useInput from "@/hooks/useInput";
import { createManagement } from "@/data";
import { navigate, Link } from "gatsby";
import Toasted from "@/components/atoms/Toast";

const CreateManagement = () => {
  const [name, onNameChange] = useInput();
  const [image, setImage] = useState();
  const [position, onPositionChange] = useInput();
  const [description, onDescriptionChange] = useInput();
  const [facebook, onFacebookChange] = useInput();
  const [twitter, onTwitterChange] = useInput();
  const [linkedin, onLinkedinChange] = useInput();

  const onImgChange = e => {
    setImage(e.target.files[0]);
  };

  const formData = new FormData();
  formData.append("name", name);
  formData.append("image", image);
  formData.append("position", position);
  formData.append("description", description);
  formData.append("facebook", facebook);
  formData.append("twitter", twitter);
  formData.append("linkedin", linkedin);
  const onCreateManagement = async e => {
    e.preventDefault();
    try {
      await createManagement(formData).then(() =>
        Toasted("Direksi Berhasil Ditambahkan", "", "success")
      );
    } catch (error) {
      console.log(error);
    }

    navigate("/dashboard/managements");
  };

  return (
    <>
      <Link to="/dashboard/managements" className="btn btn-secondary mt-4">
        <i className="bi bi-arrow-left"></i> &nbsp;Kembali
      </Link>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h1">Tambah Direksi</h1>
      </div>
      <Form
        className="mt-4"
        encType="multipart/form-data"
        onSubmit={onCreateManagement}
      >
        <Form.Group className="my-3">
          <Form.Label>Nama Direksi</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan Nama Direksi"
            required
            onChange={onNameChange}
            value={name}
          />
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>Gambar Direksi</Form.Label>
          <Form.Control
            type="file"
            accept="image"
            name="image"
            placeholder="Masukkan Image"
            onChange={e => onImgChange(e)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Jabatan Direksi</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan Jabatan Direksi"
            value={position}
            onChange={onPositionChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Deskripsi Direksi</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Masukkan Deskripsi Direksi"
            value={description}
            onChange={onDescriptionChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Social Media Direksi</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              placeholder="Facebook"
              value={facebook}
              onChange={onFacebookChange}
              required
            />
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              placeholder="Twitter"
              value={twitter}
              onChange={onTwitterChange}
              required
            />
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              placeholder="Linkedin"
              value={linkedin}
              onChange={onLinkedinChange}
              required
            />
          </InputGroup>
        </Form.Group>

        <Button type="submit" className="mt-3">
          Tambah
        </Button>
      </Form>
    </>
  );
};

export default CreateManagement;
