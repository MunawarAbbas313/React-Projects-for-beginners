import { useState , useCallback , useEffect, useRef} from "react";

function App(){
  const [length , setLength] = useState(8);
  const [NumAllowed , setNumAllowed] = useState(false);
  const [CharAllowed , setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");
  const passRef = useRef(null);
 const [PassStrength, setPassStrength] = useState("Fair")
  const GenPassword = useCallback(()=>{
    let pass = "";
    let Str = "ABCDEFGHIJKLMNOPQRSTUVWYXYZabcdefghijklmnoqurstuvwxyz";
   
   
  
    if(CharAllowed) Str+= "!@#$%^&*())_+>:{}:>?/";
    if(NumAllowed) Str += "0123456789";
    for(let i=1; i<=length ; i++)
    {
       let char = Math.floor(Math.random() * Str.length + 1)
       pass += Str.charAt(char);
       setPassword(pass);
      
      
    }
    if(length>9 && length<12)
    {
      setPassStrength("GOOD")
    }
    else if(length > 12 && length < 19)
    {
      setPassStrength("Strong")
    }
    else if(length > 19 && length <22)
    {
      setPassStrength("Very Strong")
    }
    else if(length > 22){
      setPassStrength("Un HackAble")
    }
    else{
      setPassStrength("Fair")
    }
   
   
  },[length, NumAllowed , CharAllowed , setPassword])
  
  const PastePassword  = useCallback(()=>{
    window.navigator.clipboard.writeText(Password)
    passRef.current?.select();
  },[Password])
  useEffect(() => {
    GenPassword();
  },[NumAllowed ,CharAllowed , GenPassword])


  return(
    <>
    <div className="container">
     <div className="gen">
      <h1 className="title">Strong Password <span>Generator</span></h1>
     </div>
     <div className="inputPg">
      <input 
      readOnly
      ref={passRef}
      value={Password}
      type="text" className="inputt" placeholder="Password" />
      <button 
      onClick={PastePassword}
      className="copybtn">Copy</button>
     </div>
     <div className="fun">
      <div className="rng">
        <input
        min={8}
        max={50}
        value={length}
        onChange={(e)=>{setLength(e.target.value)}}
        type="range" className="rngee"  />
        <label className="rngtit" >Length : {length}</label>
      </div>
      <div className="chRange">
        <input 
        defaultChecked={NumAllowed}
        onChange={()=>{
          setNumAllowed((prev)=> !prev);
        }}
         type="checkbox" className="chckbx" />
        <label className="chckbxTit">Numbers</label>
      </div>
      <div className="chRange">
        <input
        defaultChecked = {CharAllowed}
        onChange={()=>{
          setCharAllowed((prev)=> !prev)
        }}
         type="checkbox" className="chckbx" />
        <label className="chckbxTit">Characters</label>
      </div>
     
     </div>
     <div className="result">
      <span className="respara">{PassStrength}</span>
     </div>
    </div>
    </>
  )
}

export default App;