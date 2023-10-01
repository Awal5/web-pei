import React from "react";
import { LogoImage } from "@/data";

const Footer = () => {
  // mendeklarasikan logo image
  const { light } = LogoImage;
  return (
    <footer className="footer_1">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-6 col-md-5">
            <aside className="widget aboutwidget">
              <a href="/">
                <img src={light} alt="" />
              </a>
              <p>
                PT. Pindad Enjiniring Indonesia adalah satu-satunya anak
                perusahaan PT pindad yang berdiri sejak tahun 1992 dengan nama
                PT Daun Cakra Bhakti. Pada Tahun 1999 dilakukan perubahan nama
                perusahaan menjadi PT Cakra Mandiri Pratama, sebelum akhir nya
                pada tanggal 4 Desember 2015 menjadi PT pindad Enjiniring
                Indonesia yang berdiri dibawah naungan PT. Pindad.
              </p>
            </aside>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4">
            <aside className="widget contact_widgets">
              <h3 className="widget_title">Kontak & Alamat</h3>
              <p> 022-730-8158</p>
              <p>
                Jl. Jend Gatot Subroto No. 517, Bandung 40285,
                <br />
                Jl. Jend Gatot Subroto No. 517, Bandung 40285,
                <br />
                Jl. Kawi No. 04, Turen Malang.
              </p>
              <p>
                <a href="mailto:bdg.corporate@pei.pindad.com">
                  bdg.corporate@pei.pindad.com minku.cmp@gmail.com (Turen)
                </a>
              </p>
            </aside>
          </div>
          <div className="col-lg-3 col-sm-2 col-md-3">
            <aside className="widget social_widget">
              <h3 className="widget_title">social</h3>
              <ul>
                <li>
                  <a href="https://twitter.com/pindadenjind">
                    <i className="fa fa-twitter"></i>Twitter
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/PT-Pindad-Enjiniring-Indonesia-387084261834874/">
                    <i className="fa fa-facebook-square"></i>Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/pindad_enjiniringid/">
                    <i className="fa fa-instagram"></i>Instagram
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="copyright">
              © copyright {new Date().getFullYear()} by PT. Pindad Enjiniring
              Indonesia All right reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
