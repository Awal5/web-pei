import React from "react";
import { ContactInfosBlock, ContactInfosList } from "@/data";

const ContactInfos = () => {
  const { title, description } = ContactInfosBlock;
  return (
    <section className="commonSection client_2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="sec_title">{title}</h2>
            <p className="sec_desc">{description}</p>
          </div>
        </div>
        <div className="row">
          {ContactInfosList.map(({ title, infos }, index) => (
            <div
              className="col-lg-4 col-sm-6 col-md-3"
              key={`contact-infos-${index}`}
            >
              <div className="singleClient_2">
                <h2 className="fw-bold">{title}</h2>
                {infos.map(({ title, name, link }, index) => (
                  <p className="text-black" key={`contact-infos-list-${index}`}>
                    {name}
                    <a href={link} style={{ color: "orange" }}>
                      {title}
                    </a>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfos;
