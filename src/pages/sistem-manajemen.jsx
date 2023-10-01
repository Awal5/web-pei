import React from "react";
import Footer from "@/components/footer";
import HeaderTwo from "@/components/header/header-two";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";

const ManagementSystem = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="SISTEM MANAJEMEN MUTU & KOMITMEN TERHADAP LINGKUNGAN">
          <HeaderTwo />
          <PageBanner
            title="SISTEM MANAJEMEN MUTU & KOMITMEN TERHADAP LINGKUNGAN"
            name="Sistem Manajemen"
          />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default ManagementSystem;
