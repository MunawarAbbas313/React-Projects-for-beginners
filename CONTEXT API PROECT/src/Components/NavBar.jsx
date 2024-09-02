import React  from "react";
import { useNavigate } from 'react-router-dom';
export default function NavBar()
{
  
    const handleSubmit = (e)=>{
        e.prventDefault();
        
    }
    return (
        <>
          <nav>
            <div className="navContent">
                <div className="left">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAkwnCTbj5fEtgTWkKm5YvMXQoSmoItOgkWA&s" alt="" className="logo" />
                </div>
                <div className="right">
                    <ul className="list">
                        <li className="listItem">Home</li>
                        <li className="listItem">About</li>
                        <li className="listItem">Contect</li>
                    </ul>
                    <div className="bts">
                        <button onClick={handleSubmit} className="login">Login</button>
                        <button disabled  className="signup">SignUp</button>
                    </div>
                </div>
            </div>
            </nav>       
        </>
    )
}