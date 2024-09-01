import React, { useEffect, useState } from "react";

export default function Github()
{
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/MunawarAbbas313')
        .then(res=> res.json())
        .then((data) => {
            console.log(data);
            setData(data)
            
        })
    }, [])
    return(
        <>
        <div className="text-center m-4 p-4 bg-gray-600 text-white text-3xl"> GitHub Followers : {data.followers}
            <img className="flex justify-center align-center" src={data.avatar_url} alt="" />
        </div>
        </>
    )
}