import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "@/css/editor.css";
import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import useInput from "@/hooks/useInput";
import { createArticle } from "@/data";
import { navigate, Link } from "gatsby";
import toolbar from "@/config/toolbar";
import Toasted from "@/components/atoms/Toast";

const CreateArticle = () => {
  // State variables
  const [title, onTitleChange] = useInput(); // Title of the article
  const [images, setImages] = useState([]); // Array of selected images
  const [category, onCategoryChange] = useInput(); // Category of the article
  const [editorState, setEditorState] = useState(EditorState.createEmpty()); // Current state of the text editor

  // Event handler for image selection
  const onImgChange = e => {
    setImages(e.target.files);
  };

  // Event handler for text editor state change
  const onEditorStateChange = newEditorState => {
    setEditorState(newEditorState);
  };

  // Convert editor content to HTML and JSON string
  const content = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
  const description = draftToHtml(JSON.parse(content));

  // Create a new FormData object
  const formData = new FormData();
  formData.append("title", title); // Add title to the form data

  // Add images to the form data
  for (var i = 0; i < images.length; i++) {
    formData.append(`images`, images[i]);
  }

  formData.append("category", category); // Add category to the form data
  formData.append("description", description); // Add description to the form data

  // Event handler for form submission
  const onSubmitHandler = async e => {
    e.preventDefault();

    try {
      // Call the createArticle function with the form data and handle the response
      await createArticle(formData).then(() =>
        Toasted("Artikel berhasil dibuat", "", "success")
      );
    } catch (error) {
      console.log(error);
    }

    // Navigate to the articles dashboard after successful submission
    navigate("/dashboard/articles");
  };

  return (
    <>
      <Link to="/dashboard/articles" className="btn btn-secondary mt-4">
        <i className="bi bi-arrow-left"></i> &nbsp;Kembali
      </Link>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h1">Buat Artikel</h1>
      </div>
      <Form
        className="mt-4"
        onSubmit={onSubmitHandler}
        encType="multipart/form-data"
      >
        <Form.Group className="my-3">
          <Form.Label>Judul</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan Judul Article"
            required
            onChange={onTitleChange}
            value={title}
          />
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>Gambar Artikel</Form.Label>
          <Form.Control
            type="file"
            accept="images"
            name="images"
            required
            onChange={onImgChange}
            multiple
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Kategori Artikel</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan Kategori.."
            onChange={onCategoryChange}
            value={category}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Deskripsi Artikel</Form.Label>
          <Editor
            toolbar={toolbar}
            editorState={editorState}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            placeholder="Isi Deskripsi Artikel"
            onEditorStateChange={onEditorStateChange}
          />
        </Form.Group>
        <Form.Group>
          <Button type="submit">Submit</Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default CreateArticle;
