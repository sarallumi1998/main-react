import React, { useState } from 'react';
import './SignUp.css'; 

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
   
   if (!username || !email || !password || !confirmPassword) {
    alert('All fields are required');
    return;
  }
  else{
    alert('Account Created Successfully');
  }

  };

  return (
    <div className="signup-container" id="signup">
    <h2>Sign Up</h2> 
      <div> 
        <label htmlFor="name">Username:</label> 
        <input type="text" id="name" name="name" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter Your Valid UserName' />
      </div>
      <div> 
        <label htmlFor="email" className="label-style">Email:</label> 
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Valid Email'/> 
      </div>
      <div> 
        <label htmlFor="password">Password:</label> 
        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Your Valid Password'/> 
      </div>
      <div> 
        <label htmlFor="confirmPassword">Conform Password:</label>  
        <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Conform Password'/> 
      </div>
      
      <button onClick={handleSignUp}>Create Account</button> 
     
    </div>
    
  );
};

export default SignUp;
