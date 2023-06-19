import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import useInput from "@/hooks/useInput";

const CreateManagement = ({ CreateManagement }) => {
  const [name, setName] = useInput();
  const [image, setImage] = useInput();
  const [position, setPosition] = useInput();
  const [description, setDescription] = useInput();
  const [facebook, setFacebook] = useInput();
  const [twitter, setTwitter] = useInput();
  const [linkedin, setLinkedin] = useInput();

  const onNameChange = e => {
    setName(e.target.value);
  };
  const onImgChange = e => {
    setImage(e.target.files[0]);
  };
  const onPositionChange = e => {
    setPosition;
  };

  const onCreateProduct = async e => {
    e.preventDefault();
    const content = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );
    const html = draftToHtml(JSON.parse(content));
    const formData = new FormData();
    formData.append("nama_produk", nama_produk);
    formData.append("image", image);
    formData.append("deskripsi_produk", html);
    try {
      await createProduct({ formData });
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h1">Add Management</h1>
      </div>
      <Form
        className="mt-4"
        encType="multipart/form-data"
        onSubmit={onCreateProduct}
      >
        <Form.Group className="my-3">
          <Form.Label>Nama Produk</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan Judul Product"
            required
            onChange={e => onTitleChange(e)}
            value={nama_produk}
          />
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>Gambar Produk</Form.Label>
          <input type="file" required onChange={e => onImgChange(e)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Deskripsi Direksi</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan Deskripsi Direksi"
            required
          />
        </Form.Group>
        <Button type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CreateManagement;
