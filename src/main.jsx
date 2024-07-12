import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Course from './pages/Course.jsx';
import Faq from './pages/Faq.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import Contact from './pages/Contact.jsx';
import Price from './pages/Price.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/course',
    element: <Course />,
  },
  {
    path: '/faq',
    element: <Faq />,
  },
  {
    path:'/contact',
    element: <Contact />,
  },
  {
    path: '/price',
    element: <Price/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
);
