import React from "react";
// import "./Courses.css";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../../assets/images/web-design.png";
import img2 from "../../assets/images/ui-ux.png";
import img3 from "../../assets/images/graphics-design.png";
// import { RiBookOpenLine, RiUser2Line, RiStarFill } from "react-icons/ri";
import CourseCard from "./CourseCard";
function Courses() {
  const data = [
    {
      id: 1,
      title: "Website Design",
      lesson: "20 ",
      students: "20k",
      rating: 4.7,
      pic: img1,
    },
    {
      id: 2,
      title: "Graphic Design",
      lesson: "15 ",
      students: "12k",
      rating: 4.1,
      pic: img2,
    },
    {
      id: 3,
      title: "UI/UX BootCamp",
      lesson: "20 lessons",
      students: "17k",
      rating: 4.4,
      pic: img3,
    },
  ];

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <div className="course_top d-flex   justify-content-center align-items-center">
                <div className="course_top_left w-50">
                  <h2>Our Popular Courses</h2>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Autem totam nesciunt necessitatibus aspernatur enim officia
                    dolores ad
                  </p>
                </div>
                <div className="w-50 text-end">
                  <button
                    className="btn "
                    style={{ backgroundColor: "#46c79a" }}
                  >
                    See All
                  </button>
                </div>
              </div>
            </Col>
            {data.map((item, index) => {
              return (
                <Col lg="4" md="6" key={index}>
                  <CourseCard
                    item={item}
                    img={item.pic}
                    lesson={item.lesson}
                    rating={item.rating}
                    title={item.title}
                    students={item.students}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Courses;
