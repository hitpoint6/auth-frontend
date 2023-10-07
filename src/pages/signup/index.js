import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';

function Signup() {
    const { isAuthenticated, setIsAuthenticated } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    if (isAuthenticated) {
        navigate('/dashboard');
    }

    const signup = async () => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/signup`, { email, password }, { withCredentials: true });
            console.log(response);
            setMessage(response.data);

            setIsAuthenticated(true);
            navigate('/dashboard');
        } catch (error) {
            console.log(error);
            setMessage(`${error.response.data}`);
        }
    };

    const login = async () => {
        try {
            console.log(email, password);
            await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/login`, { email, password }, { withCredentials: true });

            setIsAuthenticated(true);
            navigate('/dashboard');
        } catch (error) {
            console.log(error);
            setMessage(`${error.response.data}`);
        }
    };

    return (
        <div className="mt-10 max-w-md mx-auto" >
            <input
                className="w-full p-2 mb-4 border rounded-md"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className="w-full p-2 mb-4 border rounded-md"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={signup} className="custom_button w-full">
                Signup
            </button>
            <button onClick={login} className="custom_button w-full">
                Login
            </button>

            {message && <div className="mt-4 text-center">{message}</div>}
        </div>

    );
}

export default Signup;
