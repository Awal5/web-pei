import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@/components/section-title";
import { TeamOneData } from "@/data";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogCard from "@/components/blog/blog-home-card";
import "swiper/swiper-bundle.min.css";

import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

// component yang berfungsi sebagai carousel berita di home
const BlogCarousel = ({ articles }) => {
  const { sectionContent, posts } = TeamOneData;
  const carouselOptions = {
    spaceBetween: 0,
    loop: true,
    slidesPerView: 1,
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
    <section className="commonSection team">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <SectionTitle data={sectionContent} />
          </Col>
        </Row>
      </Container>
      <Swiper className="team_slider" {...carouselOptions}>
        {articles.slice(0, 7).map(article => (
          <SwiperSlide key={article.id}>
            <BlogCard article={article} />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination" id="team-carousel-pagination"></div>
      </Swiper>
    </section>
  );
};

export default BlogCarousel;
