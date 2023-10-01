import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "@/css/editor.css";
import {
  EditorState,
  ContentState,
  convertFromHTML,
  convertToRaw,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
import { navigate, Link } from "gatsby";
import { updateProduct, getProductBySlug } from "@/data";
import toolbar from "@/config/toolbar";
import Loading from "@/components/atoms/Loading";

const EditProduct = ({ slug }) => {
  // State variables
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(true);

  // Fetch product details on component mount
  useEffect(() => {
    const getDetailProduct = async () => {
      const data = await getProductBySlug(slug);

      // Set the product name
      setName(data.name);

      // Convert HTML description to editor content state
      const contentBlock = convertFromHTML(data.description);
      const contentState = ContentState.createFromBlockArray(contentBlock);
      setEditorState(EditorState.createWithContent(contentState));

      // Stop loading
      setLoading(false);
    };

    getDetailProduct();
  }, [slug]);

  // Clear file input when image state changes
  useEffect(() => {
    if (image) {
      document.getElementById("image").value = "";
    }
  }, [image]);

  // Event handlers
  const onNameChange = e => {
    setName(e.target.value);
  };

  const onEditorStateChange = newEditorState => {
    setEditorState(newEditorState);
  };

  const onImgChange = e => {
    setImage(e.target.files[0]);
  };

  // Convert editor content to HTML
  const content = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
  const description = draftToHtml(JSON.parse(content));

  // Create form data
  const formData = new FormData();
  formData.append("name", name);
  if (image) {
    formData.append("image", image);
  }
  formData.append("description", description);

  // Update the product
  const onUpdateProduct = async e => {
    e.preventDefault();

    try {
      await updateProduct({ slug, formData });
    } catch (error) {
      console.log(error);
    }

    navigate("/dashboard/products");
  };

  // Render loading state
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Link to="/dashboard/products" className="btn btn-secondary mt-4">
        <i className="bi bi-arrow-left"></i> &nbsp;Kembali
      </Link>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h1">Edit Produk</h1>
      </div>
      <Form className="mt-4" encType="multipart/form-data">
        <Form.Group className="my-3">
          <Form.Label>Nama Produk</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan Judul Product"
            id="name"
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
            placeholder="masukkan gambar"
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
        <Button type="submit" onClick={onUpdateProduct} className="mt-3">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default EditProduct;
