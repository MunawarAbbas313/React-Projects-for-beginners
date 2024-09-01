import React from "react"
import Header from "./compnents/Header/Header"
import Footer from "./compnents/Footer/Footer"
import { Outlet } from "react-router-dom"


function App() {
  
  return (
    <>
       <Header/>
 
    <Outlet />
    <Footer />
    </>
  )
}

export default App
