import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';
import { Helmet } from 'react-helmet';

function Signup() {
    const { isAuthenticated, setIsAuthenticated } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    if (isAuthenticated) {
        navigate('/dashboard');
    }

    const signup = async () => {
        if (!isValidEmail(email)) {
            setErrorMessage('Please enter a valid email.');
            return;
        }

        try {
            await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/signup`, { email, password }, { withCredentials: true });

            setIsAuthenticated(true);
            navigate('/dashboard');
        } catch (error) {
            console.log(error);
            setErrorMessage(`${error.response.data}`);
        }
    };

    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const login = async () => {
        if (!isValidEmail(email)) {
            setErrorMessage('Please enter a valid email.');
            return;
        }
        try {
            await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/login`, { email, password }, { withCredentials: true });

            setIsAuthenticated(true);
            navigate('/dashboard');
        } catch (error) {
            console.log(error);
            setErrorMessage(`${error.response.data}`);
        }
    };

    const emailInputHandler = (e) => {
        setEmail(e.target.value);
    }

    const passwordInputHandler = (e) => {
        setPassword(e.target.value);
    }

    return (
        <>
            <Helmet>
                <title>Signup Page</title>
                <meta name="description" content="This is the Signup page." />
            </Helmet>
            <div className="mt-10 max-w-md mx-auto" >
                <input
                    className="w-full p-2 mb-4 border rounded-md"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={emailInputHandler}
                />
                <input
                    className="w-full p-2 mb-4 border rounded-md"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={passwordInputHandler}
                />
                <button onClick={signup} className="custom_button w-full">
                    Signup
                </button>
                <button onClick={login} className="custom_button w-full">
                    Login
                </button>

                {errorMessage && <div className="mt-4 text-center text-red-400">{errorMessage}</div>}
            </div>
        </>


    );
}

export default Signup;
