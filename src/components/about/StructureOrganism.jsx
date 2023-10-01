import React from "react";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import StrukturOrganisasi from "@/images/about/STRUKTUR-ORGANISASI.png";
const StructureOrganism = () => {
  return (
    <section className="commonSection ab_agency">
      <Container>
        <h1 className="text-orange text-center">Struktur Organisasi</h1>
        <Image src={StrukturOrganisasi} fluid />;
        <h5 className="fw-bold text-black mt-2">
          Di perbaharui tanggal 25 Mei 2022 (Nomor: SKEP/05/PE/BD/V/2022)
        </h5>
      </Container>
    </section>
  );
};

export default StructureOrganism;
