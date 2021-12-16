import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './HomeCourse.css';

const HomeCourse = () => {
    return (
        <div>
            <h3>We Do What We Love To Do. Find the Best Courses To Fit Your Needs</h3>
            <Container>
                <Row className ='home-feature-row'>
                    <Col xs={11} md={3} className='home-feature-portion'>
                        <h4>Logic</h4>
                    </Col>
                    <Col xs={11} md={3} className='home-feature-portion'>
                        <h4>Logic</h4>
                    </Col>
                    <Col xs={11} md={3} className='home-feature-portion'>
                        <h4>Logic</h4>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomeCourse;