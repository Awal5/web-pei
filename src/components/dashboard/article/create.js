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
  const [title, onTitleChange] = useInput();
  const [images, setImages] = useState([]);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onImgChange = e => {
    setImages(e.target.files);
  };

  const onEditorStateChange = newEditorState => {
    setEditorState(newEditorState);
  };
  const content = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
  const description = draftToHtml(JSON.parse(content));

  const formData = new FormData();
  formData.append("title", title);

  for (var i = 0; i < images.length; i++) {
    formData.append(`images`, images[i]);
  }

  formData.append("description", description);

  const onSubmitHandler = async e => {
    e.preventDefault();
    try {
      await createArticle(formData).then(() =>
        Toasted("Artikel berhasil dibuat", "", "success")
      );
    } catch (error) {
      console.log(error);
    }
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
