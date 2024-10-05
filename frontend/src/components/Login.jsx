import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // For navigation
import { useUser } from './UserContext'; // Import the context
import "./login.css";
import NavBar from './NavBar';
import Copyright from './cr';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const navigate = useNavigate(); // Initialize useNavigate hook
  const { setUsername } = useUser(); // Get setUsername from context

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        email,
        password,
      });

      const { user } = response.data; // Adjust according to your server response
      setUsername(user.name); // Set username and save it to localStorage
      navigate('/programs'); // Redirect to homepage
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('Failed to log in. Please check your credentials and try again.');
    }
  };

  return (
    <>
    <NavBar />
    <div className="login-popup">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button className="log" type="submit">Login</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
    <Copyright />
    </>
  );
};

export default Login;

