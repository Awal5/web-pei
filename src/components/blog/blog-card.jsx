import React from "react";
import { Link } from "gatsby";
import { showFormattedDate2 } from "@/data";

// component Blog card
const BlogCard = ({ data }) => {
  // nilai dari props data
  const { title, articleImages, category, createdAt, slug } = data;
  // mapping array image
  const images = articleImages.map(image => {
    return image.imagePath;
  });

  return (
    <div className="latestBlogItem d-flex flex-row ">
      <div className="text-center me-2 h-25 p-1 shadow">
        <p className="text-black fw-semibold fs-5">
          {showFormattedDate2(createdAt)}
        </p>
      </div>
      <div>
        <div className="lbi_thumb h-50 shadow">
          <img src={`http://localhost:4000/images/${images[0]}`} alt={title} />
        </div>
        <div className="lbi_details">
          <p>{category}</p>
          <h2>
            <Link to={`/news/${slug}`}>{title}</Link>
          </h2>
          <Link className="learnM" to={`/news/${slug}`}>
            Selengkapnya
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
