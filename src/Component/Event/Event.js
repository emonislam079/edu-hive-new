import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Event.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Event = () => {
    AOS.init();
    const [Event, setEvents] = useState([]);
  useEffect(() => {
    fetch("./EventData.JSON")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  return (
    <Container>
      <Row>
        {Event.map((event) => (
          <Col xs={12} md={12} className="Event-box">
          <Row>
            <Col xs={12} md={8} className="Event-text">
              <div>
                <h3 className="fs-1 text-success text-start">{event.date} <small className="text-success fs-4 ">{event.month}</small></h3>
                <h1 className='text-start'>{event.name}</h1>
                <h6 className="text-secondary text-start"> <i class="fas fa-map-marker-alt"></i> {event.Place}</h6>
              <hr />
              <p>{event.details}</p>
              </div>
            </Col>
            <Col
              xs={12}
              md={4}
              style={{ paddingLeft: "0px", paddingRight: "0px" }}
            >
              <img data-aos="fade-left" data-aos-duration="3000" src={event.img} alt="" />
            </Col>
          </Row>
        </Col>
        ))}
      </Row>
    </Container>
  );
};


export default Event;