import React from "react";
import Layout from "@/components/layout";
import CallToActionOne from "@/components/callToAction/call-to-action-one";
import Footer from "@/components/footer";
import ServiceHomeTwo from "@/components/service/service-home-two";
import BlogHome from "@/components/blog/blog-home";
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

const HomeTwo = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Home Two">
          <HeaderTwo />
          <SliderTwo />
          <CallToActionOne extraClassName="ready_2" buttonClass="red_bg" />
          <ServiceHomeTwo />
          <FeatureTwo />
          <PortfolioHome />
          <TestimonialsOneCarousel />
          <FeatureTabOne />
          <ServiceThree />
          <ParallaxOne />
          <BlogHome />
          <GoogleMap extraClass="contact-page" />
          <CallToActionTwo />
          <ContactInfos />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default HomeTwo;
