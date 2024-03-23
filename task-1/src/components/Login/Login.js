
import React, { useState } from 'react';
import './Login.css'; 
const Login = () => {
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    if (!username || !password) {
      alert('All fields are required');
      return;
    } else {
      alert('Login Successfully');
    }
  };

  return (
    <div className="login-container" id="login">
      <h2>Login</h2>
      <div>
        <label htmlFor="name"><b>Username:</b></label>
        <input type="text" id="name" name="name" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter Your Valid Username' />
      </div>
      <div>
        <label htmlFor="password"><b>Password:</b></label>
        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Your Valid Password' />
       </div>
     <div className='button1'>
       <button onClick={handleLogin}><b>Login</b></button>
      </div>
    </div>
    
  );
};

export default Login;
