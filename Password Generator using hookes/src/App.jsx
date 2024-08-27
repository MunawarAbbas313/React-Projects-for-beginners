import { useState, useCallback,useEffect, useRef} from "react";


function App() {
  const [length , setLength] = useState(8);
  const [NumberAllowed , setNumberAllowed] = useState(false);
  const [CharAllowed, setCharAllowed] = useState(false);
  const [password , Setpassword] = useState("");
  //UseRef
  const PasswordRef = useRef(null)

  //UseCallBack is use to optimeze the code takes a callback funtion and dependencies

  const PasswordGenerator = useCallback( ()=>{
    let Pass = "";
    let Str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuwxyz";
    //Useref hook 
    
    if(NumberAllowed) Str += "0123456789";
    if(CharAllowed) Str += "!@#$%^&*()_+";

   for (let i = 1; i  <=length ; i ++) {
    let Char = Math.floor(Math.random() * Str.length + 1)
     Pass += Str.charAt(Char)
   }
   Setpassword(Pass);

  }, [length ,NumberAllowed , CharAllowed , Setpassword])
  //Copy funtion
  const CopyPas = useCallback(()=>{
    //writetext is a method that takes some paraMeters
    //current defines current text or value
    // select is a method that selects something
    PasswordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])
  //UseEffect takes a callBack function(inside which a function is called) and Dependenices
  useEffect(()=>{
    PasswordGenerator();
  },[length, NumberAllowed, CharAllowed, PasswordGenerator ])
  return (
    <>
      <div className="w-full max-w-md mx-auto p-10 shadow-md relative mt-52 bg-gray-500 px-4 my-8 rounded-xl ">
        <h1 className="text-center text-white text-3xl my-3  font-medium">Password Generator</h1>
        <div className="flex gap-2 w-full shadow-xl mb-4 overflow-hidden  rounded-lg ">
          <input value={password}
          className="outline-none w-full py-2 px-4 text-black"
          placeholder="Password "
          readOnly
          ref={PasswordRef}
           type="text" />
          <button 
          onClick={CopyPas}
          className="px-3 py-0.5 rounded-lg  outline-none  border-none font-medium bg-blue-200 cursor-pointer hover:bg-blue-400">COPY</button>
        </div>
        <div className="flex text-sm gap-x-2 items-center py-5">
        <div className="flex gap-x-1 ">
        <input
          min={8}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e)=>{setLength(e.target.value)}}
           type="range" />
           <label className="text-lg text-black font-medium">length:{length}</label>
        </div>
        <div className="flex gap-x-1">
          <input
          defaultChecked={NumberAllowed}
         onChange={()=>{
          setNumberAllowed((prev)=> !prev)
         }}
          type="checkbox" />
          <label className="text-lg font-medium text-black justify-center items-center" >Number</label>
        </div>
        <div className="flex gap-x-1 justify-center">
          <input 
          defaultChecked = {CharAllowed}
          onChange={()=>{
            setCharAllowed((prev)=> !prev)
          }}
          type="checkbox" />
          <label className="text-lg font-medium text-black " >Characters</label>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
