import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "@/css/editor.css";
import {
  convertToRaw,
  EditorState,
  convertFromHTML,
  ContentState,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
import { updateArticle, getArticleBySlug } from "@/data";
import { navigate, Link } from "gatsby";
import toolbar from "@/config/toolbar";
import Loading from "@/components/atoms/Loading";

const EditArticle = ({ slug }) => {
  const [title, setTitle] = useState("");
  const [images, setImages] = useState([]);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDetailArticle = async () => {
      try {
        const data = await getArticleBySlug(slug);
        setTitle(data.title);
        setImages(data.images);
        const contentBlock = convertFromHTML(data.description);
        const contentState = ContentState.createFromBlockArray(contentBlock);
        setEditorState(EditorState.createWithContent(contentState));
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getDetailArticle();
  }, [slug]);

  useEffect(() => {
    if (images > 0) {
      document.getElementById("images").value = [];
    }
  }, [images]);

  const onTitleChange = e => {
    setTitle(e.target.value);
  };
  const onImgChange = e => {
    const fileList = e.target.files;
    const imageArray = Array.from(fileList);
    setImages(imageArray);
  };

  const onEditorStateChange = newEditorState => {
    setEditorState(newEditorState);
  };
  const content = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
  const description = draftToHtml(JSON.parse(content));

  const formData = new FormData();
  formData.append("title", title);

  if (images) {
    images.forEach(image => {
      formData.append("images", image);
    });
  }

  formData.append("description", description);
  const formImage = formData.get("images");
  console.log("formImage: ", formImage);
  const onUpdateHandler = async e => {
    e.preventDefault();
    try {
      await updateArticle({ slug, formData });
    } catch (error) {
      console.log(error);
    }
    // console.log("Kondisi state setelah dikirim: ", {
    //   title,
    //   images,
    //   description,
    // });
    navigate("/dashboard/articles");
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Link to="/dashboard/articles" className="btn btn-secondary mt-4">
        <i className="bi bi-arrow-left"></i> &nbsp;Kembali
      </Link>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h1">Edit Artikel</h1>
      </div>
      <Form className="mt-4" encType="multipart/form-data">
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
            id="images"
            name="images"
            required
            onChange={e => onImgChange(e)}
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
          <Button type="submit" onClick={onUpdateHandler}>
            Submit
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default EditArticle;
