import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const login = (newToken) => {
    setToken(newToken);
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


AuthProvider.propTypes = {
    children: PropTypes.any.isRequired,
  };

export const useAuth = () => {
  return useContext(AuthContext);
};
