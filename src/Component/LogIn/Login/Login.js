import React, { useState } from 'react';
import { FloatingLabel, Form, Button, Spinner, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {isLoading, loginUser, user, signInWithGoogle} = useAuth();

    const location = useLocation();
    let navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate);
    }
    return (
        <div className='container mt-5 shadow-lg p-3 mb-5 bg-body rounded'>
            <h1>Log In</h1>
            {!isLoading && <Form onSubmit={handleLoginSubmit} >
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3 w-50 mx-auto mt-5"
                >
                    <Form.Control 
                    type="email" 
                    placeholder="name@example.com"
                    name="email"
                    onBlur={handleOnChange} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3 w-50 mx-auto">
                    <Form.Control 
                    type="password" 
                    placeholder="Password"
                    name="password"
                    onBlur={handleOnChange} />
                </FloatingLabel>
                <Button type='submit' variant="primary" size="lg">Login</Button>
                <Link to="/registration" className='text-decoration-none d-block fs-5 mt-2'>New User? Please Register</Link>
                <Button onClick={handleGoogleSignIn} className='mt-4' variant="primary" size="lg">Google Sign In</Button>
            </Form>}
            {isLoading && <Spinner animation="grow" variant="danger" />}
        {user?.email && <Alert severity="success" className='w-50 mx-auto'>Login successfully</Alert>}
        </div>
    );
};

export default Login;