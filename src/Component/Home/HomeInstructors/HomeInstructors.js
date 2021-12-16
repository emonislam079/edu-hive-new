import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Instractor from '../../Instractor/Instractor';

import './HomeInstructors.css';

const HomeInstructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('./Instractor.JSON')
        .then(res => res.json())
        .then(data => setInstructors(data))
    }, []);
    return (

        <div>
            <h3>We Have Fantastic Instructor Team To Help Student And They Are Always Ready</h3>
            <Container>
                <Row>
                {
                    instructors.slice(0,4).map(instractor => <Instractor
                        key={instractor.id}
                        instractor={instractor}></Instractor>)
                }
                </Row>
            </Container>
            <div>
                <button><Link to='/instructor'>More Instructors</Link></button>
            </div>
        </div>
    );
};

export default HomeInstructors;