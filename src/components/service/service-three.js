import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ServicePostThreeData } from "@/data";
import ServiceCardThree from "@/components/service/service-card-three";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

const ServiceThree = ({ articles }) => {
  const { sectionContent } = ServicePostThreeData;
  const { title } = sectionContent;
  const carouselOptions = {
    spaceBetween: 0,
    loop: true,
    slidesPerView: 3,
    pagination: {
      el: "#team-carousel-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      576: {
        spaceBetween: 30,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      992: {
        spaceBetween: 30,
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 5,
        slidesPerGroup: 1,
      },
    },
  };

  return (
    <section className="commonSection ">
      <Row>
        <Col lg={12} className="text-center">
          <h2 className="sec_title ">{title}</h2>
        </Col>
      </Row>
      <Swiper className="team_slider" {...carouselOptions}>
        {articles.slice(0, 7).map(article => (
          <SwiperSlide lg={4} md={12} key={article.id}>
            <ServiceCardThree data={article} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ServiceThree;
