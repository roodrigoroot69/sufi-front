import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/style.css'

import RegisterUser from './pages/users/RegisterUser';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RegisterUser/>
  </React.StrictMode>,
)
