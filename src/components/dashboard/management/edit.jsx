import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { updateManagement, getManagementBySlug } from "@/data";
import { navigate, Link } from "gatsby";
import Loading from "@/components/atoms/Loading";
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

// Component for editing management details
const EditManagement = ({ slug }) => {
  // State variables for managing form inputs and editor content
  const [name, setName] = useState(); // Name of the management
  const [image, setImage] = useState(); // Image file
  const [position, setPosition] = useState(); // Position of the management
  const [editorState, setEditorState] = useState(EditorState.createEmpty()); // State of the editor
  const [facebook, setFacebook] = useState(); // Facebook URL
  const [twitter, setTwitter] = useState(); // Twitter URL
  const [linkedin, setLinkedin] = useState(); // LinkedIn URL
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch management details on component mount
  useEffect(() => {
    const getDetailManagement = async () => {
      const data = await getManagementBySlug(slug); // Fetch management data by slug
      setName(data.name); // Set management name
      setPosition(data.position); // Set management position
      setFacebook(data.facebook); // Set Facebook URL
      setTwitter(data.twitter); // Set Twitter URL
      setLinkedin(data.linkedin); // Set LinkedIn URL
      setLoading(false); // Set loading state to false

      // Convert HTML content to editor state
      const contentBlock = convertFromHTML(data.description);
      const contentState = ContentState.createFromBlockArray(contentBlock);
      setEditorState(EditorState.createWithContent(contentState));
    };

    getDetailManagement();
  }, [slug]);

  // Clear image input on image change
  useEffect(() => {
    if (image) {
      document.getElementById("image").value = "";
    }
  }, [image]);

  // Event handler for name input change
  const onNameChange = e => {
    setName(e.target.value);
  };

  // Event handler for image input change
  const onImgChange = e => {
    setImage(e.target.files[0]);
  };

  // Event handler for position input change
  const onPositionChange = e => {
    setPosition(e.target.value);
  };

  // Event handler for editor state change
  const onEditorStateChange = newEditorState => {
    setEditorState(newEditorState);
  };

  // Event handler for Facebook input change
  const onFacebookChange = e => {
    setFacebook(e.target.value);
  };

  // Event handler for Twitter input change
  const onTwitterChange = e => {
    setTwitter(e.target.value);
  };

  // Event handler for LinkedIn input change
  const onLinkedinChange = e => {
    setLinkedin(e.target.value);
  };

  // Convert editor content to HTML
  const content = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
  const description = draftToHtml(JSON.parse(content));

  // Create form data for submission
  const formData = new FormData();
  formData.append("name", name);
  if (image) {
    formData.append("image", image);
  }
  formData.append("position", position);
  formData.append("description", description);
  formData.append("facebook", facebook);
  formData.append("twitter", twitter);
  formData.append("linkedin", linkedin);

  // Update management details
  const onUpdateManagement = async e => {
    e.preventDefault();
    try {
      await updateManagement({ slug, formData }); // Update management with new data
    } catch (error) {
      console.log(error);
    }

    navigate("/dashboard/managements"); // Navigate to management list
  };

  // Render loading indicator if data is still loading
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Link to="/dashboard/managements" className="btn btn-secondary mt-4">
        <i className="bi bi-arrow-left"></i> &nbsp;Kembali
      </Link>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h1">Edit Manajemen</h1>
      </div>
      <Form className="mt-4" encType="multipart/form-data">
        <Form.Group className="my-3">
          <Form.Label>Nama Manajemen</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan Nama Manajemen"
            onChange={onNameChange}
            value={name}
          />
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>Gambar Manajemen</Form.Label>
          <Form.Control
            type="file"
            accept="image"
            name="image"
            id="image"
            placeholder="Masukkan Foto"
            onChange={e => onImgChange(e)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Jabatan Manajemen</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan Jabatan Manajemen"
            value={position}
            onChange={onPositionChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Deskripsi Manajemen</Form.Label>
          <Editor
            toolbar={toolbar}
            editorState={editorState}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            placeholder="Isi Deskripsi Manajemen"
            onEditorStateChange={onEditorStateChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Social Media Manajemen</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              placeholder="Facebook"
              value={facebook ? facebook : "-"}
              onChange={onFacebookChange}
            />
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              placeholder="Twitter"
              value={twitter ? twitter : "-"}
              onChange={onTwitterChange}
            />
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              placeholder="Linkedin"
              value={linkedin ? linkedin : "-"}
              onChange={onLinkedinChange}
            />
          </InputGroup>
        </Form.Group>

        <Button type="submit" onClick={onUpdateManagement} className="mt-3">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default EditManagement;
