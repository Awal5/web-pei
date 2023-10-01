import React from "react";
import { Link } from "gatsby";

const CallToActionOne = ({ extraClassName, buttonClass }) => {
  return (
    <section className={`commonSection ${extraClassName}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3  col-sm-4 col-md-3 text-right">
            <h2 className="text-white">Informasi Lebih Lanjut</h2>
            <Link to="/contact" className={`common_btn ${buttonClass}`}>
              <span>Kontak Kami</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionOne;
