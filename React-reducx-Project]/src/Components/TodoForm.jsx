import React from "react";
import { useState } from "react";
import { addTodo } from "../Todo/TodoSilicer";
import {useDispatch} from "react-redux"
export function TodoForm()
{
    const [input , setInput] = useState("")

    const dispatch = useDispatch()

    const EventHandler = (e)=>{
        e.preventDefault()
        dispatch((addTodo(input)))
        setInput('')
    }

    return(
        <div>
           <div className="head flex justify-center flex-wrap mt-8">
           <span className="text-center text-wrap  bg-slate-300  p-4 w-auto text-3xl rounded mt-2 font-bold text-greenyellow">To Do list using Redux Toolkit </span>
           </div>
           <div className="Form flex justify-center align-center mt-10 flex-wrap text-center w-full">
            <form
              onSubmit={EventHandler}
    
            className="space-x-3 mt-6 flex-wrap" >
                <div className="data flex  gap-8 w-full flex-wrap ">
               <div className="fomtInput">
               <input
               value={input}
               onChange={(e)=> setInput(e.target.value)}
               type="text" className="  bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..." />
               </div>
                <div className="sbBtn">
                    <button className="btn text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add Tasl</button>
                </div>
                </div>
                
            </form>
           </div>
        </div>
    )
}