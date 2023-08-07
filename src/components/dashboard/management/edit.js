import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { updateManagement, getManagementBySlug } from "@/data";
import { navigate, Link } from "gatsby";
import Loading from "@/components/atoms/Loading";

const EditManagement = ({ slug }) => {
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [position, setPosition] = useState();
  const [description, setDescription] = useState();
  const [facebook, setFacebook] = useState();
  const [twitter, setTwitter] = useState();
  const [linkedin, setLinkedin] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDetailManagement = async () => {
      const data = await getManagementBySlug(slug);
      setName(data.name);
      setPosition(data.position);
      setDescription(data.description);
      setFacebook(data.facebook);
      setTwitter(data.twitter);
      setLinkedin(data.linkedin);
      setLoading(false);
    };

    getDetailManagement();
  }, [slug]);

  useEffect(() => {
    if (image) {
      document.getElementById("image").value = "";
    }
  }, [image]);
  const onNameChange = e => {
    setName(e.target.value);
  };
  const onImgChange = e => {
    setImage(e.target.files[0]);
  };

  const onPositionChange = e => {
    setPosition(e.target.value);
  };
  const onDescriptionChange = e => {
    setDescription(e.target.value);
  };

  const onFacebookChange = e => {
    setFacebook(e.target.value);
  };

  const onTwitterChange = e => {
    setTwitter(e.target.value);
  };

  const onLinkedinChange = e => {
    setLinkedin(e.target.value);
  };

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

  const onUpdateManagement = async e => {
    e.preventDefault();
    try {
      await updateManagement({ slug, formData });
    } catch (error) {
      console.log(error);
    }

    navigate("/dashboard/managements");
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Link to="/dashboard/managements" className="btn btn-secondary mt-4">
        <i className="bi bi-arrow-left"></i> &nbsp;Kembali
      </Link>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h1">Tambah Direksi</h1>
      </div>
      <Form className="mt-4" encType="multipart/form-data">
        <Form.Group className="my-3">
          <Form.Label>Nama Direksi</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan Nama Direksi"
            onChange={onNameChange}
            value={name}
          />
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>Gambar Direksi</Form.Label>
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
          <Form.Label>Jabatan Direksi</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan Jabatan Direksi"
            value={position}
            onChange={onPositionChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Deskripsi Direksi</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Masukkan Deskripsi Direksi"
            value={description}
            onChange={onDescriptionChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Social Media Direksi</Form.Label>
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

        <Button type="submit" onClick={onUpdateManagement} className="mt-3">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default EditManagement;
