

import { useState } from 'react'
function App() {
  
  const [color,setColor] = useState("lightgreen");
  return (
 
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}} >
      <div className='flex fixed justify-center flex-wrap bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-12 shadow-lg px-3 py-2 rounded-xl  cursor-pointer bg-green-300'>
          <button onClick={()=>{setColor("red")}} className='outline-none px-4 text-white text-sm font-medium py-1 shadow-3xl rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300' style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>{setColor("yellow")}} className='outline-none px-4 text-white text-sm font-medium py-1 shadow-3xl rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300' style={{backgroundColor:"yellow"}}>Yellow</button>
          <button onClick={()=>{setColor("black")}}  className='outline-none px-4 text-white text-sm font-medium py-1 shadow-3xl rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300' style={{backgroundColor:"black"}}>Black</button>
          <button onClick={()=>{setColor("aqua")}}  className='outline-none px-4 text-white text-sm font-medium py-1 shadow-3xl rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300' style={{backgroundColor:"aqua"}}>Aqua</button>
          <button onClick={()=>{setColor("green")}}  className='outline-none px-4 text-white text-sm font-medium py-1 shadow-3xl rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300' style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>{setColor("pink")}}  className='outline-none px-4 text-white text-sm font-medium py-1 shadow-3xl rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300' style={{backgroundColor:"pink"}}>Pink</button>
          <button onClick={()=>{setColor("maroon")}}  className='outline-none px-4 text-white text-sm font-medium py-1 shadow-3xl rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300' style={{backgroundColor:"maroon"}}>Maroon</button>
          <button onClick={()=>{setColor("gray")}}  className='outline-none px-4 text-white text-sm font-medium py-1 shadow-3xl rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300' style={{backgroundColor:"gray"}}>Gray</button>
          <button onClick={()=>{setColor("blue")}}  className='outline-none px-4 text-white text-sm font-medium py-1 shadow-3xl rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300' style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=>{setColor("orange")}}  className='outline-none px-4 text-white text-sm font-medium py-1 shadow-3xl rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300' style={{backgroundColor:"orange"}}>Orange</button>
        </div>
      </div>  
    </div>
     
    </>
  )
}

export default App
