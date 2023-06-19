import React from "react";
import Layout from "@/components/layout";
import CallToActionOne from "@/components/callToAction/call-to-action-one";
import Footer from "@/components/footer";
import BlogHome from "@/components/blog/blog-home";
import ParallaxOne from "@/components/parallax-1";
import ClientCarouselOne from "@/components/client/client-carousel-one";
import TeamCarousel from "@/components/teams/team-carousel";
import FunfactOne from "@/components/funfact-one";
import TrustedClient from "@/components/client/trusted-client";
import PortfolioHome from "@/components/portofolio/portfolio-home";
import SubscribeForm from "@/components/subscribe-form";
import ServiceTwo from "@/components/service/service-two";
import AboutTwo from "@/components/about/about-two";
import VideoTwo from "@/components/video/video-two";
import HeaderOne from "@/components/header/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import SliderOne from "@/components/slider/slider-one";

const HomeOne = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Home">
          <HeaderOne />
          <SliderOne />
          {/* <ServiceTwo /> */}
          <AboutTwo />
          {/* <SubscribeForm /> */}
          <PortfolioHome />
          {/* <FunfactOne /> */}
          {/* <TrustedClient /> */}
          <TeamCarousel />
          <VideoTwo />
          {/* <ClientCarouselOne /> */}
          {/* <ParallaxOne /> */}
          <BlogHome />
          {/* <CallToActionOne extraClassName="ready" /> */}
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default HomeOne;
