import React from "react";
import Form from "react-bootstrap/Form";

// fungsi untuk sorting
const Sorting = ({ sort, onSortHandler }) => {
  return (
    <Form.Select
      className="w-25" // Sets the width of the dropdown.
      onChange={e => onSortHandler(e.target.value)} // Sets the event handler for sorting.
      value={sort} // Sets the current sort value.
    >
      <option value="">Urutkan: </option>
      <option value="ASC">A-Z</option>
      <option value="DESC">Z-A</option>
      <option value="oldest">Tanggal Terlama</option>

      <option value="newest">Tanggal Terbaru</option>
    </Form.Select>
  );
};

export default Sorting;
