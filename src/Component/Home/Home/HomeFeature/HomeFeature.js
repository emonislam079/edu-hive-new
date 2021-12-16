import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './HomeFeature.css';

const HomeFeature = () => {
    return (
        <div>
        <div>
            <h6>Checkout Our Feature To Know Why We</h6>
            <h6>Are Best In This Platform</h6>
        </div>
        <Container>
        <Row className ='home-feature-row'>
                <Col xs={12} md={3} className='home-feature-portion'>
                    <div>
                        <h1>IC</h1>
                    </div>
                    <div>
                        <h6>Popular Courses</h6>
                        <p>We provide the most popular courses to enhance your skillset</p>
                    </div>
                </Col>
                <Col xs={12} md={3}className='home-feature-portion'>
                    <div>
                        <h1>IC</h1>
                    </div>
                    <div>
                        <h6>Popular Courses</h6>
                        <p>We provide the most popular courses to enhance your skillset</p>
                    </div>
                </Col>
                <Col xs={12} md={3} className='home-feature-portion'>
                    <div>
                        <h1>IC</h1>
                    </div>
                    <div>
                        <h6>Popular Courses</h6>
                        <p>We provide the most popular courses to enhance your skillset</p>
                    </div>
                </Col>
                <Col xs={12} md={3} className='home-feature-portion'>
                    <div>
                        <h1>IC</h1>
                    </div>
                    <div>
                        <h6>Popular Courses</h6>
                        <p>We provide the most popular courses to enhance your skillset</p>
                    </div>
                </Col>
                <Col xs={12} md={3} className='home-feature-portion'>
                    <div>
                        <h1>IC</h1>
                    </div>
                    <div>
                        <h6>Popular Courses</h6>
                        <p>We provide the most popular courses to enhance your skillset</p>
                    </div>
                </Col>
                <Col xs={12} md={3} className='home-feature-portion'>
                    <div>
                        <h1>IC</h1>
                    </div>
                    <div>
                        <h6>Popular Courses</h6>
                        <p>We provide the most popular courses to enhance your skillset</p>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>

    );
};

export default HomeFeature;