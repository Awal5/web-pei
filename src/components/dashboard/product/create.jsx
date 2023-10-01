import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "@/css/editor.css";
import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { navigate, Link } from "gatsby";
import { createProduct } from "@/data";
import useInput from "@/hooks/useInput";
import toolbar from "@/config/toolbar";
import Toasted from "@/components/atoms/Toast";

const CreateProduct = () => {
  // Initialize editor state
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  // Initialize input state for name
  const [name, onNameChange] = useInput();
  // Initialize state for image
  const [image, setImage] = useState();

  // Update editor state when editor content changes
  const onEditorStateChange = newEditorState => {
    setEditorState(newEditorState);
  };

  // Update image state when image is selected
  const onImgChange = e => {
    setImage(e.target.files[0]);
  };

  // Convert editor content to HTML string
  const content = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
  const description = draftToHtml(JSON.parse(content));

  // Create form data with product details
  const formData = new FormData();
  formData.append("name", name);
  formData.append("image", image);
  formData.append("description", description);

  // Submit product data
  const onSubmitProduct = async e => {
    e.preventDefault();

    try {
      // Call createProduct API and display success message
      await createProduct(formData).then(() =>
        Toasted("Produk Berhasil Ditambahkan", "", "success")
      );
    } catch (error) {
      console.log(error);
    }

    // Reset image and editor state
    setImage(null);
    setEditorState(EditorState.createEmpty());

    // Navigate to "/dashboard/products"
    await navigate("/dashboard/products");
  };

  return (
    <>
      <Link to="/dashboard/products" className="btn btn-secondary mt-4">
        <i className="bi bi-arrow-left"></i> &nbsp;Kembali
      </Link>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h1">Tambah Produk</h1>
      </div>
      <Form className="mt-4" encType="multipart/form-data">
        <Form.Group className="my-3">
          <Form.Label>Nama Produk</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan Judul Product"
            id="name"
            required
            onChange={onNameChange}
            value={name}
          />
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>Gambar Produk</Form.Label>
          <Form.Control
            type="file"
            accept="image"
            id="image"
            name="image"
            required
            onChange={e => onImgChange(e)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Deskripsi Produk</Form.Label>
          <Editor
            toolbar={toolbar}
            editorState={editorState}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            placeholder="Isi Deskripsi Product"
            onEditorStateChange={onEditorStateChange}
          />
        </Form.Group>
        <Button type="submit" className="mt-3" onClick={onSubmitProduct}>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CreateProduct;
