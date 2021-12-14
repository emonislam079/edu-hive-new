import React from 'react';
import { Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Instractor = (props) => {
    const{name, img, Position}= props.instractor
    AOS.init();
    return (
        <div>
            <Card className='shadow mb-5 bg-body rounded' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000">
        <Card.Img  variant="top" src={img}  />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
           {Position}
          </Card.Text>
        </Card.Body>
      </Card>
        </div>
    );
};

export default Instractor;