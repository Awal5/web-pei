import React from "react";
import { Container, Image, Button } from "react-bootstrap";
import { Link } from "gatsby";
import parse from "html-react-parser";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Navigation, Pagination } from "swiper";
import Loading from "@/components/atoms/Loading";

SwiperCore.use([Pagination, Navigation]);
const DetailProduct = props => {
  //desctructuring props
  const { article, loading, onDelete } = props;

  // show loading if loading
  if (loading) {
    return <Loading />;
  }
  return (
    <Container>
      <Link to="/dashboard/articles" className="btn btn-secondary mt-4">
        <i className="bi bi-arrow-left"></i> &nbsp;Kembali
      </Link>
      <h1 className="my-4 border-bottom pb-2">{article.title}</h1>
      <div className="d-flex justify-content-center">
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
          {article.articleImages.map(image => {
            return (
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
            );
          })}
        </Swiper>
      </div>
      <div className="mt-4 pt-3">{parse(article.description)}</div>
      <div className="py-3">
        <Link
          to={`/dashboard/articles/edit/${article.slug}`}
          className="btn btn-warning mx-3"
        >
          Edit <i className="bi bi-pencil-square"></i>
        </Link>
        <Button
          type="button"
          className="btn btn-danger"
          onClick={() => onDelete(article.slug)}
        >
          Hapus <i className="bi bi-trash"></i>
        </Button>
      </div>
    </Container>
  );
};

export default DetailProduct;
