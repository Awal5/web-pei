import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import Image from "react-bootstrap";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import {
  CompanyName,
  ContactInfosList,
  InformationChannel,
  MotherCompany,
  ChildCompany,
} from "@/data";
import parse from "html-react-parser";

SwiperCore.use([Pagination, Navigation, Autoplay]);

const Heading4 = ({ title }) => {
  return <h4 className="text-uppercase">{title}</h4>;
};

const Paragraph = ({ text }) => {
  return <p className="text-black">{text != null ? parse(text) : "-"}</p>;
};

const Linked = ({ text, link }) => {
  return (
    <a href={link} className="text-link-orange">
      {text}
    </a>
  );
};
const Profile = ({ images }) => {
  const { name, image, social } = MotherCompany;
  const companyLocation = ContactInfosList[0].infos;
  return (
    <section className="commonSection ab_agency">
      <Container>
        {/* <div>
          <Swiper
            spaceBetween={50}
            pagination={{ clickable: true }}
            loop={true}
            centeredSlides={true}
            autoplay={{ delay: 1500 }}
            slideActiveClass={1}
          >
            {images.map(({ image, name }, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={name} className="w-50" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}
        <hr className="border-2 border-black" />
        {/* nama perusahaan */}
        <div>
          <Heading4 title="Nama Perusahaan : " />
          <div
            className="p-3 fs-2 text-white"
            style={{ backgroundColor: "#f87219ff", width: "fit-content" }}
          >
            PT Pindad Enjiniring Indonesia
          </div>
        </div>

        <hr className="border-2 border-black" />
        {/* Nama perusahaan sebelumnya */}
        <div>
          <Heading4 title="Nama Perusahaan Sebelumnya : " />
          <ul className="list-unstyled">
            {CompanyName.map(({ name, date }, index) => (
              <li
                key={index}
                className="text-white p-1 my-2"
                style={{ width: "fit-content", backgroundColor: "#333333ff" }}
              >
                <p>
                  {name}, - ({date})
                </p>
              </li>
            ))}
          </ul>
        </div>

        <hr className="border-2 border-black" />
        {/* bidang usaha */}
        <div>
          <Heading4 title="Bidang Usaha : " />
          <Paragraph
            text="Manufaktur, Enjiniring, perdagangan, pemborongan, pengembang
            (developer), perindustrian, mekanial elektrikal, pertanian,
            pertambangan, jasa, perhotelan, percetakan, dan pengembangan bidang
            pelayanan kesehatan mulai dari pelayanan, penunjang medis, serta
            Apotik."
          />
        </div>

        <hr className="border-2 border-black" />
        {/* produk */}
        <div>
          <Heading4 title="Produk : " />
          <Paragraph
            text=" Komponen senjata, komponen munisi, Peralatan Industri dan Jasa,
            Komponen Infrastruktur Perhubungan, Layanan Pertambangan, alat
            kesehatan."
          />
        </div>

        <hr className="border-2 border-black" />
        {/* status perusahaan */}
        <div>
          <Heading4 title="Status Perusahaan : " />
          <Paragraph
            text=" Anak Perusahaan PT Pindad (Persero) / Badan Usaha Milik Swasta
            (BUMS)"
          />
        </div>

        <hr className="border-2 border-black" />
        {/* status kepemilikan */}
        <div>
          <Heading4 title="Status Kepemilikan : " />
          <Paragraph
            text={`99,99% dimiliki oleh PT Pindad (Persero)<br />0,01% dimiliki oleh
            Perseorangan`}
          />
        </div>

        <hr className="border-2 border-black" />
        {/* status industri */}
        <div>
          <Heading4 title="Status Industri : " />
          <Paragraph text="Industri Pertahanan" />
        </div>

        <hr className="border-2 border-black" />
        {/* industri perusahaan */}
        <div>
          <Heading4 title="Industri Pertahanan : " />
          <Paragraph />
        </div>

        <hr className="border-2 border-black" />
        {/* akta pendirian perusahaaan */}
        <div>
          <Heading4 title="Akta Pendirian Perusahaan : " />
          <Paragraph />
        </div>

        <hr className="border-2 border-black" />
        {/* Modal Dasar */}
        <div>
          <Heading4 title="Modal Dasar : " />
          <Paragraph />
        </div>

        <hr className="border-2 border-black" />
        {/* Modal ditempatkan di sektor penuh */}
        <div>
          <Heading4 title="MODAL DITEMPATKAN DAN DISETOR PENUH :" />
          <Paragraph />
        </div>

        <hr className="border-2 border-black" />
        {/* total ekuitas */}
        <div>
          <Heading4 title="TOTAL EKUITAS :" />
          <Paragraph />
        </div>

        <hr className="border-2 border-black" />
        {/* jumlah karyawan */}
        <div>
          <Heading4 title="JUMLAH KARYAWAN :" />
          <Paragraph text="268 Orang" />
        </div>

        <hr className="border-2 border-black" />
        {/* jaringan kantor */}
        <div>
          <div
            className="text-white p-2"
            style={{
              width: "fit-content",
              backgroundColor: "#333333ff",
            }}
          >
            Jaringan Kantor
          </div>
          <div className="pt-3">
            {companyLocation.map(({ name, location, telp }, index) => (
              <div key={index}>
                <Heading4 title={`${location} :`} />
                <Paragraph text={`${name}, ${telp}`} />
              </div>
            ))}
          </div>
        </div>

        <hr className="border-2 border-black" />
        {/* informasi rups */}
        <div>
          <Heading4 title="Informasi RUPS :" />
          <Paragraph />
        </div>

        <hr className="border-2 border-black" />
        {/* penghargaaan dan sertifikasi */}
        <div>
          <Heading4 title="Penghargaan dan Sertifikasi :" />
          <Paragraph />
        </div>

        <hr className="border-2 border-black" />
        {/* komite komite perusahaan */}
        <div>
          <Heading4 title="Komite Komite Perusahaan :" />
          <Paragraph />
        </div>

        <hr className="border-2 border-black" />
        {/* pencapaian dan prospek perusahaan */}
        <div>
          <Heading4 title="Pencapaian dan Prospek Perusahaan :" />
          <Paragraph text="259 Orang" />
        </div>

        <hr className="border-2 border-black" />
        {/* saluran informasi */}
        <div>
          <div
            className="text-white p-2"
            style={{
              width: "fit-content",
              backgroundColor: "#333333ff",
            }}
          >
            Saluran Informasi
          </div>
          <div className="pt-3">
            {InformationChannel.map(({ name, title, link }, index) => (
              <div key={index}>
                <Heading4 title={name} />
                <Linked text={title} link={link} />
              </div>
            ))}
          </div>
        </div>

        <hr className="border-2 border-black" />
        {/* induk perusahaan */}
        <div>
          <Heading4 title="Induk Perusahaan :" />
          <div className="w-50">
            <h5 className="text-black">{name}</h5>
            <img src={image} className="w-50 h-50" />

            {social.map(({ title, name, url }, index) => (
              <Row key={index}>
                <Col lg={3}>
                  <h5 className="text-black ">{title}</h5>
                </Col>
                <Col lg={9}>
                  <Linked text={name} link={url} />
                </Col>
              </Row>
            ))}
          </div>
        </div>

        <hr className="border-2 border-black" />
        {/* anak perusahaan */}
        <div>
          <Heading4 title="Anak Perusahaan :" />
          {ChildCompany.map(({ name, image, social }, index) => (
            <div className="w-50 mt-3" key={index}>
              <h5 className="text-black">{name}</h5>
              <img src={image} className="w-50 " />
              {social.map(({ title, name, url }, index) => (
                <Row key={index}>
                  <Col lg={3}>
                    <h5 className="text-black ">{title}</h5>
                  </Col>
                  <Col lg={9}>
                    <Linked text={name} link={url} />
                  </Col>
                </Row>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Profile;
