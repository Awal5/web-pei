import React from "react";
import Form from "react-bootstrap/Form";

const CategoryFilter = ({ filter, onFilterHandler, datas }) => {
  // Get unique categories from the datas array
  const uniqueCategories = new Set(datas.map(data => data.category));

  // Filter the datas array by category and return an array of products in each category
  const filteredCategory = Array.from(uniqueCategories).reduce(
    (result, category) => {
      const productInCategory = datas.find(data => data.category === category);
      if (productInCategory) {
        result.push(productInCategory);
      }
      return result;
    },
    []
  );

  return (
    <Form.Select
      className="w-25"
      onChange={e => onFilterHandler(e.target.value)}
      value={filter}
    >
      <option value="">Filter Kategori: </option>
      {filteredCategory.map((item, index) => (
        <option key={index} value={item.category}>
          {item.category}
        </option>
      ))}
    </Form.Select>
  );
};

export default CategoryFilter;
