import React from "react";
import { Container } from "react-bootstrap";
import Divider from "../atoms/Divider";

const Legality = () => {
  return (
    <section>
      <Container>
        <Divider />
        <h1 className="text-orange text-center">Legalitas</h1>
        <div>
          <h4
            className="text-white p-2 text-uppercase bg-black shadow"
            style={{
              width: "fit-content",
            }}
          >
            1. INDUSTRI PERTAHANAN
          </h4>
          <p>
            Surat Penetapan Industri Pertahanan PT Pindad Enjiniring Indonesia{" "}
            <br />
            Nomor : SP / 158 / IV / 2021 / DJPOT
          </p>
        </div>
        <div>
          <h4
            className="text-white p-2 text-uppercase bg-black shadow"
            style={{
              width: "fit-content",
            }}
          >
            2. STANDARISASI PERUSAHAAN
          </h4>
          <ul className="list-unstyled">
            <li>ISO 9001 : 2015 (Sistem Manajemen Mutu)</li>
            <li>ISO 14001 : 2015 (Sistem Lingkungan)</li>
            <li>
              ISO 45001 : 2018 (Sistem Manajemen Kesehatan dan Keselamatan
              Kerja)
            </li>
          </ul>
          <p>
            Sistem Manajemen Kesehatan dan Keselamatan Kerja berdasarkan PP No.
            50 Tahun 2012
          </p>
        </div>
        <div>
          <h4
            className="text-white p-2 text-uppercase bg-black shadow"
            style={{
              width: "fit-content",
            }}
          >
            3. LAIN - LAIN
          </h4>
          <p>
            Pernyataan Pemberitahuan Perubahan Anggaran Dasar Perusahaan
            Perseroan (Persero) PT Pindad Enjiniring Indonesia yang telah
            terdaftar di Kementerian Hukum dan Hak Asasi Manusia berdasarkan
            Akta Notaris Nomor 3 Tanggal 2 Juli 2020 tentang Pernyataan
            Keputusan Pemegang Saham Perusahaan PT. Pindad Enjiniring Indonesia
            yang dibuat oleh Notaris Rita Evryani, SH.
            <br />
            Nomor : AHU-0044959.AH.01.02.Tahun 2020
          </p>
          <p>
            Surat Keterangan Tidak Pailit yang dikeluarkan oleh Panitera
            Pengadilan Negeri / Niaga Jakarta Pusat tanggal 19 Maret 2020.
            <br />
            Nomor : W10.U1 / 1066 / Pdt.02 / III / 2020 / 03
          </p>
          <p>
            Nomor Induk Berusaha (NIB) yang ditetapkan tanggal 13 Februari 2019
            <br />
            Nomor : 9120402261735
          </p>
          <p>
            Surat Keterangan Domisili Perusahaan dikeluarkan oleh Pemerintah
            Kota Bandung, Kecamatan Kiaracondong, Kelurahan Sukapura tanggal 20
            September 2019. (berlaku untuk 1 tahun)
            <br />
            Nomor : 503 / 13 / DP/ SKPR / IX / 2019
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Legality;
