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
        <div className="w-96 p-8 bg-white rounded shadow">
            <input
                className="w-full p-2 mb-4 border rounded"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                className="w-full p-2 mb-4 border rounded"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={signup} className="w-full p-2 mb-2 bg-blue-500 text-white rounded">
                Signup
            </button>
            <button onClick={login} className="w-full p-2 bg-green-500 text-white rounded">
                Login
            </button>
            {message && <div className="mt-4 text-center">{message}</div>}
        </div>
    );
}

export default Signup;
