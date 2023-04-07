import React from "react";
// import FreeCourseCard from "./FreeCoursCard";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../../assets/images/seo.png";
import img2 from "../../assets/images/web-development.png";
import img3 from "../../assets/images/kids-learning.png";
import FreeCoursCard from "./FreeCoursCard";
// import { RiUser4Line, RiStarFill } from "react-icons/ri";

function FreeCourses() {
  const freeCourseData = [
    {
      id: 1,
      title: "SEO Learning",
      img: img1,
      rating: 1.5,
      students: 5.3,
    },

    {
      id: 2,
      title: "Web Devlopment",
      img: img2,
      rating: 4.5,
      students: 5.3,
    },
    {
      id: 3,
      title: "Automation Testing",
      img: img3,
      rating: 2.7,
      students: 5.3,
    },
    {
      id: 4,
      title: "DataBase",
      img: img1,
      rating: 2.7,
      students: 5.3,
    },
  ];
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-3">
              <h2>OurFree Courses</h2>
            </Col>
            <>
              {freeCourseData.map((item) => {
                return (
                  <Col lg="3">
                    <FreeCoursCard
                      item={item}
                      img={item.img}
                      rating={item.rating}
                      students={item.students}
                      title={item.title}
                    />
                  </Col>
                );
              })}
            </>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default FreeCourses;
