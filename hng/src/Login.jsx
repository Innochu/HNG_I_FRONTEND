import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Track login request state

  const handleLogin = async (event) => {
    event.preventDefault();

    setIsLoading(true); // Set loading state to indicate request in progress
    setErrorMessage(''); // Clear any previous errors

    // Prepare login data
    const loginData = {
      username,
      password,
    };

    try {
        // Send login request to the API (with your specific URL)
        const response = await fetch('https://localhost:32770/api/Auth/Login', { 
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(loginData),
        });
  

      // Handle successful response
      if (response.ok) {
        const responseData = await response.json();
        console.log('Login successful:', responseData);

        
      } else {
        // Handle failed response
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Login failed'); // Display specific error or generic message
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('An error occurred. Please try again later.'); // Generic error message for user
    } finally {
      setIsLoading(false); // Reset loading state regardless of success or failure
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <LoginForm
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        errorMessage={errorMessage}
        handleLogin={handleLogin}
        isLoading={isLoading} // Pass loading state to LoginForm for UI feedback (optional)
      />
    </div>
  );
}

export default Login;
