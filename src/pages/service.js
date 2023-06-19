import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import ServiceOne from "@/components/service/service-one";
import ServiceTwo from "@/components/service/service-two";
import ServiceThree from "@/components/service/service-three";
import FunfactOne from "@/components/funfact-one";
import TrustedClient from "@/components/client/trusted-client";
import ClientCarouselOne from "@/components/client/client-carousel-one";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header/header-one";

const ServicePage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Services Page">
          <HeaderOne />
          <PageBanner title="Services" name="Services" />
          <ServiceOne />
          <ServiceTwo />
          <ServiceThree />
          <FunfactOne />
          <TrustedClient extraClassName="pb_120" />
          <ClientCarouselOne />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default ServicePage;
