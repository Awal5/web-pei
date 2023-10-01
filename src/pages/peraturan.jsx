import React from "react";
import Footer from "@/components/footer";
import HeaderTwo from "@/components/header/header-two";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";

const Peraturan = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="PERATURAN & KETENTUAN PERUSAHAAN">
          <HeaderTwo />
          <PageBanner
            title="PERATURAN & KETENTUAN PERUSAHAAN"
            name="Peraturan"
          />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default Peraturan;
