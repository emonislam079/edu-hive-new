import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from './Course';

const Courses = () => {
    const [Courses, setcourses]= useState([]);
    useEffect(()=>{
        fetch('./Courses.JSON')
        .then(res => res.json())
        .then(data => setcourses(data))
    }, [])
    return (
        <div className="container mt-5 pt-3">
            
            <Row xs={1} md={2} className="g-4 container shadow p-3 mb-5 bg-body rounded">
        {
            Courses.map (course=> <Course
            key={course.id}
            course={course}
            ></Course>)
        }
</Row>
        </div>
    )
};

export default Courses;