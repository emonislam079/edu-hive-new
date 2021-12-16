import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './HomeAchive.css';

const HomeAchive = () => {
    return (
        <div className='bg-primary'>
            <h3>Lets Have A Look At Some of Achivements For Years We Get</h3>
            <Container>
                <Row>
                    <Col xs={6} md={3} className='home-achive'>
                        <div>
                            <h5>Ic</h5>
                        </div>
                        <div>
                            <h2>50+</h2>
                            <p>Courses</p>
                        </div>
                    </Col>
                    <Col xs={6} md={3}className='home-achive'>
                        <div>
                            <h5>Ic</h5>
                        </div>
                        <div>
                            <h2>50+</h2>
                            <p>Courses</p>
                        </div>
                    </Col>
                    <Col xs={6} md={3} className='home-achive'>
                        <div>
                            <h5>Ic</h5>
                        </div>
                        <div>
                            <h2>50+</h2>
                            <p>Courses</p>
                        </div>
                    </Col>
                    <Col xs={6} md={3} className='home-achive'>
                        <div>
                            <h5>Ic</h5>
                        </div>
                        <div>
                            <h2>50+</h2>
                            <p>Courses</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomeAchive;