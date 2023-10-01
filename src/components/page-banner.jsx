import React from "react";

const PageBanner = ({ title, name, slug }) => {
  return (
    <section className="pageBanner">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner_content text-center">
              <h4>
                <a href="/">home</a> -
                {slug ? <a href="/news">{name + "-"}</a> : name} {slug}
              </h4>
              <h2>{title}</h2>
            </div>
          </div>
        </div>
      </div>
      d
    </section>
  );
};

export default PageBanner;
