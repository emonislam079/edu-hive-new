import React, { useState } from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import {useNavigate } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {isLoading, loginUser, authError, user, signInWithGoogle} = useAuth();

    const location = useLocation();
    const history = useNavigate();


    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }
    return (
        <div className='container mt-5 shadow-lg p-3 mb-5 bg-body rounded'>
            <h1>Log In</h1>
            <>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3 w-50 mx-auto mt-5"
                >
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3 w-50 mx-auto">
                    <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
                <Button variant="primary" size="lg">Login</Button>
                <Link to="/registration" className='text-decoration-none d-block fs-5 mt-2'>New User? Please Register</Link>
                <Button onClick={handleGoogleSignIn} className='mt-4' variant="primary" size="lg">Google Sign In</Button>
            </>
        </div>
    );
};

export default Login;