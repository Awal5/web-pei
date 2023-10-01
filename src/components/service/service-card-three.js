import React from "react";
import { Link } from "gatsby";
import { Image } from "react-bootstrap";

const ServiceCardThree = ({ data }) => {
  const { title, articleImages, slug } = data;
  return (
    <div className="single_wedo rounded shadow-md">
      {articleImages.slice(0, 1).map(image => {
        return (
          <Image
            src={`http://localhost:4000/images/${image.imagePath}`}
            alt={title}
            key={image.id}
          />
        );
      })}

      <div className="overlay_wedo flex justify-content-between">
        <h1 className="w-50 fw-semibold">{title}</h1>
        <Link to={`/products/${slug}`} className="btn btn-primary ">
          Selengkapnya
        </Link>
      </div>
    </div>
  );
};

export default ServiceCardThree;
