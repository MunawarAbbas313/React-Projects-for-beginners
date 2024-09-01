import React, { useState, useEffect } from 'react';

function NavBar(){
    const [color, setColor] = useState("white")
    const [buttonText, setButtonText] = useState("LIGHT")
    const [TextColor , setTextColor ] = useState("rgb(89, 82, 82)")

    const handleBackgroundChange = ()=>{
        if(color === "white") {
            setColor("black");
            setButtonText("DARK");
            setTextColor("rgb(89, 82, 82)");
           
        } else {
            setColor("white");
            setButtonText("LIGHT");
            setTextColor("rgba(255, 255, 255, 0.651)");
        }
    }

    useEffect(() => {
       if(color === "white") {
        document.body.style.background = "black";
        
       } else {
        document.body.style.background = "white";
       
       }
    }, [color]);

    return(
        <>
          <div>
            <div className="nav">
                <div className="leftNav">
                    <ul className="navUl" >
                        <li className="navItem"   style={{color:TextColor}} >HOME</li>
                        <li className="navItem"  style={{color:TextColor}}>CONTACT</li>
                        <li className="navItem"  style={{color:TextColor}}>ABOUT</li>
                    </ul>
                </div>
                <div className="rightNav">
                    <button className="navBtn" onClick={handleBackgroundChange}>{buttonText}</button>
                </div>
            </div>
          </div>
        </>
    )
}

export default NavBar;