import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div>
            <div className='container mt-5 shadow-lg p-3 mb-5 bg-body rounded'>
            <h1>Register</h1>
            <>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Your Name"
                    className="mb-3 w-50 mx-auto mt-5"
                >
                    <Form.Control type="name" placeholder="Your name" />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3 w-50 mx-auto"
                >
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3 w-50 mx-auto">
                    <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Confirm Password" className="mb-3 w-50 mx-auto">
                    <Form.Control type="password2" placeholder="Confirm Password" />
                </FloatingLabel>
                <Button variant="primary" size="lg">Register</Button>
                <Link to="/login" className='text-decoration-none d-block fs-5 mt-2'>Already Register? Please Login</Link>
                
            </>
        </div>
        </div>
    );
};

export default Registration;