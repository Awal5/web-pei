import React from "react";
import HeaderTwo from "@/components/header/header-two";
import PageBanner from "@/components/page-banner";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import Layout from "@/components/layout";
import Profile from "@/components/about/profile";
import { AboutCompanyImage } from "@/data";
import Footer from "@/components/footer";
import VisionMission from "@/components/about/VisionMission";
import Culture from "@/components/about/Culture";
import History from "@/components/about/History";
import FieldDevelopment from "@/components/about/FieldDevelopment";
import Legality from "@/components/about/Legality";

const AboutCompany = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Tentang Perusahaan">
          <HeaderTwo />
          <PageBanner title="Tentang Perusahaan" name="Tentang" />
          <Profile images={AboutCompanyImage} />
          <VisionMission />
          <Culture />
          <History />
          <FieldDevelopment />
          <Legality />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default AboutCompany;
