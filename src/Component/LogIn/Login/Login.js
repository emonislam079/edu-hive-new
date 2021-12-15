import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

const Login = () => {
    return (
        <div className='justify-content-md-center'>
            <>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
            </>
        </div>
    );
};

export default Login;