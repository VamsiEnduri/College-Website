import React from "react";
import "./Features.css";
import { Container, Row, Col } from "react-bootstrap";
import { RiDraftLine, RiDiscussLine, RiContactsBookLine } from "react-icons/ri";
function Features() {
  const FeaturedData = [
    {
      title: "Quick Learning",
      desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit  Autem totam nesciunt necessitatibus aspernatur enim officiLorem ipsum   ",
      icon: <RiDraftLine />,
    },

    {
      title: "All Time Support",
      desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit  Autem totam nesciunt necessitatibus aspernatur enim officiLorem ipsum ",
      icon: <RiDiscussLine />,
    },

    {
      title: "Certification",
      desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit  Autem totam nesciunt necessitatibus aspernatur enim officiLorem ipsum  ",
      icon: <RiContactsBookLine />,
    },
  ];
  return (
    <>
      <section>
        <Container>
          <Row>
            {FeaturedData.map((item, index) => {
              return (
                <Col lg="4" md="6" key={index}>
                  <div className="single_feature  text-center px-4">
                    <h2 className="icon mb-4">{item.icon}</h2>
                    <h5>{item.title}</h5>
                    <p> {item.desc}</p>
                  </div>
                </Col>
              );
            })}
            {/* <Col lg="4"></Col> */}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Features;
