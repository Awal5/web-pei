import React from "react";
import Form from "react-bootstrap/Form";

const Sorting = ({ sort, onSortHandler }) => {
  return (
    <Form.Select
      className="w-25"
      onChange={e => onSortHandler(e.target.value)}
      value={sort}
    >
      <option>Urutkan: </option>
      <option value="ASC">ASC</option>
      <option value="DESC">DESC</option>
    </Form.Select>
  );
};

export default Sorting;
