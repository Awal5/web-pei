import React from "react";
import { Container } from "react-bootstrap";
import Divider from "../atoms/Divider";
import { VisionMissionData } from "@/data";

const VisionMission = () => {
  return (
    <section>
      <Container>
        <Divider />
        <h1 className="text-orange text-center">Visi dan Misi</h1>
        {VisionMissionData.map((item, index) => {
          return (
            <div key={index}>
              <h1
                className="text-white p-3 text-uppercase bg-orange h1 shadow"
                style={{
                  width: "fit-content",
                }}
              >
                {item.title}
              </h1>
              <p>{item.desc}</p>
              <ol type="1">
                {undefined !== item.subs &&
                  item.subs.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
              </ol>
            </div>
          );
        })}
      </Container>
    </section>
  );
};

export default VisionMission;
