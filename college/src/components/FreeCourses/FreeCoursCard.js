import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
import { RiUser4Line, RiStarFill } from "react-icons/ri";
import "./FreeCourses.css";
function FreeCoursCard(props) {
  return (
    <>
      <section>
        {/* <Container>
          <Row>
            <Col lg="12"> */}
        <div className="single_free_course">
          <div className="free_course_img mb-5">
            <img src={props.img} className="w-100" />
            <button className="btn free_btn">Free</button>
          </div>
          <div className="free_course_details mb-5">
            <h6 className="mt-4">{props.title}</h6>
            <div className="d-flex align-items-center gap-5 justify-content-between m-2">
              <span lassName="d-flex align-items-center ">
                <RiUser4Line className="icon" />
                {props.students}k
              </span>
              <span lassName="d-flex align-items-center ">
                <RiStarFill className="icon" />
                {props.rating}k
              </span>
            </div>
          </div>
        </div>
        {/* </Col>
          </Row>
        </Container> */}
      </section>
    </>
  );
}

export default FreeCoursCard;
