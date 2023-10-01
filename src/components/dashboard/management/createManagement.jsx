import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import useInput from "@/hooks/useInput";
import { createManagement } from "@/data";
import { navigate, Link } from "gatsby";
import Toasted from "@/components/atoms/Toast";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "@/css/editor.css";
import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";

const CreateManagement = () => {
  // State variables
  const [name, onNameChange] = useInput(); // Name input state
  const [image, setImage] = useState(); // Image state
  const [position, onPositionChange] = useInput(); // Position input state
  const [editorState, setEditorState] = useState(EditorState.createEmpty()); // Editor state for rich text content
  const [facebook, onFacebookChange] = useInput(); // Facebook input state
  const [twitter, onTwitterChange] = useInput(); // Twitter input state
  const [linkedin, onLinkedinChange] = useInput(); // Linkedin input state

  // Handler for image change
  const onImgChange = e => {
    setImage(e.target.files[0]);
  };

  // Handler for editor state change
  const onEditorStateChange = newEditorState => {
    setEditorState(newEditorState);
  };

  // Convert editor state to HTML content
  const content = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
  const description = draftToHtml(JSON.parse(content));

  // Create form data with input values
  const formData = new FormData();
  formData.append("name", name);
  formData.append("image", image);
  formData.append("position", position);
  formData.append("description", description);
  formData.append("facebook", facebook);
  formData.append("twitter", twitter);
  formData.append("linkedin", linkedin);

  // Handler for creating management
  const onCreateManagement = async e => {
    e.preventDefault();
    try {
      await createManagement(formData).then(() =>
        Toasted("Manajemen Berhasil Ditambahkan", "", "success")
      );
    } catch (error) {
      console.log(error);
    }

    navigate("/dashboard/managements");
  };

  return (
    <>
      <Link to="/dashboard/managements" className="btn btn-secondary mt-4">
        <i className="bi bi-arrow-left"></i> &nbsp;Kembali
      </Link>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h1">Tambah Manajemen</h1>
      </div>
      <Form
        className="mt-4"
        encType="multipart/form-data"
        onSubmit={onCreateManagement}
      >
        <Form.Group className="my-3">
          <Form.Label>Nama Manajamen</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan Nama Manajamen"
            required
            onChange={onNameChange}
            value={name}
          />
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>Gambar Manajamen</Form.Label>
          <Form.Control
            type="file"
            accept="image"
            name="image"
            placeholder="Masukkan Image"
            onChange={e => onImgChange(e)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Jabatan Manajemen</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan Jabatan Manajemen"
            value={position}
            onChange={onPositionChange}
            required
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
              value={facebook}
              onChange={onFacebookChange}
            />
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              placeholder="Twitter"
              value={twitter}
              onChange={onTwitterChange}
            />
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              placeholder="Linkedin"
              value={linkedin}
              onChange={onLinkedinChange}
            />
          </InputGroup>
        </Form.Group>

        <Button type="submit" className="mt-3">
          Tambah
        </Button>
      </Form>
    </>
  );
};

export default CreateManagement;
