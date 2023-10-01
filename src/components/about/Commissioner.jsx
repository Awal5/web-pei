import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Divider from "../atoms/Divider";
import Image from "react-bootstrap/Image";
import parse from "html-react-parser";

const Commissioner = props => {
  const { managements } = props;

  // filter management yang mengandung kata komisa
  const filterByCommissioner = managements.filter(management =>
    management.position.includes("Komisa")
  );

  // sort management berdasarkan tanggal
  const sortByOldDate = filterByCommissioner.sort((a, b) => {
    return new Date(a.createdAt) - new Date(b.createdAt);
  });

  return (
    <section>
      <Container>
        <Divider />
        <h1 className="text-orange text-center">Dewan Komisaris</h1>
        <div>
          {sortByOldDate.map(management => (
            <Row key={management.id}>
              <Col lg={12} className="py-4">
                <h5
                  className="text-white p-2 text-uppercase bg-orange shadow"
                  style={{
                    width: "fit-content",
                  }}
                >
                  {management.position}
                </h5>
              </Col>
              <Col lg={4}>
                <Image
                  src={`http://localhost:4000/images/${management.image}`}
                  width={"100%"}
                />
                <div className="py-2">
                  <p className="text-black fs-4">
                    <strong>{management.name}</strong> <br />
                    {management.position}{" "}
                  </p>
                  <p></p>
                </div>
              </Col>
              <Col lg={8}>
                <p className="text-black">{parse(management.description)}</p>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Commissioner;
