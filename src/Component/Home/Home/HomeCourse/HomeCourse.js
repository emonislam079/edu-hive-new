import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Course from "../../../Courses/Course";
import "./HomeCourse.css";

const HomeCourse = () => {
  const [Courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./Courses.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <Container className="home-course-part">
      <h3>We Do What We Love To Do</h3>
      <h3>
        Find the Best Courses
        <span style={{ color: "coral" }}> To Fit Your Needs</span>
      </h3>
      <Container>
      <Row xs={1} md={2} className="g-4 container shadow p-3 mb-5 bg-body rounded">
        {
            Courses.slice(0, 4).map (course=> <Course
            key={course.id}
            course={course}
            ></Course>)
        }
</Row>
      </Container>
    </Container>
  );
};

export default HomeCourse;
