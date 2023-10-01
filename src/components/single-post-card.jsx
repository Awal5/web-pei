import React, { Fragment } from "react";
import { showFormattedDate } from "@/data";
import parse from "html-react-parser";
import { Image } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Navigation, Pagination } from "swiper";
import Loading from "./atoms/Loading";

// penggunaan library swipper core
SwiperCore.use([Pagination, Navigation]);
// class single post card / detail card
const SinglePostCard = ({ article, loading }) => {
  // nilai dari properti article
  const { title, description, articleImages, category, createdAt } = article;

  // kondisi untuk menampilkan loading
  if (loading || !title || !description || !articleImages || !createdAt) {
    return <Loading />;
  }
  return (
    <Fragment>
      <div className="single_blog">
        <div className="blog_headings">
          <span className="blog_date">{category}</span>
          <h2>{title}</h2>
          <p className="blog_metas">
            <a href="#">By Awal</a>
            <span href="#">{showFormattedDate(createdAt)}</span>
          </p>
        </div>
        <div className="blog_thumb">
          <Swiper
            spaceBetween={50}
            pagination={{ clickable: true }}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 1500,
            }}
            slidesPerView={1}
          >
            {articleImages.map(image => (
              <SwiperSlide
                key={image.id}
                className="d-flex justify-content-center"
              >
                <Image
                  src={`http://localhost:4000/images/${image.imagePath}`}
                  className="w-50"
                  fluid
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="blog_details">{parse(description)}</div>
      </div>
    </Fragment>
  );
};

export default SinglePostCard;
