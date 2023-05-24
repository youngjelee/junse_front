import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Router';
import {   createBrowserRouter,
  RouterProvider, } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Router from './Router';

const router = createBrowserRouter(Router());



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
