import React from "react";
import { RiBookOpenLine, RiUser2Line, RiStarFill } from "react-icons/ri";
// import img1 from "../../assets/images/web-design.png";
// import img2 from "../../assets/images/web-design.png";
// import img3 from "../../assets/images/web-design.png";
import "./Courses.css";
function CourseCard(props) {
  //   const [lesson, rating, imgUrl, students] = props.item;

  return (
    <div>
      <div className="single_course_item">
        <div className="course_img">
          <img src={props.img} className="w-100" />
        </div>

        <div className="course_details">
          <h5 className="course_title">{props.title}</h5>
        </div>

        <div className="  d-flex justify-content-between ">
          <p className="lesson d-flex justify-content-between align-items-center">
            <RiBookOpenLine className="icon" />
            {props.lesson}Lessons
          </p>

          <p className="students d-flex gap-1  align-items-center">
            <RiUser2Line className="icon" />
            {props.students} students
          </p>
        </div>

        <div className=" d-flex justify-content-between ">
          <p className="rating d-flex justify-content-between align-items-center">
            <RiStarFill className="icon" />
            {props.rating} Rating
          </p>

          <p className="enroll d-flex gap-1  align-items-center">
            <a href="#">Enroll</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
