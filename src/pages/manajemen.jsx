import React, { useEffect, useState } from "react";
import HeaderTwo from "@/components/header/header-two";
import Layout from "@/components/layout";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import PageBanner from "@/components/page-banner";
import StructureOrganism from "@/components/about/StructureOrganism";
import Commissioner from "@/components/about/Commissioner";
import Footer from "@/components/footer";
import { getManagements } from "@/data";
import Audit from "@/components/about/Audit";
import Direksi from "@/components/about/Direksi";

const Manajemen = () => {
  // deklarasi state dari managements
  const [managements, setManagements] = useState([]);

  // fetch data managements saat component di mount
  useEffect(() => {
    getAllManagements();
  }, []);

  // fungsi fetch semua managements
  const getAllManagements = async () => {
    try {
      const { data } = await getManagements();
      setManagements(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Manajemen Perusahaan">
          <HeaderTwo />
          <PageBanner title="Manajemen Perusahaan" name="Manajemen" />
          <StructureOrganism />
          <Commissioner managements={managements} />
          <Audit managements={managements} />
          <Direksi managements={managements} />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default Manajemen;
