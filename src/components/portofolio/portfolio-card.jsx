import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const PortfolioCard = ({ data }) => {
  // desctructuring props data
  const { name, image, slug } = data;

  // inisiasi library aos
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={`singlefolio`} data-aos="zoom-in">
      <img
        src={`http://localhost:4000/images/${image}`}
        alt={name}
        style={{ height: "426px" }}
      />
      <div className="folioHover">
        <h4>
          <a href={`/products/${slug}`}>{name}</a>
        </h4>
      </div>
    </div>
  );
};

export default PortfolioCard;
