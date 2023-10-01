import React from "react";
import Form from "react-bootstrap/Form";

const Search = ({ search, onSearchHandler }) => {
  return (
    // Render a form group with border, width, and alignment styles
    <Form.Group className="d-flex align-items-center border border-black w-75 justify-content-between px-2 rounded">
      {/* Render an input field */}
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
      {/* Render a search icon */}
      <i class="bi bi-search"></i>
    </Form.Group>
  );
};

export default Search;
