// App.js
import React from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserContextProvider from './Context/UserContextProvider';
import Login from './Components/Login';
import Profile from './Components/Profile';

 

function App() {
     

    return (
        
        <>
        
       
        
        
        <UserContextProvider>
        <NavBar/>
        
        <Home/>
        <Login/>
        <Profile/>
        

        </UserContextProvider>
       
        
        </>
       
    )
}

export default App;
