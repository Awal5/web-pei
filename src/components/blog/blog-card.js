import React from "react";
import { Link } from "gatsby";
import { showFormattedDate2 } from "@/data";

const BlogCard = ({ data }) => {
  const { title, articleImages, createdAt } = data;
  const images = articleImages.map(image => {
    return image.imagePath;
  });

  return (
    <div className="latestBlogItem">
      <div className="lbi_thumb">
        <img src={`http://localhost:4000/images/${images[0]}`} alt={title} />
      </div>
      <div className="lbi_details">
        <Link className="lbid_date" to={`/blog-single`}>
          {showFormattedDate2(createdAt)}
        </Link>
        <h2>
          <Link to={`/blog-single`}>{title}</Link>
        </h2>
        <Link className="learnM" to={`/blog-single`}>
          Selengkapnya
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
