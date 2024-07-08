import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        // LogIn credentials
        const userName = 'lavanya';
        const password = 'lallu@123';

        if (username === userName && password === password) {
            onLogin(true);
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <div className='login-container'>
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="login-input"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
            />
            {error && <p className='error'>{error}</p>}
            <button onClick={handleLogin} className="login-button">Login</button>
        </div>
    );
};

export default Login;