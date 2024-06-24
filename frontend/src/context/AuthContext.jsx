import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for API calls

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/auth/login`, {
        emailId: email,
        password,
      });

      if (response.data.success) {
        setIsLoggedIn(true);
        setUser(response.data.user); // Store user data if available
        // Store authentication token securely (e.g., in local storage)
        return { success: true };
      } else {
        return { success: false, error: response.data.error };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'Login failed' }; // Generic error message
    }
  };

  // Check for existing authentication on component mount
  useEffect(() => {
    // Check for stored authentication token
    const storedToken = localStorage.getItem('auth_token');
    if (storedToken) {
      // Validate token with backend (if applicable)
      setIsLoggedIn(true); // Set initial login state based on token existence
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };