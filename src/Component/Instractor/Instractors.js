import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Instractor from './Instractor';

const Instractors = () => {
    const [Instractors, setInstractor]= useState([]);
    useEffect(()=>{
        fetch('./Instractor.JSON')
        .then(res => res.json())
        .then(data => setInstractor(data))
    }, [])
    return (
        <div className="container mt-5 pt-3">
            
            <Row xs={1} md={4} className="g-4 container shadow p-3 mb-5 bg-body rounded">
        {
            Instractors.map (instractor=> <Instractor
            key={instractor.id}
            instractor={instractor}
            ></Instractor>)
        }
</Row>
        </div>
    );
};

export default Instractors;