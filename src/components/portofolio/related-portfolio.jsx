import React from "react";
import { PortfolioData } from "@/data";
import PortfolioCard from "@/components/portofolio/portfolio-card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const RelatedPortfolio = ({ products }) => {
  // option dari carousel
  const carouselOptions = {
    spaceBetween: 0,
    slidesPerView: 1,
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      576: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      992: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
    },
  };
  return (
    <section className="commonSection relatedPortfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h4 className="sub_title">Produk Kami</h4>
            <h2 className="sec_title">Produk Terkait</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {/* looping image dan memasukkan ke swiper */}
            <Swiper className="related_slider" {...carouselOptions}>
              {products.map(product => (
                <SwiperSlide key={product.id}>
                  <PortfolioCard data={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedPortfolio;
