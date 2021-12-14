import React from 'react';
import { Card, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blog = (props) => {
    AOS.init();
    const {name, img, description}= props.blog
    return (
        <div>
            <Col data-aos="zoom-in" data-aos-duration="3000">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Blog;