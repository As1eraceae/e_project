import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/LoginSignup.css'


const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const response = await fetch('/users.json');
      const users = await response.json();
      return users;
    } catch (err) {
      setError('Error fetching user data');
      return [];
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const users = await fetchUsers();

    if (isLogin) {
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        localStorage.setItem('token', JSON.stringify(user));
        navigate('/');
      } else {
        setError('Invalid email or password');
      }
    } else {
      const userExists = users.some((user) => user.email === email);
      if (userExists) {
        setError('Email already exists');
      } else {
        const newUser = { id: Date.now(), name, email, password };
        users.push(newUser);
        localStorage.setItem('token', JSON.stringify(newUser));
        navigate('/');
      }
    }
  };

  return (
    <div className="signup">
      
      <form className="signup_container" onSubmit={handleSubmit}>
         <h2>{isLogin ? 'Login' : 'Signup'}</h2>
        {!isLogin && (   
            <div className="signup_fields">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}
        <div className="signup_fields">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="signup_fields">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button class="btn" type="submit">{isLogin ? 'Login' : 'Signup'}</button>
        <a class="change" onClick={() => setIsLogin(!isLogin)}>  {isLogin ? 'Switch to Signup' : 'Switch to Login'} </a>
      </form>
     
    </div>
  );
};

export default LoginSignup;
