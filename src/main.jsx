import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './AuthProviders/AuthProvider';
import { RouterProvider } from 'react-router-dom';
import Router from './Routers/Router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Router}>

      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
