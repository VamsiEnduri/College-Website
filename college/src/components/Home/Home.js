import React from "react";
import "./Home.css";
import { Container, Row, col, Col } from "react-bootstrap";
import img from "../../assets/images/hero-img1.png";
function Home() {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_cont">
                <h2 className="mb-6">
                  AnyTime <br />
                  AnyWhere
                  <br /> Learn Here
                </h2>
                <p className="mb-6">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Autem totam nesciunt necessitatibus aspernatur enim officia
                </p>
                <div className="search">
                  <input type="text" placeholder="search" />
                  <button className="btn ">Search</button>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <img src={img} alt="" className="w-85 " />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
