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
  const [title, setTitle] = useState(""); // Title state
  const [images, setImages] = useState([]); // Images state
  const [category, setCategory] = useState(""); // Category state
  const [editorState, setEditorState] = useState(EditorState.createEmpty()); // Editor state
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetch article details by slug
    const getDetailArticle = async () => {
      try {
        const data = await getArticleBySlug(slug);
        setTitle(data.title); // Set title from fetched data
        setImages(data.images); // Set images from fetched data
        setCategory(data.category); // Set category from fetched data
        const contentBlock = convertFromHTML(data.description); // Convert HTML description to content block
        const contentState = ContentState.createFromBlockArray(contentBlock); // Create content state from content block
        setEditorState(EditorState.createWithContent(contentState)); // Set editor state with content state
        setLoading(false); // Set loading to false
      } catch (error) {
        console.log(error);
      }
    };
    getDetailArticle();
  }, [slug]);

  useEffect(() => {
    // Reset images when images state changes
    if (images > 0) {
      document.getElementById("images").value = [];
    }
  }, [images]);

  const onTitleChange = e => {
    setTitle(e.target.value); // Update title state on input change
  };

  const onCategoryChange = e => {
    setCategory(e.target.value); // Update category state on input change
  };

  const onImgChange = e => {
    const fileList = e.target.files;
    const imageArray = Array.from(fileList);
    setImages(imageArray); // Update images state on file input change
  };

  const onEditorStateChange = newEditorState => {
    setEditorState(newEditorState); // Update editor state on editor state change
  };

  const content = JSON.stringify(convertToRaw(editorState.getCurrentContent())); // Convert editor content to JSON string
  const description = draftToHtml(JSON.parse(content)); // Convert JSON string to HTML description

  const formData = new FormData();
  formData.append("title", title); // Append title to form data

  if (images) {
    images.forEach(image => {
      formData.append("images", image); // Append each image to form data
    });
  }

  formData.append("category", category); // Append category to form data
  formData.append("description", description); // Append description to form data

  const onUpdateHandler = async e => {
    e.preventDefault();
    try {
      await updateArticle({ slug, formData }); // Update article with form data
    } catch (error) {
      console.log(error);
    }

    navigate("/dashboard/articles"); // Navigate to articles dashboard after update
  };

  if (loading) {
    return <Loading />; // Show loading component while loading
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
          <Button type="submit" onClick={onUpdateHandler}>
            Submit
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default EditArticle;
