import React, { useState } from "react";
import "./ChooseUs.css";
import { Container, Row, Col } from "react-bootstrap";
import img from "../../assets/images/why-choose-us.png";
import { AiOutlinePlaySquare } from "react-icons/ai";
import Player from "react-player";
import ReactPlayer from "react-player";
function ChooseUs() {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      <Container>
        <Row>
          <Col lg="6">
            <div className="choose_content">
              <h2>Why Choose Us</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
                totam nesciunt necessitatibus aspernatur enim officia dolores ad
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
                totam nesciunt necessitatibus aspernatur enim officia dolores ad
                adipisicing elit. Autem totam nesciunt necessitatibus aspernatur
                enim officia dolores ad
              </p>{" "}
            </div>
          </Col>
          <Col lg="6">
            <div className="choose_img ">
              <img src={img} alt="" className="w-100" />

              <span
                className="play-icon"
                // onClick={() => setShowVideo(!showVideo)}
              ></span>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ChooseUs;
