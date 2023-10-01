import React from "react";
import { Link } from "gatsby";
import { Image } from "react-bootstrap";
import Loading from "@/components/atoms/Loading";

// component yang berfungsi sebagai card berita di home
const TeamCard = ({ article }) => {
  const { title, articleImages, slug } = article;

  if (!article && !articleImages) {
    return <Loading />;
  }
  return (
    <div className="singleTM">
      <div className="tm_img">
        {articleImages.slice(0, 1).map(image => {
          return (
            <Image
              src={`http://localhost:4000/images/${image.imagePath}`}
              alt={title}
              key={image.id}
            />
          );
        })}
        {/* <Image src={`http://localhost:4000/images/${image}`} alt={title} /> */}
        <div className="tm_overlay">
          <h1>{title}</h1>
          <Link to={`/products/${slug}`}>Selengkapnya</Link>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
