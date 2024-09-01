import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './compnents/Home/Home.jsx';
import About from './compnents/About/About.jsx';
import Contect from './compnents/Contect/Contect.jsx';
import './index.css'
import User from './compnents/User/User.jsx';
import Github from './compnents/Github/Github.jsx';
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <div>Error occurred</div>, // Add error element
//     children: [
//       {
//         path: '',
//         element: <Home />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//       {
//         path: 'contact',
//         element: <Contect />,
//       },
//       {
//         path: '*',
//         element: <div>Route not found</div>, // Add catch-all route
//       },
//     ],
//   },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<App/>}>
      <Route path='' element = {<Home/>} />
      <Route path='about' element = {<About/>} />
      <Route path='contact' element = {<Contect/>} />
      <Route path='user/:userid' element = {<User/>} />
      <Route path='github' element = {<Github/>} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);