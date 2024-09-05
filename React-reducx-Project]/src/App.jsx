import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoForm } from './Components/TodoForm'
import { Todos } from './Components/Todos'


function App() {
  

  return (
    <>
      <TodoForm/>
      <Todos/>
   
    </>
  )
}

export default App
