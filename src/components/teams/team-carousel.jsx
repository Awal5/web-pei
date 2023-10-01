import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@/components/section-title";
import { TeamOneData } from "@/data";
import { Swiper, SwiperSlide } from "swiper/react";
import TeamCard from "@/components/teams/team-card";
import "swiper/swiper-bundle.min.css";
import { getManagements } from "@/data";

import SwiperCore, { Pagination } from "swiper";

// import Swiper core and required modules
SwiperCore.use([Pagination]);

const TeamCarousel = () => {
  // deklarasi state
  const [managements, setManagements] = useState([]);

  const { sectionContent } = TeamOneData;
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
        slidesPerGroup: 3,
      },
      // 1200: {
      //   spaceBetween: 30,
      //   slidesPerView: 5,
      //   slidesPerGroup: 5,
      // },
    },
  };

  useEffect(() => {
    getAllManagements();
  }, []);

  const getAllManagements = async () => {
    try {
      const data = await getManagements();
      if (data) {
        setManagements(data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const filterByCommissioner = managements.filter(management =>
    management.position.toLowerCase().includes("direktur")
  );

  const sortByOldDate = filterByCommissioner.sort((a, b) => {
    return new Date(a.createdAt) - new Date(b.createdAt);
  });

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
        {sortByOldDate.map(management => (
          <SwiperSlide key={management.id}>
            <TeamCard management={management} />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination" id="team-carousel-pagination"></div>
      </Swiper>
    </section>
  );
};

export default TeamCarousel;
