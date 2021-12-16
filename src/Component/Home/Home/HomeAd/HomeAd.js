import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './HomeAd.css';

const HomeAd = () => {
    return (
        <Container>
            <Row className='homead-container'>
                <Col xs={12} md={7}>
                    <div>
                        <h5>We Have Experienced Professionals & We Do Our Best To Achieve Your Goal. Your Happiness Is Our First Priority.</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium</p>
                        <ul className='text-start'>
                            <li>
                                <h5>Best Quality Courses</h5>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </li>
                            <li>
                                <h5>Best Quality Courses</h5>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </li>
                            <li>
                                <h5>Best Quality Courses</h5>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </li>
                        </ul>
                    </div>

                </Col>
                <Col xs={12} md={5}>
                    <img style={{'width': '100%', 'height': '300px'}} src="https://i.ibb.co/W5LK2ST/e1.jpg" alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default HomeAd;