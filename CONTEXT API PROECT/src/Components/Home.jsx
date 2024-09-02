import React  from "react";

export default function Home()
{
    return(
        <>
           <h1 className="text">
            Click <span className="tspan">Login to see</span> Dashbord
           </h1>
           <div className="ab">
            <div className="leftt">
                <img src="https://images.pexels.com/photos/1066176/pexels-photo-1066176.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <div className="right">
                <p>Hey Its me Munawar Abbas</p>
                <br />
                <p>This is a test project to know React Router and Context Api in a better way</p>
            </div>
           </div>
        </>
    )
}