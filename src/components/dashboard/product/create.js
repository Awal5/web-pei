import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "@/css/editor.css";
import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";

const CreateProduct = props => {
  const { addProduct } = props;
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [name, setName] = useState("");
  const [image, setImage] = useState();

  const onEditorStateChange = newEditorState => {
    setEditorState(newEditorState);
  };

  const onImgChange = e => {
    setImage(e.target.files[0]);
  };

  const onTitleChange = e => {
    setName(e.target.value);
  };

  const onSubmitProduct = async e => {
    e.preventDefault();
    const content = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );
    const html = draftToHtml(JSON.parse(content));
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);
    formData.append("desc", html);
    const nameFix = formData.get("name");
    const imageFix = formData.get("image");
    const descFix = formData.get("desc");

    const product = { nameFix, imageFix, descFix };
    console.log(product);
    try {
      await addProduct(product);
    } catch (error) {
      console.log(error);
    }
  };
  const toolbar = {
    options: [
      "inline",
      "blockType",
      "fontSize",
      "fontFamily",
      "list",
      "textAlign",
      "link",
      "emoji",
      "history",
    ],
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h1">Create Product</h1>
      </div>
      {/* <Form className="mt-4" encType="multipart/form-data">
        <Form.Group className="my-3">
          <Form.Label>Nama Produk</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan Judul Product"
            required
            onChange={e => onTitleChange(e)}
            value={name}
          />
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>Gambar Produk</Form.Label>

          <Form.File.Input
            type="file"
            accept="image"
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
        <Button type="submit" className="mt-3">
          Submit
        </Button>
      </Form> */}

      <form className="mt-4" encType="multipart/form-data">
        <div className="my-3">
          <label>Nama Produk</label>
          <input
            type="text"
            placeholder="Masukkan Judul Product"
            required
            onChange={e => onTitleChange(e)}
            value={name}
          />
        </div>
        <div className="my-3">
          <label>Gambar Produk</label>
          <input
            type="file"
            accept="image"
            required
            onChange={e => onImgChange(e)}
          />
        </div>
        <div className="my-3">
          <label>description</label>
          <Editor
            toolbar={toolbar}
            editorState={editorState}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            placeholder="Isi Deskripsi Product"
            onEditorStateChange={onEditorStateChange}
          />
        </div>
        <div className="my-3">
          <Button type="submit" className="mt-3" onClick={onSubmitProduct}>
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default CreateProduct;
