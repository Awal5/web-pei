import React, { useState, useEffect } from "react";
import Layout from "@/components/layout";
import CallToActionOne from "@/components/callToAction/call-to-action-one";
import Footer from "@/components/footer";
import ServiceHomeTwo from "@/components/service/service-home-two";
import BlogCarousel from "@/components/blog/blog-carousel";
import ContactInfos from "@/components/contact/contact-infos";
import ServiceThree from "@/components/service/service-three";
import ParallaxOne from "@/components/parallax-1";
import GoogleMap from "@/components/google-map";
import TestimonialsOneCarousel from "@/components/client/testimonials-carousel";
import PortfolioHome from "@/components/portofolio/portfolio-home";
import FeatureTabOne from "@/components/feature/feature-tab-1";
import CallToActionTwo from "@/components/callToAction/call-to-action-two";
import FeatureTwo from "@/components/feature/feature-two";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import HeaderTwo from "@/components/header/header-two";
import SliderTwo from "@/components/slider/slider-two";
import AboutTwo from "@/components/about/about-two";
import TeamCarousel from "@/components/teams/team-carousel";
import { getArticles, getProducts } from "@/data";

const HomeTwo = () => {
  // mendeklarasikan state untuk article & product
  const [article, setArticle] = useState([]);
  const [product, setProduct] = useState([]);

  // fetch article & product saat component di mounting/pasang
  useEffect(() => {
    getArticle();
    getProduct();
  }, []);

  // fetch data semua article
  async function getArticle() {
    try {
      const { data } = await getArticles();
      if (data) {
        setArticle(data);
      }
    } catch (error) {
      setError(error.message);
    }
  }

  // fetch data semua product
  async function getProduct() {
    try {
      const { data } = await getProducts();
      if (data) {
        setProduct(data);
      }
    } catch (error) {
      setError(error.message);
    }
  }

  // render component
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Beranda">
          <HeaderTwo />
          <SliderTwo />
          <CallToActionOne extraClassName="ready_2" buttonClass="red_bg" />
          <AboutTwo />
          <TeamCarousel />
          <PortfolioHome products={product} />
          <ServiceThree articles={article} />

          <GoogleMap extraClass="contact-page" />

          <ContactInfos />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default HomeTwo;
