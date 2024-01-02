import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/style.css'

import RegisterUser from './pages/users/RegisterUser';
import LoginUser from './pages/users/LoginUser';
import { AuthProvider } from './AuthContext';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Index from './pages/main/Index';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RegisterUser />,
  },
  {
    path: "/registro",
    element: <RegisterUser />,
  },
  {
    path: "/entrar",
    element: <LoginUser />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
