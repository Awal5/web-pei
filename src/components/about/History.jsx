import React from "react";
import { Container } from "react-bootstrap";
import { Timeline, Events, Event } from "vertical-timeline-component-react";
import Divider from "../atoms/Divider";
import { CompanyHistoryData, ChildCompany } from "@/data";

const History = () => {
  const customTheme = {
    borderDotColor: "#ffffff",
    descriptionColor: "#262626",
    dotColor: "#d0cdc4",
    eventColor: "#965500",
    lineColor: "#d0cdc4",
    subtitleColor: "#7c7c7c",
    titleColor: "#405b73",
    yearColor: "#405b73",
  };
  return (
    <section className=" ">
      <Container>
        <Divider />
        <h1 className="text-orange text-center">Sejarah Perusahaan</h1>
        <Timeline lang="en" theme={customTheme} dateFormat="short">
          {CompanyHistoryData.map((item, index) => {
            return (
              <Events
                key={index}
                title={item.title}
                startDate={item.startDate}
                // endDate={item.endDate}
                active={index === 0}
                withoutDay
              >
                <Event description={[item.desc]} />
              </Events>
            );
          })}
        </Timeline>
        <div className="text-black">
          <p>
            PT. Pindad Enjiniring Indonesia Adalah Satu-Satunya Anak Perusahaan
            PT. Pindad Yang Berdiri Sejak Tanggal 7 Oktober 1992 Dengan Nama PT.
            Daun Cakra Bhakti. Pada Tanggal 31 Desember 1999 Dilakukannya
            Perubahan Nama Menjadi PT. Cakra Mandiri Pratama, Yang Pada Akhirnya
            Pada Tanggal 4 Desember 2015 Berubah Menjadi PT. Pindad Enjiniring
            Indonesia Yang Berdiri Dibawah Naungan PT. Pindad. <br />
            Bidang Pekerjaan Yang Dijalankan Diantara Nya Adalah Manufaktur,
            Enjiniring, Perdagangan, Pemborongan, Pengembang (Developer),
            Perindustrian, Mekanial Elektrikal, Pertanian, Pertambangan, Jasa,
            Perhotelan, Percetakan, Dan Pengembangan Bidang Pelayanan Kesehatan
            Mulai Dari Pelayanan, Penunjang Medis, Serta Apotik.
            <br />
            Membawahi 3 Anak Perusahaan, Yaitu :
          </p>
          <ul className="list-unstyled">
            {ChildCompany.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default History;
