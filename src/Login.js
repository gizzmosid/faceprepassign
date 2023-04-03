import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import {Home} from "./Home"

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add the logic to validate the username and password
    if (username === 'admin' && password === 'admin@123') {
      setIsLoggedIn(true);
      setErrorMessage('');
    } else {
      setErrorMessage('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }

  return (
    <div class="p-5 " style={{
      backgroundColor: '#ADD8E6',
      width: '100%',
      height: '100%',
      borderRadius:'20px !important'
    }}> 
    <div class=" container p-11 m-5 " >
      <h1>Login Page</h1>
    

<form class="container p-11 m-5" onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Username(admin)</label>
    <input type="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={username}
          onChange={handleUsernameChange}/>
    <div id="emailHelp" class="form-text">We'll never share your Username with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password(admin@123)</label>
    <input type="password" class="form-control" id="exampleInputPassword1" value={password}
          onChange={handlePasswordChange}/>
  </div>
  
  <button type="submit" class="btn btn-primary">Log in</button>
</form>
      {errorMessage && <p>{errorMessage}</p>}
      {isLoggedIn && (
        <div>
        
        
        </div>
      )}
    </div>
    </div>
  );
};

export default LoginPage;
