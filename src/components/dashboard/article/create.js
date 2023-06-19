import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "@/css/editor.css";
import Axios from "axios";

const CreateArticle = () => {
  const [editorState, setEditorState] = useState();
  const [title, setTitle] = useState("");
  const [img, setImg] = useState();

  const onEditorStateChange = editorState => {
    setEditorState(editorState);
  };

  const onImgChange = () => {
    setImg(img);
  };

  const onTitleChange = () => {
    setTitle(title);
  };

  const onSubmitHandler = () => {
    // useEffect(() => {
    //   async function createArticle() {
    //     try {
    //       const response = await Axios.post("https://4000/articles/create", {
    //         data: {
    //           title,
    //           img,
    //           editorState,
    //         },
    //       });
    //     }
    //   }
    // });
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
        <h1 className="h1">Create Article</h1>
      </div>
      <Form className="mt-4">
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
          <Form.File required onChange={onImgChange} />
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
        <Button type="submit" onClick={onSubmitHandler}>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CreateArticle;
