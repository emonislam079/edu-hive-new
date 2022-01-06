import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Course.css'
import { Link } from 'react-router-dom';

const Course = (props) => {
    
    
    AOS.init();
    const {name, img, description, duration, price, instructor, classDay, time}= props.course
    return (
        <div>
            <Col className='shadow mb-5 bg-body rounded' data-aos="zoom-in" data-aos-duration="3000">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title>Instructor: {instructor}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Card.Text>
            Day: {classDay} Time: {time}
          </Card.Text>
          <Card.Text>
            Duration: {duration}
          </Card.Text>
          <Link to='/purchase'> <Button>Buy Now {price}$</Button></Link>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Course;