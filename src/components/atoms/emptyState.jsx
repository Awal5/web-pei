import React from "react";
import { Link } from "gatsby";

// component yang berfungsi sebagai emptyState di dashboard
const EmptyState = ({ title, errors, addLink }) => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">{title}</h1>
      </div>
      <p className="position-absolute bottom-50 start-50">{errors}</p>
      <Link className="btn btn-success mb-3" to={addLink}>
        Tambahkan {title} +
      </Link>
    </>
  );
};

export default EmptyState;
