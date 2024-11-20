// Login.js
import React, { useState } from 'react';
import "../styles/Login.css"
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/user/login', { email, password });
      if (response.status === 200) {
        console.log('Login successful:', response.data);
        window.location.href = '/myprofile';
      } else {
        console.error('Login failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="show-password-container">
          <input
            type="checkbox"
            id="show-password"
            onChange={(e) => {
              const passwordField = document.getElementById('password');
              if (e.target.checked) {
                passwordField.type = 'text';
              } else {
                passwordField.type = 'password';
              }
            }}
          />
          <label htmlFor="show-password">Show Password</label>
        </div>
        <div className="SignUp">
          <p>Don't have an account? <Link to="/SignUp"  >Click here to register</Link></p>
        </div>
      <button type="button" onClick={handleSubmit}>Login</button>
      
      </form>
    </div>
  );
};

export default Login;