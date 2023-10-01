import React from "react";
import { Container } from "react-bootstrap";
import { FieldDevelopmentData } from "@/data";
import parse from "html-react-parser";
import Divider from "../atoms/Divider";

const FieldDevelopment = () => {
  return (
    <section>
      <Container>
        <Divider />
        <h1 className="text-orange text-center">
          BIDANG USAHA DAN PERKEMBANGAN USAHA
        </h1>
        <div>
          <h4
            className="text-white p-2 text-uppercase bg-orange shadow"
            style={{
              width: "fit-content",
            }}
          >
            Bidang Usaha
          </h4>
          {FieldDevelopmentData.map((item, index) => {
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
                <p>{parse(item.desc)}</p>
                <ol type="1">
                  {item.component.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ol>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FieldDevelopment;
