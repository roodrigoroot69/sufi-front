import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/style.css'

import RegisterUser from './pages/users/RegisterUser';
import LoginUser from './pages/users/LoginUser';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
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
    <RouterProvider router={router} />
  </React.StrictMode>,
)