import React from "react";
import Form from "react-bootstrap/Form";

const Search = ({ search, onSearchHandler }) => {
  return (
    <Form.Group className="d-flex align-items-center border border-black w-75 justify-content-between px-2 rounded">
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Cari..."
        className="border-0 w-75"
        style={{ outline: "none" }}
        value={search}
        onChange={e => onSearchHandler(e.target.value)}
      />
      <i class="bi bi-search"></i>
    </Form.Group>
  );
};

export default Search;
