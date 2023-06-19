import React from "react";
import Layout from "@/components/layout";
import Footer from "@/components/footer";
import AboutTwo from "@/components/about/about-two";
import VideoTwo from "@/components/video/video-two";
import SubscribeForm from "@/components/subscribe-form";
import ServiceHomeThree from "@/components/service/service-home-three";
import TestimonialsOneCarousel from "@/components/client/testimonials-carousel";
import PortfolioHome from "@/components/portofolio/portfolio-home";
import FunfactOne from "@/components/funfact-one";
import TrustedClient from "@/components/client/trusted-client";
import TeamCarousel from "@/components/teams/team-carousel";
import ClientCarouselOne from "@/components/client/client-carousel-one";
import ParallaxOne from "@/components/parallax-1";
import BlogHome from "@/components/blog/blog-home";
import GoogleMap from "@/components/google-map";
import CallToActionTwo from "@/components/callToAction/call-to-action-two";
import ContactInfos from "@/components/contact/contact-infos";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import HeaderOne from "@/components/header/header-one";
import SliderThree from "@/components/slider/slider-three";

const HomeThree = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Home Three">
          <HeaderOne />
          <SliderThree />
          <AboutTwo />
          <VideoTwo />
          <SubscribeForm />
          <ServiceHomeThree />
          <TestimonialsOneCarousel />
          <PortfolioHome />
          <FunfactOne />
          <TrustedClient extraClassName="pb_120" />
          <TeamCarousel />
          <ClientCarouselOne />
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

export default HomeThree;
