import React from "react";
import { useParams } from "react-router-dom";
export default function User(){
    const {userid} = useParams();
    return(
        <>
       <div className="text-center text-white text-3xl bg-gray-600 p-4">User:{userid}</div>
        </>
    )
}