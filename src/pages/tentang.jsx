import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import AboutTwo from "@/components/about/about-two";
import HeaderOne from "@/components/header/header-two";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";

const AboutPage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="About Us Page">
          <HeaderOne />
          <PageBanner title="Tentang Kami" name="Tentang" />
          <AboutTwo />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default AboutPage;
