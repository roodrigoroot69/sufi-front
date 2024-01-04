import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [name, setName] = useState(null);

  const login = (newToken) => {
    setToken(newToken);
  };

  const logout = () => {
    setToken(null);
  };


  const assingName = (name) => {
    setName(name);
  };

  const clenaName = () => {
    setName(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, name, clenaName, assingName }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export { AuthProvider, AuthContext };
