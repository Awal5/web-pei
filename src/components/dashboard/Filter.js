import React from "react";
import Form from "react-bootstrap/Form";

const Filter = ({ filter, onFilterHandler }) => {
  return (
    <Form.Select
      className="w-25"
      onChange={e => onFilterHandler(e.target.value)}
      value={filter}
    >
      <option>Filter: </option>
      <option value="title">Judul</option>
      <option value="date">Tanggal</option>
    </Form.Select>
  );
};

export default Filter;
