import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      alert('Logged in successfully!');
      window.location.href = '/dashboard';
    } else {
      alert('Invalid email or password!');
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      <style>{`
        .login-container {
          max-width: 400px;
          margin: 80px auto;
          padding: 40px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          background-color: #fff;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .login-title {
          text-align: center;
          margin-bottom: 24px;
          font-size: 28px;
          color: #333;
        }
        .login-form {
          display: flex;
          flex-direction: column;
        }
        .login-form label {
          margin-bottom: 6px;
          font-weight: 600;
          color: #444;
        }
        .login-form input {
          padding: 10px 12px;
          margin-bottom: 18px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 16px;
          transition: border-color 0.3s;
        }
        .login-form input:focus {
          border-color: #007BFF;
          outline: none;
        }
        .login-form button {
          padding: 10px;
          background-color: rgb(127, 178, 232);
          color: white;
          font-size: 16px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.4s;
        }
        .login-form button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};
// g.ugu.iuiguilcrjrxr
export default Login;
