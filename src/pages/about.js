import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import AboutOne from "@/components/about/about-one";
import CallToActionOne from "@/components/callToAction/call-to-action-one";
import TeamCarousel from "@/components/teams/team-carousel";
import VideoOne from "@/components/video/video-one";
import SubscribeForm from "@/components/subscribe-form";
import TestimonialsOneCarousel from "@/components/client/testimonials-carousel";
import FeatureTabOne from "@/components/feature/feature-tab-1";
import HeaderOne from "@/components/header/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";

const AboutPage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="About Us Page">
          <HeaderOne />
          <PageBanner title="About Us" name="About" />
          <AboutOne />
          <TestimonialsOneCarousel />
          <SubscribeForm />
          <TeamCarousel />
          <VideoOne />
          <FeatureTabOne />
          <CallToActionOne extraClassName="ready" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default AboutPage;
