import React from "react";

const SectionTitle = ({ data }) => {
  const { title, subTitle } = data;
  return (
    <>
      <h2 className="sec_title">{title}</h2>
      <h4 className="sub_title text-text-decoration-underline pb-2">
        <a href="/portofolio">{subTitle}</a>
      </h4>
    </>
  );
};

export default SectionTitle;
