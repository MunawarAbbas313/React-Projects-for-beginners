import { useState , useEffect } from 'react'
import { TodoProvider } from './Contexts/Todocontext'

import './App.css'
import { TodoForm, TodoItem } from './Components';

function App() {
  const [todos, setTodos] = useState([]);
  //Add todo Function
  const addTodo = (todo) =>{
    //Date.now() always create a new number in this case we called it as id 
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
    
  }
  // Update todo Function
 //as todo is an array with an object inside so we used map
 // we have used Ternery operator insted of using if else 
  const updateTodo = (id, todo) => {
    setTodos((prev)=> prev.map((prevTodo) =>(prevTodo.id === id ? todo : prevTodo)))
  }

  // Delete function 
  // filter removes the element with same id while others cames as they are
  
  const deleteTodo = (id) => {
     setTodos((prev) => prev.filter((todo) => todo.id !== id ))
  }
  
  // Now making the toggler function
 // we remove {} from the call back when we do nt want anything to be returned
 // ... are used to take whole values
 // first we took all the values  as its an Object
 // then changed the completed from true to flase or false to true 
  const toggleComplete = (id)=>{
    setTodos((prev) => prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo , completed: !prevTodo.completed} : prevTodo) )

  }

  //  Local Storage in JS and React 
  // we setItems and getItems on setting we give key and value 
  // on getting we just use key and rest is done by react or Js
  // we will use useEffect hook to get the previous todos on refreshing or reopening the app
   useEffect(()=>{
       const todos =   JSON.parse(localStorage.getItem("todos"))

       // now getting the items
       if(todos && todos.length > 0) {
        setTodos(todos)
         
       }
   },[])

   // using second useEffect tho set items 
   useEffect(()=>{
    // use stringify to convert all the data into string 
    // pass todos to stringify 
          localStorage.setItem("todos", JSON.stringify(todos))
   },[todos])
  return (
    <TodoProvider value={{todos, addTodo, updateTodo , deleteTodo , toggleComplete}}>
     <div className="bg-[#172842] min-h-screen py-8">
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
            {/* Todo form goes here */} 
            <TodoForm/>
        </div>
        <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=>(
              <div className='w-full' key={todo.id}>
                <TodoItem todo={todo}/>
              </div>
            ))}
           
        </div>
    </div>
</div>
    </TodoProvider>
   
  )
}

export default App
