import React from "react";
import { Container } from "react-bootstrap";
import Divider from "../atoms/Divider";
import { CompanyCultureData } from "@/data";

const Culture = () => {
  return (
    <section>
      <Container>
        <Divider />
        <h1 className="text-orange text-center">Budaya Perusahaan</h1>
        <div className="text-black">
          <h4
            className="text-white p-3 text-uppercase bg-orange shadow"
            style={{
              width: "fit-content",
            }}
          >
            Budaya Perusahaan
          </h4>
          <p>
            Untuk mencapai Visi dan Misi Perusahaan, PT Pindad Enjiniring
            Indonesia menuangkan ke dalam 3 (tiga) Tata Nilai Budaya Perusahaan,
            yaitu :
          </p>

          {CompanyCultureData.map((item, index) => {
            return (
              <div key={index}>
                <h4
                  className="text-white p-2"
                  style={{
                    width: "fit-content",
                    backgroundColor: "#333333ff",
                  }}
                >
                  {index + 1}. {item.title}
                </h4>
                <p>{undefined !== item.desc && item.desc}</p>
                <ul>
                  {undefined !== item.subs &&
                    item.subs.map((sub, index) => <li key={index}>{sub}</li>)}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Culture;
