import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [name, setName] = useState(null);

  const login = (newToken) => {
    setToken(newToken);
    Cookies.set('token', newToken);
  };

  const logout = () => {
    setToken('');
    Cookies.remove('token');
  };


  const assingName = (name) => {
    setName(name);
    Cookies.set('name', name);
  };

  const clenaName = () => {
    setName('');
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
